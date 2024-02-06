import CoursesContent from "@/components/Courses/CoursesContent";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import { getCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getCourses();
	return (
		<>
			<PageBanner
				pageTitle="Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
			/>
			<CoursesContent courses={courses} />
		</>
	);
};

export default page;
