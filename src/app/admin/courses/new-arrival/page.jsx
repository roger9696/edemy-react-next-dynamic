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
                    <Link href="/admin/courses/">Courses</Link>
                  </li>
                  <li>
                    <Link href="/admin/courses/new-arrival/">New Arrival</Link>
                  </li>
                </ul>

                <div class="table-responsive">
                  <table class="table align-middle table-hover fs-14">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Videos</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link href="#">
                            Sanu - College University HTML Template
                          </Link>
                        </td>
                        <td>$4</td>
                        <td>Teaching &amp; Academics</td>
                        <td>Instructor1</td>
                        <td>0</td>
                        <td>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-warning btn-sm fs-12"
                              disabled=""
                            >
                              Pending
                            </button>
                          </div>
                        </td>
                        <td>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approve Now
                            </button>
                          </div>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">District Solutions Agent</Link>
                        </td>
                        <td>$339</td>
                        <td>Lifestyle</td>
                        <td>Instructor</td>
                        <td>0</td>
                        <td>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-warning btn-sm fs-12"
                              disabled=""
                            >
                              Pending
                            </button>
                          </div>
                        </td>
                        <td>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approve Now
                            </button>
                          </div>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">
                            The Complete 2023 Web Development Bootcamp
                          </Link>
                        </td>
                        <td>$30</td>
                        <td>IT &amp; Software</td>
                        <td>Instructor1</td>
                        <td>1</td>
                        <td>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-warning btn-sm fs-12"
                              disabled=""
                            >
                              Pending
                            </button>
                          </div>
                        </td>
                        <td>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approve Now
                            </button>
                          </div>
                          <div class="css-bbq5bh" style={{ fontSize: "12px" }}>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="7">
                          <div className="text-center">Empty</div>
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
