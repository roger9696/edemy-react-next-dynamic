import React from "react"; 
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <h2 className="fw-bold mb-4">Profile &amp; Settings</h2>

          <ul className="nav-style1">
            <li>
              <Link href="/profile/basic-information/">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/profile/photo/">Profile Picture</Link>
            </li>
          </ul>

          <div className="basic-profile-information-form">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label fw-semibold">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      value="Admin"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      value="User"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Biography</label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="bio"
                      rows="4"
                    >
                      Admin started his career as a Unix and Linux System
                      Engineer in 1999. Since that time he has utilized his
                      Linux skills at companies such as Xerox, UPS,
                      Hewlett-Packard, and Amazon.com. Additionally, he has
                      acted as a technical consultant and independent contractor
                      for small businesses and Fortune 500 companies.
                    </textarea>
                    <p className="form-text mt-2">
                      Your biography should have at least 50 characters, links
                      and coupon codes are not permitted.
                    </p>
                  </div>

                  <div className="form-group" name="gender">
                    <label className="form-label fw-semibold">Gender</label>
                    <select className="form-select">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label fw-semibold">
                      Website URL
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="websiteURL"
                      placeholder="http://www.example.com/"
                      name="website"
                      value=""
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      name="twitter"
                      placeholder="http://www.twitter.com/"
                      value=""
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      name="facebook"
                      placeholder="http://www.facebook.com/"
                      value=""
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Linkedin</label>
                    <input
                      type="text"
                      className="form-control"
                      name="linkedin"
                      placeholder="http://www.linkedin.com/"
                      value=""
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Youtube</label>
                    <input
                      type="text"
                      className="form-control"
                      name="youtube"
                      placeholder="http://www.youtube.com/"
                      value=""
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn default-btn"
                    disabled=""
                  >
                    <i className="flaticon-right-arrow"></i>Save <span></span> 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
