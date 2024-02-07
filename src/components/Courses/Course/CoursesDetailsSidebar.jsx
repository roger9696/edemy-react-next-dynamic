"use client";

import React from "react";
import Link from "next/link";

const CoursesDetailsSidebar = ({
	image,
	regular_price,
	duration,
	lessons,
	access_time,
	user,
}) => {
	return (
		<>
			<div className="courses-details-info">
				<div className="image">
					<img src={image} alt="image" />
				</div>

				<ul className="info">
					<li className="price">
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Price
							</span>
							${regular_price}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-teacher"></i> Instructor
							</span>
							{user.name}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-time"></i> Duration
							</span>
							{duration}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-distance-learning"></i>{" "}
								Lessons
							</span>
							{lessons}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-web"></i> Enrolled
							</span>
							255 students
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-lock"></i> Access
							</span>
							{access_time}
						</div>
					</li>
				</ul>

				<div className="btn-box">
					<Link href="#" className="default-btn">
						<i className="flaticon-shopping-cart"></i> Add to Cart{" "}
						<span></span>
					</Link>
					{/* <Link href="#" className="default-btn">
						<i className="flaticon-tag"></i> Buy Now <span></span>
					</Link> */}
				</div>

				<div className="courses-share">
					<div className="share-info">
						<span>
							Share This Course <i className="flaticon-share"></i>
						</span>

						<ul className="social-link">
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsSidebar;
