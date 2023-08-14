import { fail, redirect } from '@sveltejs/kit';

import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/enter');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session)
			return fail(401, {
				message: 'Not signed in'
			});
		const formData = await request.formData();
		const title = formData.get('title');
		const body = formData.get('body');
		// basic check
		if (typeof title !== 'string' || title.length < 4 || title.length > 100) {
			return fail(400, {
				message: 'Invalid title (too long or too short)'
			});
		}
		if (typeof body !== 'string' || body.length < 10 || body.length > 5000) {
			return fail(400, {
				message: 'Invalid body (too long or too short)'
			});
		}
		try {
			await prisma.post.create({
				data: {
					title,
					body,
					authorId: session.user.userId
				}
			});
		} catch (e) {
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}

		throw redirect(303, '/profile?notice=Post created!');
	}
};
