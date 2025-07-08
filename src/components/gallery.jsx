import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="gallery_header">Gallery</h2>
          <p>
            A glimpse into our journey — from trusted client partnerships to key milestones that shape our financial expertise.
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
