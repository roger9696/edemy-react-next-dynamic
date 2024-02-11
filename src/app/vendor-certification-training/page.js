import FunFacts from "@/components/Shared/FunFacts";
import LatestNews from "@/components/Shared/LatestNews";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import Testimonials from "@/components/Shared/Testimonials";
import AboutArea from "@/components/VendorCertificationTraining/AboutArea";
import Banner from "@/components/VendorCertificationTraining/Banner";
import CourseAdvisor from "@/components/VendorCertificationTraining/CourseAdvisor";
import Partner from "@/components/VendorCertificationTraining/Partner";
import PopularCourses from "@/components/VendorCertificationTraining/PopularCourses";
import PopularCoursesTwo from "@/components/VendorCertificationTraining/PopularCoursesTwo";
import PremiumAccess from "@/components/VendorCertificationTraining/PremiumAccess";
import SloganArea from "@/components/VendorCertificationTraining/SloganArea";
import ViewAllCourses from "@/components/VendorCertificationTraining/ViewAllCourses";
import { getHomepageCourses } from "@/actions/getCourses";

const page = async () => {
	const { courses } = await getHomepageCourses();
	return (
		<>
			<Banner />
			<Partner />
			<SloganArea />
			<PopularCourses courses={courses} />
			<AboutArea />
			<FunFacts />
			<PopularCoursesTwo courses={courses} />
			<CourseAdvisor />
			<PremiumAccess />
			<Testimonials />
			<ViewAllCourses />
			<LatestNews />
			<SubscribeForm />
		</>
	);
};

export default page;
