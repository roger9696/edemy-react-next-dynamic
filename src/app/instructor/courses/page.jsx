import React from "react";
import Link from "next/link";
import InstructorHeader from "@/components/Instructor/InstructorHeader";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <InstructorHeader />

      <div className="pb-100">
        <div className="container">
          <h3 className="mb-5 text-center">My Courses</h3>

          <div className="row justify-content-center">
          
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link
                    className="d-block image"
                    href="#"
                  >
                    <Image
                      src="https://res.cloudinary.com/dev-empty/image/upload/v1680583472/dujvw5oy82hy43n6gwd4.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <div className="dropdown action-dropdown">
                    <div className="icon">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                        >
                          {" "}
                          <i className="bx bx-edit"></i> Edit Course
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                        >
                          <i className="bx bx-cloud-upload"></i> Upload Video
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                        >
                          <i className="bx bx-video"></i> Delete Video
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                        >
                          <i className="bx bxs-file-plus"></i> Assets
                        </Link>
                      </li>
                      <li>
                        <div className="css-bbq5bh" style={{ fontSize: '12px' }}>
                          <button
                            type="button"
                            className="dropdown-item"
                            disabled=""
                          >
                            <i className="bx bxs-trash"></i> Delete{" "}
                            <i
                              className="bx bx-info-circle"
                              style={{ left: '5px', position: 'relative', top: '2px' }}
                            ></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="price shadow discount-price">
                    <del>$40</del>
                  </div>
                  <div className="price shadow">$35</div>
                </div>

                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg"
                      className="rounded-circle"
                      alt="Instructor1"
                      width={35}
                      height={35}
                    />
                    <span>Instructor1 User</span>
                  </div>

                  <h3>
                    <Link href="#">
                      Web Development MasterclassName - Online Certification Course
                    </Link>
                  </h3>

                  <p>
                    Cloud Computing | Web Apps | Linux | Web Servers | DBMS |
                    LAMP Stack | HTML + More
                  </p>

                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 10 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 8 Students
                    </li>
                  </ul>
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
