import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { generateLuciaPasswordHash, generateRandomString } from 'lucia/utils';
async function main() {
	console.log('🌱 Seeding...');
	console.time(`🌱 Database has been seeded`);

	console.time('🧹 Cleaned up the database...');
	await prisma.user.deleteMany();
	await prisma.post.deleteMany();
	console.timeEnd('🧹 Cleaned up the database...');

	console.time(`👤 Created 5 users...`);

	// Don't take these seriously. I shouldn't have to say this.
	const users = async () => [
		{
			id: generateRandomString(15),
			display_name: 'CIA Director',
			username: 'cia',
			posts: {
				create: {
					title: 'Project Steel Sparrow',
					lead: 'Project Steel Sparrow aims to revolutionize the future of military engagement by developing a new class of super-soldiers capable of heightened physical and cognitive performance.',
					body: '<p>Project Steel Sparrow is a pioneering initiative aimed at pushing the boundaries of human capabilities through the use of advanced biotechnology, nanotechnology, and artificial intelligence. By creating super-soldiers endowed with heightened physical and cognitive skills, the program aspires to provide the Department of Defense with an unprecedented tactical advantage.</p><p>The primary focus is on optimizing human performance to drastically reduce risks and casualties while enhancing the effectiveness of military missions. This initiative is envisioned as a game-changing contribution to modern warfare, setting a new standard for combat capabilities.</p>'
				}
			},
			key: {
				create: {
					id: 'username:cia',
					hashed_password: await generateLuciaPasswordHash('MKULTRA')
				}
			}
		},
		{
			id: generateRandomString(15),
			display_name: 'FBI Director',
			username: 'fbi',
			posts: {
				create: {
					title: 'Operation Red Hat',
					lead: 'Operation Red Hat aims to proactively monitor and neutralize violent extremist activities within the United States.',
					body: '<p>Operation Red Hat represents a cutting-edge surveillance program sponsored by the FBI, specifically designed to monitor and counteract violent extremist activities within the United States. Leveraging state-of-the-art data analytics, machine learning algorithms, and multi-agency collaboration, the program aims to identify, track, and neutralize potential threats before they can manifest into actions. By focusing on both online and offline channels of extremist communication and organization, Operation Red Hat seeks to create a safer environment for all, while adhering to the stringent legal and ethical standards that govern domestic surveillance.</p>'
				}
			},
			key: {
				create: {
					id: 'username:fbi',
					hashed_password: await generateLuciaPasswordHash('INSURRECTION')
				}
			}
		},
		{
			id: generateRandomString(15),
			display_name: 'NSA Director',
			username: 'nsa',
			posts: {
				create: {
					title: 'Red Hat funding adjustments',
					lead: "Expanding the program's scope and capabilities by incorporating the NSA",
					body: "<p>Recent funding adjustments to Operation Red Hat have expanded the program's scope and capabilities by incorporating the National Security Agency (NSA) as a key partner. This strategic collaboration aims to leverage the NSA's advanced signal intelligence and cybersecurity expertise to enhance the effectiveness of the FBI's ongoing efforts to monitor and neutralize violent extremist threats. The augmented budget allocation signifies a commitment to fortifying national security through inter-agency cooperation.</p>"
				}
			},
			key: {
				create: {
					id: 'username:nsa',
					hashed_password: await generateLuciaPasswordHash('IPHONE')
				}
			}
		},
		{
			id: generateRandomString(15),
			display_name: 'The Illuminati',
			username: 'illuminati',
			posts: {
				create: {
					title: 'A message to the President',
					lead: 'A welcome alliance and nothing but flowery prose 🌸',
					body: "<h1>To the President:</h1><p><em>Approve Red Hat and Steel Sparrow. You know what happens if you don't.</em></p><p>Sincerely,</p><p><em>The Illuminati</em></p>"
				}
			},
			key: {
				create: {
					id: 'username:illuminati',
					hashed_password: await generateLuciaPasswordHash('TRIANGLE')
				}
			}
		},
		{
			id: generateRandomString(15),
			display_name: 'The President',
			username: 'potus',
			posts: {
				create: {
					title: 'APPROVAL: RED HAT, STEEL SPARROW',
					body: "<p>I am writing to officially confirm the approval and commencement of two highly strategic initiatives: Operation Red Hat and Project Steel Sparrow. After rigorous scrutiny and assessment by the appropriate departments, committees, and legal entities, both initiatives have met all necessary criteria to proceed.</p><p>Operation Red Hat, an FBI-sponsored surveillance program, has been designed to proactively monitor and neutralize violent extremist activities within the United States. By incorporating the National Security Agency (NSA) through recent funding adjustments, the program is expected to significantly benefit from the NSA's unparalleled expertise in signal intelligence and cybersecurity.</p><p>Simultaneously, Project Steel Sparrow aims to revolutionize military engagement by developing a new generation of super-soldiers. Utilizing the most cutting-edge advancements in biotechnology, nanotechnology, and artificial intelligence, this initiative seeks to provide our military with a critical advantage, reducing human risk while maximizing operational effectiveness.</p><p>We have complete confidence that these initiatives will play vital roles in enhancing national security and safeguarding the interests of the United States. I would like to extend my gratitude to all teams involved in the formulation and vetting of these programs. Your dedication to excellence has enabled us to reach this pivotal moment.</p><p>Please proceed with the next stages of planning and execution for both Operation Red Hat and Project Steel Sparrow, in line with all legal and ethical guidelines. Regular updates on progress, benchmarks, and any critical issues are to be reported to the overseeing committees.</p><p>Sincerely,</p><p><em>President &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;</em></p>"
				}
			},
			key: {
				create: {
					id: 'username:potus',
					hashed_password: await generateLuciaPasswordHash('BILL GATES')
				}
			}
		}
	];

	console.time('👤 Created users with posts...');
	for (const user of await users()) {
		await prisma.user.create({
			data: {
				...user
			}
		});
	}
	console.timeEnd('👤 Created users with posts...');

	console.timeEnd(`🌱 Database has been seeded`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
