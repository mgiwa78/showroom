import React from "react";

const Register = () => {
  return (
    <section className=" pt-10" data-animated-id="2" id="register">
      <div className="container">
        <h2 className="fs-sm-40 mb-10 text-center">
          Send In A Request and we'll get right <br /> back to you{" "}
        </h2>
        <div className="row no-gutters">
          <div className="col-lg-10 mx-auto">
            <div className="col-lg-12 mb-8 mb-lg-0 pr-xl-2">
              <h3 className="fs-24 mb-6">Send in a request</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputEmail1" className="sr-only">
                        Company Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputEmail1" className="sr-only">
                        Company address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Company address"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputEmail1" className="sr-only">
                        Contact info
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="How do we reach out to your company"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputEmail1" className="sr-only">
                        Personnel Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputEmail1" className="sr-only">
                        Personnel Position
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Who are you within the company"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputEmail1" className="sr-only">
                        Personnel Contact info
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="How do we reach out to you"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="exampleInputPassword1" className="sr-only">
                    Expectations
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="What do you and your company hope to gain with this software, Help us serve you better"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Submit
                </button>
                <div className="custom-control custom-checkbox mb-7">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    name="remember"
                  />
                  <label
                    className="custom-control-label fs-15"
                    htmlFor="customCheck1"
                  >
                    Keep me signed in.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
