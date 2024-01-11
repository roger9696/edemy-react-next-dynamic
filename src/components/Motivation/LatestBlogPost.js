import React from "react";
import Link from "next/link";

const LatestBlogPost = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Blog</span>
            <h2 className="jost-font font-weight-bold">Latest Blog Post</h2>
            <p>
              We always give extra care to our student's skills improvements and
              feel excited to share our latest research and learnings!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-post-box">
                <div className="post-image">
                  <Link href="/single-blog-1">
                    <a className="d-block">
                      <img
                        src="/images/motivation/blog1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="meta d-flex justify-content-between align-items-center">
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 29, 2023
                    </li>
                  </ul>

                  <h3 className="jost-font">
                    <Link href="/single-blog-1">
                      <a>
                        University Admissions Could Face Emergency Controls
                      </a>
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src="/images/user/user1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <span>Alex Morgan</span>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="link-btn">
                        <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-post-box">
                <div className="post-image">
                  <Link href="/single-blog-1">
                    <a className="d-block">
                      <img
                        src="/images/motivation/blog2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="meta d-flex justify-content-between align-items-center">
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 28, 2023
                    </li>
                  </ul>

                  <h3 className="jost-font">
                    <Link href="/single-blog-1">
                      <a>
                        Online Learning Can Prepare Students For A Fast-Changing
                      </a>
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src="/images/user/user2.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="link-btn">
                        <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-post-box">
                <div className="post-image">
                  <Link href="/single-blog-1">
                    <a className="d-block">
                      <img
                        src="/images/motivation/blog3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="meta d-flex justify-content-between align-items-center">
                    <li>
                      <a href="#">Coaching</a>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 27, 2023
                    </li>
                  </ul>

                  <h3 className="jost-font">
                    <Link href="/single-blog-1">
                      <a>
                        As Learning Moves Online, Trigger Warnings Must Too
                      </a>
                    </Link>
                  </h3>
                  
                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src="/images/user/user3.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <span>Sarah Taylor</span>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="link-btn">
                        <i className="bx bx-right-arrow-alt"></i>
                      </a>
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

export default LatestBlogPost;
