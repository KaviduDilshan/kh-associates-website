import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container-fluid text-base sm:text-lg md:text-xl">
        <div className="section-title">
          <h2>Our Services</h2>
          <p className="p1">
            At K & H Associates, we believe that every business deserves
            top-notch accounting services. Let us help you take your business to
            the level with our expert guidance.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-3">
            <img src="img/service/1.jpg"
              className="img-responsive center-block"
              alt="About us"/>
              <h3>Tax Planning and Compliance</h3>  
              <p >Maximize your tax strategy with our full-spectrum planning and compliance services.
                 Our expert guidance ensures strict adherence to regulations while maximizing your savings. </p> 
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <img src="img/service/2.jpg"
              className="img-responsive center-block"
              alt="About us"/> 
              <h3>Financial Statement Preparation</h3> 
              <p>Experience the difference with our precise and dependable financial statement preparation, 
                which offers a comprehensive insight into your business's financial well-being and performance. </p>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <img src="img/service/3.jpg"
              className="img-responsive center-block"
              alt="About us"/>
              <h3>Business Advisory and Consulting</h3>
              <p>Leverage our expertise for strategic business advice, tailored solutions, and proactive consulting 
                to drive growth and success.</p>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <img src="img/service/4.jpg"
              className="img-responsive center-block"
              alt="About us"/>
              <h3>Auditing and Assurance Services</h3>
              <p>Experience rigorous auditing and assurance services tailored to verify the accuracy and reliability of 
                your financial information, building trust and instilling confidence </p>
          </div>
        </div>
      </div>
    </div>
  );
};
