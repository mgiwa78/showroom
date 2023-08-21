import React from "react";

const HeroSection = () => {
  return (
    <main id="content">
      <section
        className="bg-img-cover-center pt-13 overflow-hidden position-relative landing-banner parralax-images"
        style={{
          backgroundImage: "url(/images/circles.png)",
          backgroundColor: "#f0ece9"
        }}
      >
        <div className="container container-xxl">
          <div className="mxw-814 mx-auto pt-10 pt-lg-13 position-relative z-index-2">
            <p
              className="fs-18 mb-2 text-gray-04 text-center font-weight-500"
              data-animate="fadeInDown"
            >
              Transforming Furniture Dreams into Digital Reality
            </p>
            <h1
              className="fs-30 fs-lg-48 mb-0 text-center lh-14"
              data-animate="fadeInUp"
            >
              Unveil Your Virtual Showroom with Elegance and Ease
            </h1>
          </div>
        </div>
        <div
          className="layer z-index-2 position-static position-absolute-xxl px-3 px-xxl-0 mx-auto mx-xxl-0"
          style={{ maxWidth: 971, left: "25%", bottom: 0 }}
        >
          <img src="/images/a2.png" alt="Banner Landing 01" />
        </div>
        <div
          className="layer position-absolute z-index-1 d-none d-xxl-block"
          style={{ top: "36%", left: "14%", maxWidth: "376px" }}
        >
          <img src="/images/a1.png" alt="Banner Landing 02" />
        </div>
        <div
          className="layer position-absolute z-index-3 d-none d-xxl-block"
          style={{ top: "35%", right: "21%", maxWidth: "186px" }}
        >
          <img src="/images/a3.png" alt="Banner Landing 03" />
        </div>
        <div
          className="layer position-absolute z-index-3 d-none d-xxl-block"
          style={{ bottom: "4%", right: "12%", maxWidth: "443px" }}
        >
          <img src="/images/a4.png" alt="Banner Landing 04" />
        </div>
        <div
          className="layer position-absolute z-index-3 d-none d-xxl-block"
          style={{ top: "43%", right: "17%", maxWidth: "79px" }}
        >
          <img src="/images/arrow.png" alt="Banner Landing 05" />
        </div>
        <div
          className="layer position-absolute z-index-3 d-none d-xxl-block"
          style={{ bottom: "14%", left: "23%", maxWidth: "79px" }}
        >
          <img src="/images/dot-1.png" alt="Banner Landing 06" />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
