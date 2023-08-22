import React from "react";
type vendor = {
  name: string;
  bg: string;
};

type Props = {
  vendorData: vendor;
};
const OtherVendorsItem = ({ vendorData }: Props) => {
  console.log(vendorData);
  return (
    <div
      className="box  fadeInUp animated col-md-3 col-sm-6 mb-8"
      data-animate="fadeInUp"
      data-slick-index="1"
      aria-hidden="false"
      style={{ width: "310px" }}
      tabIndex={0}
      role="tabpanel"
    >
      <div className="card border-0">
        <img
          src={`images/${vendorData.bg}`}
          alt="Accessories"
          className="card-img"
        />
        <div
          className="over"
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)"
          }}
        ></div>

        <div className="card-img-overlay d-inline-flex flex-column px-6 pt-4 pb-6">
          <h3 className="card-title fs-30 text-capitalize">
            {vendorData.name}
          </h3>
          <div className="mt-auto">
            <a
              href="shop-page-02.html"
              className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
              tabIndex={0}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherVendorsItem;
