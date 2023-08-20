import { prisma } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const posts = prisma.post.findMany({
		take: 12,
		select: {
			id: true,
			title: true,
			body: true,
			lead: true,
			author: {
				select: {
					id: true,
					username: true
				}
			}
		}
	});
	return {
		posts
	};
};
