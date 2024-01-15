import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <div className="cw-page-title-area position-relative">
      <div className="container">
        <div className="cw-title-content">
          <h2>{pageTitle}</h2>

          <ul>
            <li>
              <Link href={homePageUrl}>
                <a>{homePageText}</a>
              </Link>
            </li>
            <li className="active">{activePageText}</li>
          </ul>
        </div>
      </div>

      <div className="cw-shape_1">
        <img src="/images/college-website/shape3.png" alt="shape3" />
      </div>
      <div className="cw-shape_2">
        <img src="/images/college-website/shape4.png" alt="shape4" />
      </div>
      <div className="cw-shape_3">
        <img src="/images/college-website/shape6.png" alt="shape6" />
      </div>
      <div className="cw-shape_4">
        <img src="/images/college-website/shape7.png" alt="shape7" />
      </div>
    </div>
  );
};

export default PageBanner;
