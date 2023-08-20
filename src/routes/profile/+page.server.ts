import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db';

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
		posts
	};
};
