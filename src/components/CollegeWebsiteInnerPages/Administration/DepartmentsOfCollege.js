import React from "react";
import Link from "next/link";

const DepartmentsOfCollege = () => {
  return (
    <>
      <div className="cw-department-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2 className="playfair-display-font">
              Departments of eDemy college
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Bangla</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">English</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">
                  Management
                </a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">
                  Accounting
                </a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Marketing</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Finance</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Banking</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Economics</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Statistic</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Business</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Biology</a>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-2">
              <Link href="#">
                <a className="cw-department playfair-display-font">Physics</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsOfCollege;
