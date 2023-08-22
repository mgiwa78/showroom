import React from "react";
import OtherVendorsItem from "./OtherVendorsItem";
import vendors from "@/data/vendors";

const OtherVendors = () => {
  return (
    <>
      <section className="bg-color-3 mt-5" data-animated-id="1">
        <div className="container container-xxl mb-5">
          <nav
            aria-label="breadcrumb"
            className="d-flex align-items-center justify-content-between"
          >
            <ol className="breadcrumb py-3 mr-6">
              <li className="breadcrumb-item">
                <a href="index.html">Showroom</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#"> vendors </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Others
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="pt-6 pb-lg-15 pb-11" data-animated-id="2">
        <div className="container-fluid">
          <div data-slick-options='{"slidesToShow": 4, "autoplay":true,"dots":true,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":4}},{"breakpoint": 992,"settings": {"slidesToShow":3}},{"breakpoint": 768,"settings": {"slidesToShow": 2}},{"breakpoint": 576,"settings": {"slidesToShow": 1}}]}'>
            <div style={{ height: "max-content" }}>
              <div
                style={{
                  opacity: 1,
                  display: "flex",
                  gap: "10px"
                }}
              >
                <div className="container-fluid row">
                  {vendors.map((vendor) => {
                    return <OtherVendorsItem vendorData={vendor} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherVendors;
