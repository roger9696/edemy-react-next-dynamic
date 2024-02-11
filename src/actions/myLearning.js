import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function myLearning() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const enrolments = await prisma.enrolment.findMany({
			where: { userId: currentUser.id },
			include: {
				course: {
					include: {
						user: true,
					},
				},
			},
		});

		return { enrolments };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function myLearningPlay(params) {
	const { courseId } = params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const course = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
			include: {
				assets: {
					where: {
						type: "video",
					},
				},
			},
		});

		return { course };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
