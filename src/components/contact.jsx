import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container-fluid ">
          <div className="row first text-center section-title">
            <div className="col-md-12 col-xs-12 col-sm-12">
              <h2>Get In Touch</h2>
              <p className="p1">
                At K & H Associates, we provide expert chartered accounting
                services.
              </p>
              <p className="p1">
                Whether you're a business or an individual, we’re here to ensure
                your financial affairs are managed efficiently and effectively.
              </p>
            </div>
          </div>

          <div className="row  contact  contact-info">
            {/* Contact Form */}
            <div className="con text-center col-lg-4  mt-4 ">
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="form-group ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-M btn-lg mt-3">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Block 1 */}
            <div className="col-lg-8 col-md-6 mt-4 contact-info">
              <div className="row  justify-content-center">
                <div className="cons col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <img src="img/QR.png" className="imgs" alt="QR Code" />
                </div>

                <div className="cons col-xs-6 col-sm-6 col-md-6 col-lg-6 cons">
                  <h3>Contact Info</h3>
                  <div>
                    <span>
                      <i className="fa fa-map-marker"></i> Address:
                    </span>
                    <p>No.254, 2nd Floor, Colombo Road, Kurunegala</p>
                  </div>
                  <div>
                    <span>
                      <i className="fa fa-phone"></i> Phone:
                    </span>
                    <p>+94 37 222 4200 | +94 71 062 5518</p>
                  </div>
                  <div>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email:
                    </span>
                    <p>associateskandh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social mt-4">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href={props.data?.facebook || "/"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={props.data?.twitter || "/"}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={props.data?.youtube || "/"}>
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            <script>document.write(new Date().getFullYear())</script> K & H
            Associates. Developed by
            <a href="https://www.tritcal.com">
              Tritcal International (Pvt.) Ltd
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
