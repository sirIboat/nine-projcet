import React from "react";
import "./VillainSection.css";

function Section2({ headline, description, img, alt }) {
  return (
    <>
      <div className="home__villain-section villainBg">
        <div className="container">
          <h1 className={"villain-head"}>{headline}</h1>
          <p className={"home__villain-subtitle"}>{description}</p>
          <img src={img} alt={alt} className="home__villain-img" />
        </div>
      </div>
    </>
  );
}

export default Section2;
