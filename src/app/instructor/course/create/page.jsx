import React from "react";
import Link from "next/link";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Create the Course</h2>

					<ul className="nav-style1">
						<li>
							<Link href="/instructor/courses/">Courses</Link>
						</li>
						<li>
							<Link href="/instructor/course/create/">
								Create a Course
							</Link>
						</li>
					</ul>

					<div className="create-course-form">
						<CourseCreateForm currentUser={currentUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
