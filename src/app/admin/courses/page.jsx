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

                <div className="table-responsive">
                  <table className="table align-middle table-hover fs-14">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Videos</th>
                        <th scope="col">Homepage</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <Link href="#">
                            Web Development Masterclass - Online Certification
                            Course
                          </Link>
                        </td>
                        <td>$35</td>
                        <td>IT &amp; Software</td>
                        <td>Instructor1</td>
                        <td>1</td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Homepage
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approved
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">Ruby on Rails 2022 Live Class</Link>
                        </td>
                        <td>$99.99</td>
                        <td>IT &amp; Software</td>
                        <td>Instructor1</td>
                        <td>0</td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Homepage
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approved
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">
                            Automate the Boring Stuff with Python Programming
                          </Link>
                        </td>
                        <td>$49.99</td>
                        <td>IT &amp; Software</td>
                        <td>Instructor</td>
                        <td>1</td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Homepage
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approved
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">
                            Pianoforall - Incredible New Way To Learn Piano
                            &amp; Keyboard
                          </Link>
                        </td>
                        <td>$49.99</td>
                        <td>Music</td>
                        <td>Instructor1</td>
                        <td>1</td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-primary btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Homepage
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approved
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">
                            Complete workout : Complete Fitness Certification
                          </Link>
                        </td>
                        <td>$39.99</td>
                        <td>Health &amp; Fitness</td>
                        <td>Instructor1</td>
                        <td>1</td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-danger btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approved
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <Link href="#">
                            Fitness-Yoga-Pilates Combined - Quick Home Workout
                            Program
                          </Link>
                        </td>
                        <td>$99.99</td>
                        <td>Health &amp; Fitness</td>
                        <td>Instructor1</td>
                        <td>1</td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-danger btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                        <td>
                          <div
                            className="css-bbq5bh"
                            style={{ fontSize: "12px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-success btn-sm fs-12 ms-2"
                              disabled=""
                            >
                              Approved
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
