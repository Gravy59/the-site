import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/db';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { to } from '$lib/server/to';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/enter?origin=/posts/create');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		// Auth
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		// Validation
		const formData = await request.formData();
		const title = formData.get('title');
		const lead = formData.get('lead');
		const body = formData.get('body');

		const createPostSchema = z.object({
			title: z.string().min(3, 'Title is too short').max(100, 'Title is too long'),
			lead: z.string().min(3, 'Lead is too short').max(50, 'Lead is too long').or(z.literal('')),
			body: z.string().min(10, 'Body is too short').max(2500, 'Body is too long')
		});

		const validationResult = createPostSchema.safeParse({ title, lead, body });
		if (!validationResult.success) {
			return fail(400, { message: validationResult.error.message });
		}

		const [err, res] = await to(
			prisma.post.create({
				data: {
					title: validationResult.data.title,
					body: validationResult.data.body,
					lead: validationResult.data.lead,
					authorId: session.user.userId
				}
			})
		);

		if (err) {
			if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
				return fail(400, { message: 'Title is already taken' });
			}
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}

		throw redirect(303, '/profile?notice=Post%20created!');
	}
};
