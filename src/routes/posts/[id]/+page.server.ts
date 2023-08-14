import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getArticle = async () => {
		const article = await prisma.post.findUnique({
			where: {
				id: params.id
			},
			select: {
				id: true,
				title: true,
				body: true,
				createdAt: true,
				updatedAt: true,
				author: {
					select: { id: true, username: true }
				}
			}
		});
		if (!article) {
			throw error(404, 'Post not found');
		}

		return article;
	};

	return {
		article: getArticle()
	};
};
