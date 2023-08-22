import React from "react";

const FeaturedVendors = () => {
  return (
    <>
      <section className="bg-color-3" data-animated-id="1">
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
                Featured
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="">
          <div
            className="slick-slider dots-inner-center"
            data-slick-options='{"slidesToShow": 1,"infinite":false,"autoplay":true,"dots":true,"arrows":false}'
          >
            <div className="box">
              <div
                className="d-flex flex-column justify-content-center bg-img-cover-center custom-vh custom-height-sm"
                style={{
                  backgroundImage: "url(images/pexels-leah-kelley-6480707.jpg)"
                }}
              >
                {" "}
                <div
                  className="over"
                  style={{
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.3)"
                  }}
                ></div>
                <div className="d-flex flex-column h-100 justify-content-center pl-3 pl-md-10 pl-lg-14">
                  <p
                    className="text-primary font-weight-bold fs-20 mb-4"
                    data-animate="fadeInUp"
                  >
                    Vento
                  </p>
                  <h1
                    className="mb-7 fs-sm-60 fs-lg-90 lh-1 mw-75"
                    data-animate="fadeInUp"
                  >
                    Italian leather Collection
                  </h1>
                  <div>
                    <a
                      href="#"
                      className="btn btn-primary text-uppercase letter-spacing-05"
                      data-animate="fadeInUp"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div
                className="d-flex flex-column justify-content-center bg-img-cover-center custom-vh custom-height-sm"
                style={{
                  backgroundImage:
                    "url(images/pexels-vecislavas-popa-1571460.jpg)"
                }}
              >
                {" "}
                <div
                  className="over"
                  style={{
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.3)"
                  }}
                ></div>
                <div className="d-flex flex-column h-100 justify-content-center pl-3 pl-md-10 pl-lg-14">
                  <p
                    className="text-primary font-weight-bold fs-20 mb-4"
                    data-animate="fadeInUp"
                  >
                    Baffi
                  </p>
                  <h2
                    className="mb-7 fs-sm-60 fs-lg-90 lh-1"
                    data-animate="fadeInUp"
                  >
                    Luxury tilling
                  </h2>
                  <div>
                    <a
                      href="#"
                      className="btn btn-primary text-uppercase letter-spacing-05"
                      data-animate="fadeInUp"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div
                className="d-flex flex-column justify-content-center bg-img-cover-center custom-vh custom-height-sm"
                style={{
                  backgroundImage:
                    "url(images/pexels-subham-majumder-3614082.jpg)"
                }}
              >
                {" "}
                <div
                  className="over"
                  style={{
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.3)"
                  }}
                ></div>
                <div className="d-flex flex-column h-100 justify-content-center pl-3 pl-md-10 pl-lg-14">
                  <p
                    className="text-primary font-weight-bold fs-20 mb-4"
                    data-animate="fadeInUp"
                  >
                    Viva
                  </p>
                  <h2
                    className="mb-7 fs-sm-60 fs-lg-90 lh-1"
                    data-animate="fadeInUp"
                  >
                    Empirial Lighting with prime interio
                  </h2>
                  <div>
                    <a
                      href="#"
                      className="btn btn-primary text-uppercase letter-spacing-05"
                      data-animate="fadeInUp"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVendors;
