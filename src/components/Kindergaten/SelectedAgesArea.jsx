"use client";

import React from "react";
import Image from "next/image";

const SelectedAgesArea = () => {
	return (
		<div className="selected-ages-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Go At Your Own Pace</span>
					<h2 className="font-weight-black">
						Ages We Meet Kids Where They Are
					</h2>
					<p>
						Explore all of our courses and pick your suitable ones
						to enroll and start learning with us! We ensure that you
						will never regret it!
					</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-selected-ages-box">
							<div className="image">
								<Image
									src="/images/selected-ages/selected-age1.png"
									width={175}
									height={199}
									alt="image"
								/>
							</div>

							<div className="content">
								<h3>Infants</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<span className="ages-number">
									3 - 12 Months
								</span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-selected-ages-box">
							<div className="image">
								<Image
									src="/images/selected-ages/selected-age2.png"
									width={175}
									height={199}
									alt="image"
								/>
							</div>

							<div className="content">
								<h3>Toddler</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<span className="ages-number">1 - 3 Years</span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-selected-ages-box">
							<div className="image">
								<Image
									src="/images/selected-ages/selected-age3.png"
									width={175}
									height={199}
									alt="image"
								/>
							</div>

							<div className="content">
								<h3>Preschool</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<span className="ages-number">3 - 5 Years</span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-selected-ages-box">
							<div className="image">
								<Image
									src="/images/selected-ages/selected-age4.png"
									width={175}
									height={199}
									alt="image"
								/>
							</div>

							<div className="content">
								<h3>Flex-Care</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<span className="ages-number">
									5 - 12 Years
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="kindergarten-shape15">
				<Image
					src="/images/kindergarten-shape/k-shape15.png"
					width={306}
					height={205}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape16">
				<Image
					src="/images/kindergarten-shape/k-shape16.png"
					width={111}
					height={109}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default SelectedAgesArea;
