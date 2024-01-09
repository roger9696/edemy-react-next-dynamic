"use client";

import React from "react";
import Link from "next/link";
import CourseCard from "../Shared/CourseCard";

const TopSellingCourses = () => {
	return (
		<div className="courses-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go At Your Own Pace</span>
					<h2>Top Selling Courses</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<CourseCard />
					<CourseCard />
					<CourseCard />

					<div className="col-lg-12 col-md-12">
						<div className="courses-info">
							<p>
								Get the most dedicated consultation for your
								life-changing course. Earn a certification for
								your effort and passion{" "}
								<Link href="/profile-authentication">
									Join Free Now
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSellingCourses;
