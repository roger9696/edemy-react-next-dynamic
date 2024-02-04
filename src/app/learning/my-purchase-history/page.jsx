import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/Shared/PageBanner";

const Page = () => {
  return (
    <>
      <PageBanner
        pageTitle="My Purchases"
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Purchases"
      />

      <div className="checkout-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="shopping-cart">
                <div className="shopping-cart-list">
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <Link className="d-block image" href="#">
                        <Image
                          src="/images/courses/courses1.jpg"
                          alt="image"
                          width={750}
                          height={500}
                        />
                      </Link>
                    </div>
                    <div className="col-lg-5">
                      <div className="content">
                        <h3>
                          <Link href="#">
                            Software Project Management For Start-ups And
                            Solopreneurs
                          </Link>
                        </h3>
                        <p className="fs-14 mb-2">By Instructor1 User</p>
                        <ul className="list">
                          <li>2h 6m total length</li>
                          <li>38</li>
                          <li>Lifetime</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6">
                      <div className="price text-end">
                        <span className="fw-bolder fs-16">$9.99</span>{" "}
                        <span className="fw-bolder fs-16 d-inline-block ms-4">
                          12/8/2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center border p-3">Empty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
