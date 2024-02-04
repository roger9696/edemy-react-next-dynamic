"use client";

import React, { useState } from "react";
import Player from "@/components/Learning/Player";
import ProgressManager from "@/components/Learning/ProgressManager";
import CourseOverview from "@/components/Learning/CourseOverview";
import CourseAsset from "@/components/Learning/CourseAsset";
import CourseDiscussion from "@/components/Learning/CourseDiscussion";
import CourseRating from "@/components/Learning/CourseRating";
import CourseFeedback from "@/components/Learning/CourseFeedback";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="mt-5 pb-5 video-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="video-content">
                <Player />

                <br />

                <ul className="nav-style1 learning-course-nav">
                  <li
                    onClick={() => handleTabClick(0)}
                    className={` ${activeTab === 0 ? "active" : ""}`}
                  >
                    Overview
                  </li>
                  <li
                    onClick={() => handleTabClick(1)}
                    className={` ${activeTab === 1 ? "active" : ""}`}
                  >
                    Assets
                  </li>
                  <li
                    onClick={() => handleTabClick(2)}
                    className={` ${activeTab === 2 ? "active" : ""}`}
                  >
                    Discussion
                  </li>
                  <li
                    onClick={() => handleTabClick(3)}
                    className={` ${activeTab === 3 ? "active" : ""}`}
                  >
                    Leave a rating
                  </li>
                  <li
                    onClick={() => handleTabClick(4)}
                    className={` ${activeTab === 4 ? "active" : ""}`}
                  >
                    Leave a feedback
                  </li>
                </ul>

                <div>
                  {activeTab === 0 && <CourseOverview />}
                  {activeTab === 1 && <CourseAsset />}
                  {activeTab === 2 && <CourseDiscussion />}
                  {activeTab === 3 && <CourseRating />}
                  {activeTab === 4 && <CourseFeedback />}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="video-sidebar">
                <ProgressManager />

                <div className="course-video-list">
                  <h4 className="title mb-3">
                    Software Project Management For Start-ups And Solopreneurs
                  </h4>
                  <ul>
                    <li>
                      1. Course introduction
                      <span className="d-block text-muted fs-13 mt-1">
                        <i className="bx bx-play-circle"></i> 15 seconds
                      </span>
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
