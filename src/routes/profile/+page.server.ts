import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db';
import type { Actions } from './$types';
import { z } from 'zod';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/enter?origin=/profile');
	console.info(session.user.userId);
	const posts = prisma.post.findMany({
		where: {
			authorId: session.user.userId
		}
	});
	return {
		userId: session.user.userId,
		username: session.user.username,
		display_name: session.user.display_name,
		posts
	};
};

export const actions = {
	deletePost: async (event) => {
		// auth
		const session = await event.locals.auth.validate();
		if (!session) return fail(401);
		// Validation
		const deletePostSchema = z.object({
			postId: z.string().cuid()
		});
		const formData = await event.request.formData();
		const postId = formData.get('postId');

		const validationResult = deletePostSchema.safeParse({ postId });
		if (!validationResult.success) {
			// * I don't reccomend this because it isn't use-friendly and it violates
			// * the 'security through obsurity' principal.
			return fail(400, { message: validationResult.error.message });
		}

		try {
			await prisma.post.delete({
				where: {
					id: validationResult.data.postId,
					// Ensure that the author is the one deleting it
					authorId: session.user.userId
				}
			});
		} catch (error) {
			return fail(500, { message: 'An unknown error occurred' });
		}
	}
} satisfies Actions;
