import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro ">
        <div className="">
          <div className="container-fluid">
              <div className="col-md-10 col-md-offset-2 intro-text">
                <h1>Expert  Chartered  Accountants</h1> 
                  <h1> Delivering  Professional  Financial Solutions</h1> 
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
