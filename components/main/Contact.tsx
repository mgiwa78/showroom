import React from "react";

const Contact = () => {
  return (
    <>
      <div className="pb-11 pb-lg-15 pt-10" data-animated-id="4" id="contact">
        <h2 className="fs-sm-40 mb-10 text-center">Contact Us</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="fs-24 mb-2">We would love to hear from you.</h2>
              <p className="mb-7">
                If you’ve got great products your making or looking to work with
                us then drop us a line.
              </p>
              <form>
                <div className="row mb-6">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name*"
                      required={true}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email*"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea className="form-control" rows={6}>
                    Comment
                  </textarea>
                </div>
                <div className="custom-control custom-checkbox mb-6">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label fs-15"
                    htmlFor="customCheck1"
                  >
                    {" "}
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-uppercase letter-spacing-05"
                >
                  submit now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
