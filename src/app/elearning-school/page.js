import React from "react";
import AboutUs from "@/components/eLearningSchool/AboutUs";
import Banner from "@/components/eLearningSchool/Banner";
import Features from "@/components/eLearningSchool/Features";
import FeedbackSliderWithFunFacts from "@/components/eLearningSchool/FeedbackSliderWithFunFacts";
import GetInstantCourses from "@/components/eLearningSchool/GetInstantCourses";
import Partner from "@/components/eLearningSchool/Partner";
import PopularCourses from "@/components/eLearningSchool/PopularCourses";
import LatestNews from "@/components/Shared/LatestNews";
import ViewAllCourses from "@/components/eLearningSchool/ViewAllCourses";
import AffordableCertification from "@/components/eLearningSchool/AffordableCertification";

const page = () => {
	return (
		<>
			<Banner />
			<Partner />
			<Features />
			<AboutUs />
			<PopularCourses />
			<FeedbackSliderWithFunFacts />
			<GetInstantCourses />
			<LatestNews />
			<ViewAllCourses />
			<AffordableCertification />
		</>
	);
};

export default page;
