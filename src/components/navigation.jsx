import React from "react";

export const Navigation = (props) => {
  const handleNavClick = () => {
    const nav = document.querySelector(".navbar-collapse");
    if (nav && nav.classList.contains("in")) {
      nav.classList.remove("in"); // Bootstrap 3 collapse class
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="logo" href="#page-top">
            <img
              src="/img/logo.webp"
              alt="Logo"
              style={{
                height: "60px",
                width: "180px",
                marginRight: "5px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll" onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handleNavClick}>
                About us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
