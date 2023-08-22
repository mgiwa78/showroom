import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section
      className="py-12 pb-lg-15"
      style={{ backgroundColor: "#dedbd2" }}
      data-animated-id="7"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="col-lg-12 ml-lg-auto text-center">
              <div className="d-flex flex-column align-items-center">
                <div className="w-124px mb-8">
                  <img src="images/icon_sub.png" alt="Icon sub" />
                </div>{" "}
                <p className="mb-6 font-weight-500">
                  Join us today and unlock the potential of your furniture
                  business like never before. Embrace innovation, deliver
                  excellence, and bring the future of furniture right to your
                  clients' screens." Experience the Furniture Showroom
                  Revolution. Embrace the Digital Era with Showroom."
                </p>
                <Link href={"/#register"}>
                  <h2 className="fs-30 fs-md-40 mb-4 text-center">
                    Request for a virtual space
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
