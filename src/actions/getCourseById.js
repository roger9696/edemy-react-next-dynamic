import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function getCourseById(params) {
	const { courseId } = params;

	try {
		const course = await prisma.course.findMany({
			where: { id: parseInt(courseId) },
			include: {
				user: true,
			},
		});

		return { course };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
