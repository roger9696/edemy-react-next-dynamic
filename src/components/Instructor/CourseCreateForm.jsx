"use client";
import Image from "next/image";

import React from "react";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});

const CourseCreateForm = ({}) => {
  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">Course Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Course Title"
              name="title"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">Lessons</label>
            <input
              type="number"
              className="form-control"
              placeholder="5"
              name="lessons"
            />
          </div>
        </div>

        <div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Course Image
						</label>
						<input
							type="file"
							className="form-control file-control"
							name="image" 
							required={true}
						/>
						<div className="form-text">
							Upload image size 750x500!
						</div>

						<div className="mt-2">
							<Image
								src='/images/courses/courses15.jpg'
								alt="image"
								className="img-thumbnail w-100px me-2"
                width={100}
                height={100}
							/>
						</div>
					</div>
				</div>

        <div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Access Time
						</label>
						<select
							className="form-select"
							name="access_time"  
						>
							<option value="">Select</option>
							<option value="Lifetime">Lifetime</option>
							<option value="Three Months">Three Months</option>
							<option value="Six Months">Six Months</option>
							<option value="1 Year">1 Year</option>
						</select>
					</div>
				</div>

        <div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Overview
						</label>
						<RichTextEditor
							// controls={controls}
							// value={course.overview}
							onChange={(e) =>
								setCourse((prevState) => ({
									...prevState,
									overview: e,
								}))
							}
						/>
					</div>
				</div>

        

        <div className="col-12">
          <button type="submit" className="default-btn">
            <i className="flaticon-right-arrow"></i>Create Course <span></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CourseCreateForm;
