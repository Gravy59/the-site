import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { prisma as client } from '$lib/db';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';

// expect error
export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(client),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;
