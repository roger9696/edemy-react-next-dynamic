"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ grid = "col-md-6 col-lg-4" }) => {
	return (
		<div className={grid}>
			<div className="single-courses-box">
				<div className="courses-image">
					<Link href="/single-courses-1" className="d-block image">
						<Image
							src="/images/courses/courses1.jpg"
							width={750}
							height={500}
							alt="image"
						/>
					</Link>

					<Link href="#" className="fav">
						<i className="flaticon-heart"></i>
					</Link>

					<div className="price shadow">$39</div>
				</div>

				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<Image
							src="/images/user1.jpg"
							width={300}
							height={300}
							className="rounded-circle"
							alt="image"
						/>
						<span>Alex Morgan</span>
					</div>

					<h3>
						<Link href="/single-courses-1">
							Deep Learning a-z™: Hands-on Artificial Neural
							Networks
						</Link>
					</h3>

					<p>
						This master level course is for you if you are looking
						to learn the DL & ANN topics in and out within a short
						time!
					</p>

					<ul className="courses-box-footer d-flex justify-content-between align-items-center">
						<li>
							<i className="flaticon-agenda"></i> 15 Lessons
						</li>
						<li>
							<i className="flaticon-people"></i> 145 Students
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
