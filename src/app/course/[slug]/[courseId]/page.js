import { getSingleCourse } from "@/actions/getSingleCourse";
import DetailsContent from "@/components/Courses/Course/DetailsContent";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";

const page = async ({ params }) => {
	const { course } = await getSingleCourse(params);
	return (
		<>
			<PageBanner
				pageTitle={course.title}
				homePageUrl="/"
				homePageText="Home"
				activePageText={course.title}
			/>
			<DetailsContent course={course} />
		</>
	);
};

export default page;
