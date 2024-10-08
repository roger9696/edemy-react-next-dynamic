"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Courses = () => {
	return (
		<div className="courses-area pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go at your own pace</span>
					<h2 className="playfair-display-font">
						Become a Certified Yoga Teacher
					</h2>
					<p>
						Explore all of our courses and pick your suitable ones
						to enroll and start learning with us! We ensure that you
						will never regret it!
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-yoga-courses-box">
							<div className="courses-image">
								<Link
									href="/single-courses-1"
									className="d-block"
								>
									<Image
										src="/images/courses/yoga-img1.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>

							<div className="courses-content">
								<h3 className="playfair-display-font">
									<Link href="/single-courses-1">
										200 Hour YTT Course
									</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>

								<Link href="#" className="default-btn">
									View Details<span></span>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-yoga-courses-box">
							<div className="courses-image">
								<Link
									href="/single-courses-1"
									className="d-block"
								>
									<Image
										src="/images/courses/yoga-img2.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>

							<div className="courses-content">
								<h3 className="playfair-display-font">
									<Link href="/single-courses-1">
										300 Hour YTT Course
									</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>

								<Link href="#" className="default-btn">
									View Details<span></span>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="single-yoga-courses-box">
							<div className="courses-image">
								<Link
									href="/single-courses-1"
									className="d-block"
								>
									<Image
										src="/images/courses/yoga-img3.jpg"
										width={750}
										height={499}
										alt="image"
									/>
								</Link>
							</div>

							<div className="courses-content">
								<h3 className="playfair-display-font">
									<Link href="/single-courses-1">
										500 Hour YTT Course
									</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>

								<Link href="#" className="default-btn">
									View Details<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
