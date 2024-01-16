import PageBanner from "@/components/Shared/PageBanner";
import CheckoutContent from "./CheckoutContent";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Checkout"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Checkout"
			/>
			<CheckoutContent />
		</>
	);
};

export default page;
