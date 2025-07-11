import React, { useEffect, useRef, useState } from "react";

export const About = () => {
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const valueDisplays = document.querySelectorAll(".num");
          const interval = 2000;

          valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            const endValue = parseInt(valueDisplay.getAttribute("data-val"));
            const duration = Math.floor(interval / endValue);
            const counter = setInterval(() => {
              startValue += 1;
              valueDisplay.textContent = startValue + "+";
              if (startValue === endValue) {
                clearInterval(counter);
              }
            }, duration);
          });
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the counter section is visible
      }
    );

    const currentrRef=counterRef.current;
    if (counterRef) {
      observer.observe(currentrRef);
    }

    return () => {
      if (currentrRef){
       observer.unobserve(currentrRef);
      }
    };
  }, [hasAnimated]);

  return (
    <div id="about" className="text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4 section-title">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                K & H Chartered Accountants stands as a leading accounting firm committed to delivering exceptional financial services
                for individuals and businesses. Our team, comprising highly qualified chartered accountants, offers a wide array of services,
                encompassing auditing, tax planning, financial consulting, and compliance advisory.
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 section-title">
            <div className="about-text">
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

        {/* Counter Row */}
        <div ref={counterRef} className="row text-center mt-5">
          <div className="wrapper d-flex justify-content-center flex-wrap">
            <div className="counter-box mx-3 my-3">
              <img
                src="/img/about/1.png"
                alt="Experience Icon"
              />
              <div className="num" data-val="20">000</div>
              <div className="text">Experiance</div>
            </div>
            <div className="counter-box mx-3 my-3">
              <img
                src="/img/about/2.png"
                alt="Experience Icon"
              />
              <div className="num" data-val="500">000</div>
              <div className="text">Happy Clients</div>
            </div>
            <div className="counter-box mx-3 my-3">
              <img
                src="/img/about/3.png"
                alt="Experience Icon"
              />
              <div className="num" data-val="100">000</div>
              <div className="text">Employees</div>
            </div>
            <div className="counter-box mx-3 my-3">
              <img
                src="/img/about/4.png"
                alt="Experience Icon"
              />
              <div className="num" data-val="1000">000</div>
              <div className="text">Total projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



