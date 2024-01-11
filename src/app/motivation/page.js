import LatestBlogPost from "@/components/BusinessCoach/LatestBlogPost";
import AboutMe from "@/components/Motivation/AboutMe";
import Banner from "@/components/Motivation/Banner";
import Features from "@/components/Motivation/Features";
import FeedbackSlider from "@/components/Motivation/FeedbackSlider";
import NewsletterForm from "@/components/Motivation/NewsletterForm";
import OurUpcomingEvents from "@/components/Motivation/OurUpcomingEvents";
import TopSellingCourses from "@/components/Motivation/TopSellingCourses";

const page = () => {
	return (
		<>
			<Banner />
			<Features />
			<AboutMe />
			<TopSellingCourses />
			<FeedbackSlider />
			<OurUpcomingEvents />
			<NewsletterForm />
			<LatestBlogPost />
		</>
	);
};

export default page;
