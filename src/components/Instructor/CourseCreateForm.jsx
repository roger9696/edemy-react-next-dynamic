"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RichTextEditor from "@mantine/rte";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import SetPrice from "../FormHelpers/SetPrice";

const CourseCreateForm = ({}) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			userId: "",
			catId: "",
			title: "",
			description: "",
			regular_price: "",
			before_price: "",
			lessons: "",
			duration: "",
			image: "",
			access_time: "",
			requirements: "",
			what_you_will_learn: "",
			who_is_this_course_for: "",
		},
	});

	const regular = watch("regular_price");
	const before = watch("before_price");

	return (
		<form>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Course Title"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Lessons"
						id="lessons"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<SetPrice
						label="Regular Price"
						id="regular_price"
						required
						disabled={isLoading}
						register={register}
						errors={errors}
						value={regular}
						onChange={(newValue) =>
							setValue("regular_price", newValue)
						}
					/>
				</div>

				<div className="col-md-6">
					<SetPrice
						label="Before Price"
						id="before_price"
						required
						disabled={isLoading}
						register={register}
						errors={errors}
						value={before}
						onChange={(newValue) =>
							setValue("before_price", newValue)
						}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Duration"
						id="duration"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Access Time"
						id="access_time"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
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
								src="/images/courses/courses15.jpg"
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
						<select className="form-select" name="access_time">
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
						<i className="flaticon-right-arrow"></i>Create Course{" "}
						<span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseCreateForm;
