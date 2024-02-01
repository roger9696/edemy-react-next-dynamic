import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";

const Page = ({}) => {
	return (
		<>
			<div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<AdminSideNav />
						</div>

						<div className="col-lg-9 col-md-8">
							<div className="main-content-box">
								<ul className="nav-style1">
									<li>
										<Link href="/admin/instructor/">
											Instructors
										</Link>
									</li>
									<li>
										<Link href="/admin/instructor/requests/">
											Requests
										</Link>
									</li>
								</ul>

								<div className="table-responsive">
									<table className="table align-middle table-hover fs-14">
										<thead>
											<tr>
												<th scope="col">Name</th>
												<th scope="col">Email</th>
												<th scope="col">Phone</th>
												<th scope="col">Subject</th>
												<th scope="col">Text</th>
												<th scope="col">Status</th>
												<th scope="col">Action</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>Student Profile</td>
												<td>student@elearniv.com</td>
												<td>0923445853</td>
												<td>web</td>
												<td>
													<div className="max-300px max-height-60">
														klkoj
													</div>
												</td>
												<td>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-warning btn-sm fs-12"
															disabled=""
														>
															Pending
														</button>
													</div>
												</td>

												<td>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-success btn-sm fs-12 ms-2"
															disabled=""
														>
															Approve Now
														</button>
													</div>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-danger btn-sm fs-12 ms-2"
															disabled=""
														>
															Decline
														</button>
													</div>
												</td>
											</tr>

											<tr>
												<td>Admin User</td>
												<td>admin@elearniv.com</td>
												<td>03190290005</td>
												<td>chemistry</td>
												<td>
													<div className="max-300px max-height-60">
														wwwwwwwwwww
													</div>
												</td>
												<td>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-warning btn-sm fs-12"
															disabled=""
														>
															Pending
														</button>
													</div>
												</td>

												<td>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-success btn-sm fs-12 ms-2"
															disabled=""
														>
															Approve Now
														</button>
													</div>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-danger btn-sm fs-12 ms-2"
															disabled=""
														>
															Decline
														</button>
													</div>
												</td>
											</tr>

											<tr>
												<td colSpan="6">
													<div className="text-center">
														Empty
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
