import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <h2 className="fw-bold mb-4">My Learning</h2>
          <ul className="nav-style1">
            <li>
              <Link href="/learning/my-courses/">All Courses</Link>
            </li>
            <li>
              <Link href="/learning/wishlist/">Wishlist</Link>
            </li>
          </ul>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box style-2">
                <div className="courses-image">
                  <Link className="d-block image" href="#">
                    <Image
                      src="https://res.cloudinary.com/dev-empty/image/upload/v1680503559/clk5ruh6tso0jzoxtjsx.jpg"
                      alt="Software Project Management For Start-ups And Solopreneurs"
                      width={750}
                      height={500}
                    />
                  </Link>
                  <div className="video_box">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link href="#">
                          <i className="bx bx-play"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="courses-content">
                  <h3>
                    <Link href="#">
                      Software Project Management For Start-ups And Solopreneurs
                    </Link>
                  </h3>
                  <div className="course-author d-flex align-items-center">
                    <span>Instructor1 User</span>
                  </div>
                  <p>Start Course</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="text-center fs-5 border p-3">Empty</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
