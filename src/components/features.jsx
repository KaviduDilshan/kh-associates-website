import React from "react";

export const Features = (props) => {
  return (
    <div id="home" className="text-center">
      <div className="container-fluid">
        <div className="row">
          <div className=" section-title">
            <h2>Home</h2>
            </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 col-lg-6 section-title">
            <h3>Wellcome !</h3>
            <p>
              Welcome to K & H Associates, the unrivaled choice for professional
              accounting services. We excel in tax planning, business
              consulting, audit & assurance, and financial statement
              preparation. Let's unite to conquer your financial goals.{" "}
            </p>
          </div>

          <div className="col-md-6 col-lg-6 section-title">
            <h3>Why to choose us ?</h3>
            <p>
              We confidently guarantee the accuracy of your financial records,
              ensure compliance with tax obligations, and provide expert
              strategic advice to minimize tax liabilities and optimize your
              financial performance.
            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className=" section-title">
            <h4>
              Explore the benefits of professional financial guidance with our
              chartered accountant services.
            </h4>
            </div>
        </div> */}
      </div>
    </div>
  );
};
