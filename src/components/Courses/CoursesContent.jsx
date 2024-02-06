"use client";

"use client";

import React from "react";
import CourseCard from "../Shared/CourseCard";

const CoursesContent = ({ courses }) => {
	return (
		<div className="courses-area courses-section pt-100 pb-70">
			<div className="container">
				<div className="edemy-grid-sorting row align-items-center">
					<div className="col-lg-8 col-md-6 result-count">
						<p>
							We found <span className="count">12</span> courses
							available for you
						</p>
					</div>

					<div className="col-lg-4 col-md-6 ordering">
						<div className="select-box">
							<select className="form-control">
								<option>Sort By</option>
								<option>Popularity</option>
								<option>Latest</option>
								<option>Price: low to high</option>
								<option>Price: high to low</option>
							</select>
						</div>
					</div>
				</div>

				<div className="row">
					{courses.map((course) => (
						<CourseCard key={course.id} {...course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CoursesContent;
