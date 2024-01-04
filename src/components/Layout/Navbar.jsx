"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [menu, setMenu] = React.useState(true);

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="edemy-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link href="/" className="navbar-brand">
								<Image
									src="/images/logo.png"
									width={87}
									height={24}
									alt="logo"
								/>
							</Link>

							<button
								className={classTwo}
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<form className="search-box">
									<input
										type="text"
										className="input-search"
										placeholder="Search for anything"
									/>
									<button type="submit">
										<i className="flaticon-search"></i>
									</button>
								</form>

								<ul className="navbar-nav">
									<li className="nav-item">
										<Link href="/" className="nav-link">
											Home{" "}
											<i className="bx bx-chevron-down"></i>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/"
													className="nav-link"
												>
													eLearning School
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-2"
													className="nav-link"
												>
													Vendor Certification
													Training
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-3"
													className="nav-link"
												>
													Online Training School
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-4"
													className="nav-link"
												>
													Distance Learning
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-5"
													className="nav-link"
												>
													Language School
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-6"
													className="nav-link"
												>
													Modern Schooling
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-7"
													className="nav-link"
												>
													Yoga Training
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-8"
													className="nav-link"
												>
													Health Coaching
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/index-9"
													className="nav-link"
												>
													Kindergaten
												</Link>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<Link href="#" className="nav-link">
											Pages{" "}
											<i className="bx bx-chevron-down"></i>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="#"
													className="nav-link"
												>
													About Us{" "}
													<i className="bx bx-chevron-down"></i>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/about-1"
															className="nav-link"
														>
															About Us 01
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/about-2"
															className="nav-link"
														>
															About Us 02
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/about-3"
															className="nav-link"
														>
															About Us 03
														</Link>
													</li>
												</ul>
											</li>

											<li className="nav-item">
												<Link
													href="/success-story"
													className="nav-link"
												>
													Success Story
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/advisor"
													className="nav-link"
												>
													Teacher
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/gallery"
													className="nav-link"
												>
													Gallery
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/faq"
													className="nav-link"
												>
													FAQs
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/contact"
													className="nav-link"
												>
													Contact Us
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/profile-authentication"
													className="nav-link"
												>
													Login/Register
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/404"
													className="nav-link"
												>
													404 Error Page
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/coming-soon"
													className="nav-link"
												>
													Coming Soon
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/purchase-guide"
													className="nav-link"
												>
													Purchase Guide
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/privacy-policy"
													className="nav-link"
												>
													Privacy Policy
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/terms-of-service"
													className="nav-link"
												>
													Terms of Service
												</Link>
											</li>
										</ul>
									</li>

									<li className="nav-item megamenu">
										<Link href="#" className="nav-link">
											Courses{" "}
											<i className="bx bx-chevron-down"></i>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<div className="container">
													<div className="row">
														<div className="col">
															<ul className="megamenu-submenu">
																<li className="nav-item">
																	<Link
																		href="/courses-1"
																		className="nav-link"
																	>
																		Courses
																		Grid 01
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-2"
																		className="nav-link"
																	>
																		Courses
																		Grid 02
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-3"
																		className="nav-link"
																	>
																		Courses
																		Grid 03
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-4"
																		className="nav-link"
																	>
																		Courses
																		Grid 04
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-5"
																		className="nav-link"
																	>
																		Courses
																		List 01
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-6"
																		className="nav-link"
																	>
																		Courses
																		Right
																		Sidebar
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<ul className="megamenu-submenu">
																<li className="nav-item">
																	<Link
																		href="/single-courses-1"
																		className="nav-link"
																	>
																		Single
																		Layout
																		01
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/single-courses-2"
																		className="nav-link"
																	>
																		Single
																		Layout
																		02
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/categories"
																		className="nav-link"
																	>
																		Courses
																		Categories
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/membership-levels"
																		className="nav-link"
																	>
																		Membership
																		Levels
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/become-a-teacher"
																		className="nav-link"
																	>
																		Become a
																		Teacher
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/profile"
																		className="nav-link"
																	>
																		Profile
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<ul className="megamenu-submenu">
																<li className="nav-item">
																	<Link
																		href="/courses-1"
																		className="nav-link"
																	>
																		Courses
																		Grid 01
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-2"
																		className="nav-link"
																	>
																		Courses
																		Grid 02
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-3"
																		className="nav-link"
																	>
																		Courses
																		Grid 03
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-4"
																		className="nav-link"
																	>
																		Courses
																		Grid 04
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-5"
																		className="nav-link"
																	>
																		Courses
																		List 01
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/courses-6"
																		className="nav-link"
																	>
																		Courses
																		Right
																		Sidebar
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<ul className="megamenu-submenu">
																<li className="nav-item">
																	<Link
																		href="/single-courses-1"
																		className="nav-link"
																	>
																		Single
																		Layout
																		01
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/single-courses-2"
																		className="nav-link"
																	>
																		Single
																		Layout
																		02
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/categories"
																		className="nav-link"
																	>
																		Courses
																		Categories
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/membership-levels"
																		className="nav-link"
																	>
																		Membership
																		Levels
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/become-a-teacher"
																		className="nav-link"
																	>
																		Become a
																		Teacher
																	</Link>
																</li>

																<li className="nav-item">
																	<Link
																		href="/profile"
																		className="nav-link"
																	>
																		Profile
																	</Link>
																</li>
															</ul>
														</div>
													</div>

													<div className="row m-0 mobile-none">
														<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
															<div className="single-category-widget">
																<div className="icon">
																	<i className="bx bx-code-alt"></i>
																</div>
																<h3>
																	Development
																</h3>
																<span className="sub-title">
																	60 Courses
																</span>

																<Link href="/courses-1">
																	<button className="link-btn"></button>
																</Link>
															</div>
														</div>

														<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
															<div className="single-category-widget">
																<div className="icon">
																	<i className="bx bx-camera"></i>
																</div>
																<h3>
																	Photography
																</h3>
																<span className="sub-title">
																	21 Courses
																</span>

																<Link href="/courses-2">
																	<button className="link-btn"></button>
																</Link>
															</div>
														</div>

														<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
															<div className="single-category-widget">
																<div className="icon">
																	<i className="bx bx-layer"></i>
																</div>
																<h3>Design</h3>
																<span className="sub-title">
																	58 Courses
																</span>

																<Link href="/courses-3">
																	<button className="link-btn"></button>
																</Link>
															</div>
														</div>

														<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
															<div className="single-category-widget">
																<div className="icon">
																	<i className="bx bxs-flag-checkered"></i>
																</div>
																<h3>
																	Language
																</h3>
																<span className="sub-title">
																	99 Courses
																</span>

																<Link href="/courses-4">
																	<button className="link-btn"></button>
																</Link>
															</div>
														</div>

														<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
															<div className="single-category-widget">
																<div className="icon">
																	<i className="bx bx-health"></i>
																</div>
																<h3>Fitness</h3>
																<span className="sub-title">
																	21 Courses
																</span>

																<Link href="/courses-5">
																	<button className="link-btn"></button>
																</Link>
															</div>
														</div>

														<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
															<div className="single-category-widget">
																<div className="icon">
																	<i className="bx bx-line-chart"></i>
																</div>
																<h3>
																	Business
																</h3>
																<span className="sub-title">
																	49 Courses
																</span>

																<Link href="/courses-6">
																	<button className="link-btn"></button>
																</Link>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<Link href="#" className="nav-link">
											Events{" "}
											<i className="bx bx-chevron-down"></i>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/events"
													className="nav-link"
												>
													Events
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/single-events"
													className="nav-link"
												>
													Events Details
												</Link>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<Link href="#" className="nav-link">
											Shop{" "}
											<i className="bx bx-chevron-down"></i>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/products-list-1"
													className="nav-link"
												>
													Product List 01
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/products-list-2"
													className="nav-link"
												>
													Product List 02
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/cart"
													className="nav-link"
												>
													Cart
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/checkout"
													className="nav-link"
												>
													Checkout
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/single-products"
													className="nav-link"
												>
													Product Details
												</Link>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<Link href="#" className="nav-link">
											Blog{" "}
											<i className="bx bx-chevron-down"></i>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/blog-1"
													className="nav-link"
												>
													Grid (2 in Row)
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-2"
													className="nav-link"
												>
													Grid (3 in Row)
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-3"
													className="nav-link"
												>
													Grid (Full Width)
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-4"
													className="nav-link"
												>
													Right Sidebar
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="#"
													className="nav-link"
												>
													Single Post{" "}
													<i className="bx bx-chevron-down"></i>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/single-blog-1"
															className="nav-link"
														>
															Default
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/single-blog-2"
															className="nav-link"
														>
															With Video
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/single-blog-3"
															className="nav-link"
														>
															With Image Slider
														</Link>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>

								<div className="others-option d-flex align-items-center">
									<div className="option-item">
										<div className="cart-btn">
											<Link href="/cart">
												<i className="flaticon-shopping-cart"></i>{" "}
												<span>3</span>
											</Link>
										</div>
									</div>

									<div className="option-item">
										<Link
											href="/profile-authentication"
											className="default-btn"
										>
											<i className="flaticon-user"></i>{" "}
											Login/Register <span></span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
