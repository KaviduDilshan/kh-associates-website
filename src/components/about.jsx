import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4 section-title">
            <div className="about-text">
              <h2 >About Us</h2>
              <p>
                K & H Chartered Accountants stands as a leading accounting firm committed to delivering exceptional financial services
                for individuals and businesses. Our team, comprising highly qualified chartered accountants, offers a wide array of services,
                encompassing auditing, tax planning, financial consulting, and compliance advisory.
              </p>
            </div>
          </div>
          
          <div className="col-xs-12 col-md-6 col-lg-4 section-title">
            <div className="about-text ">
              <h2>Vision</h2>
              <p>
                To establish ourselves as the foremost chartered accountancy firm, acknowledged for our steadfast dedication
                to excellence, innovation, and client-centric solutions that enable both individuals and businesses to thrive within an
                ever-evolving financial landscape.
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 section-title">
            <div className="about-text">
              <h2>Mission</h2>
              <p>
                We aim to provide reliable financial insight and high-quality services that empower our clients to make strategic decisions.
                Through integrity, commitment, and forward-thinking, we support sustainable financial growth and regulatory confidence.
              </p>
            </div>
          </div>
        </div>

        
        <div className="row text-center">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src="img/about/1.jpg" className="img-responsive center-block" alt="About us" />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src="img/about/2.jpg" className="img-responsive center-block" alt="About us" />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <img src="img/about/3.jpg" className="img-responsive center-block" alt="About us" />
          </div>
        </div> 
      </div>
    </div>
  );
};
