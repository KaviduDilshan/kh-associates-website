import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro ">
        <div className="">
          <div className="container-fluid">
            <div className=" intro-text">
                <h1>Expert Chartered Accountants</h1>
                <h1>Delivering Professional </h1>
                <h1>Financial Solutions</h1>
              <a href="#contact"
                  className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "} 
            </div>
            </div>
          </div>
        </div>
    </header>
  );
};
