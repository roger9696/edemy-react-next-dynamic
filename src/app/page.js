import Banner from "@/components/Index/Banner";
import DistanceLearning from "@/components/Index/DistanceLearning";
import Features from "@/components/Index/Features";
import IntroVideo from "@/components/Index/IntroVideo";
import Partner from "@/components/Index/Partner";
import SelfDevelopmentCourse from "@/components/Index/SelfDevelopmentCourse";
import Testimonials from "@/components/Index/Testimonials";
import TopSellingCourses from "@/components/Index/TopSellingCourses";
import Cta from "@/components/Shared/Cta";
import DistanceLearningTwo from "@/components/Shared/DistanceLearningTwo";
import FunFactsFour from "@/components/Shared/FunFactsFour";
import LatestNews from "@/components/Shared/LatestNews";

export default function Home() {
	return (
		<>
			<Banner />
			<Features />
			<TopSellingCourses />
			<DistanceLearning />
			<Testimonials />
			<SelfDevelopmentCourse />
			<Partner />
			<IntroVideo />
			<FunFactsFour />
			<LatestNews />
			<DistanceLearningTwo />
			<Cta />
		</>
	);
}
