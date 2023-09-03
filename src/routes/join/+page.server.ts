import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import zxcvbn from 'zxcvbn';
import type { PageServerLoad, Actions } from './$types';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const display_name = formData.get('display_name');
		const password = formData.get('password');
		const passwordConfirm = formData.get('passwordConfirm');
		// basic check
		const createUserSchema = z
			.object({
				display_name: z
					.string()
					.min(4, 'Display name is too short')
					.max(31, 'Display name is too long'),
				username: z
					.string()
					.min(4, 'Username is too short')
					.max(31, 'Username is too long')
					.regex(/^[a-z0-9_-]+$/gm)
					.trim()
					.toLowerCase(),
				password: z
					.string()
					.min(8)
					.refine(
						(password) => {
							const result = zxcvbn(password);
							return result.score >= 3;
						},
						{
							message: 'Password does not meet NIST guidelines'
						}
					),
				passwordConfirm: z.string()
			})
			.superRefine(({ passwordConfirm, password }, ctx) => {
				if (passwordConfirm !== password) {
					ctx.addIssue({
						code: 'custom',
						message: 'The passwords did not match'
					});
				}
			});
		const validationResult = createUserSchema.safeParse({
			display_name,
			username,
			password,
			passwordConfirm
		});
		if (!validationResult.success) {
			return fail(400, { message: validationResult.error.message });
		}
		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username', // auth method
					providerUserId: validationResult.data.username, // unique id when using "username" auth method
					password: validationResult.data.password // hashed by Lucia
				},
				attributes: {
					display_name: validationResult.data.display_name,
					username: validationResult.data.username
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			// check for unique constraint error in user table
			if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
				return fail(400, {
					message: 'Username already taken'
				});
			}
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, '/');
	}
};
