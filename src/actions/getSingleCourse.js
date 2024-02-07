import prisma from "../../libs/prismadb";

export async function getSingleCourse(params) {
	const { courseId } = params;

	try {
		const course = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
			include: {
				user: true,
				assets: true,
			},
		});

		return { course };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
