import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
             A glimpse into our journey — from building trusted client relationships and achieving major 
             financial milestones to the dedication, teamwork, and innovation that define K & H Associates. 
             Each moment captured reflects our commitment to excellence and the trust our clients place in us.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items text-cenetr">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                  >
                    < Image
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
