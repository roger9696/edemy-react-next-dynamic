import React from "react";
import Link from "next/link";

const CollegeAdmissionsContent = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2 className="playfair-display-font">
            eDemy college admissions
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="cw-admission-card">
                <h3 className="playfair-display-font">
                  Undergraduate admissions
                </h3>

                <p>
                  Donec sollicitudin molestie malesuada. Sed porttitor lectus
                  nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam ve.
                </p>

                <Link href="#">
                  <a className="default-btn cw-btn">
                    Apply Now <span></span>
                  </a>
                </Link>

                <div className="image mt-4">
                  <img
                    src="/images/college-website/admission-img1.jpg"
                    alt="admission"
                  />

                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_135_328)">
                        <path
                          d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
                          fill="#FE4A55"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_135_328">
                          <rect width="63.69" height="63.69" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cw-admission-card">
                <div className="image mb-4">
                  <img
                    src="/images/college-website/admission-img2.jpg"
                    alt="admission"
                  />

                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_135_328)">
                        <path
                          d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
                          fill="#FE4A55"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_135_328">
                          <rect width="63.69" height="63.69" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <h3 className="playfair-display-font">Graduate admissions</h3>

                <p>
                  Donec sollicitudin molestie malesuada. Sed porttitor lectus
                  nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam ve.
                </p>

                <Link href="#">
                  <a className="default-btn cw-btn">
                    Apply Now <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeAdmissionsContent;
