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
                    <Link href="/admin/instructor/">Instructors</Link>
                  </li>
                  <li>
                    <Link href="/admin/instructor/requests/">Requests</Link>
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
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Instructor1 User</td>
                        <td>instructor@elearniv.com</td>
                        <td>+14255551212</td>
                        <td>Register to Become an Intructor</td>
                        <td>
                          <div className="max-300px max-height-60">
                            Register to Become an Intructor
                          </div>
                        </td>
                        <td>
                          <div className="css-bbq5bh" style={{ fontSize: "12px" }}>
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
                        <td>Instructor User</td>
                        <td>teacher@elearniv.com</td>
                        <td>+14255551414</td>
                        <td>Register to Become an Intructor</td>
                        <td>
                          <div className="max-300px max-height-60">
                            Register to Become an Intructor
                          </div>
                        </td>
                        <td>
                          <div className="css-bbq5bh" style={{ fontSize: "12px" }}>
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
                        <td colSpan="6">
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
