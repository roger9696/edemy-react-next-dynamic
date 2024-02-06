import prisma from "../../libs/prismadb";

export async function getCourses() {
	try {
		const courses = await prisma.course.findMany({
			where: { status: "Approved" },
			include: {
				user: true,
			},
		});

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function getHomepageCourses() {
	try {
		const courses = await prisma.course.findMany({
			where: { status: "Approved" },
			take: 3,
			orderBy: {
				id: "desc",
			},
			include: {
				user: true,
			},
		});

		// console.log(courses);

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
