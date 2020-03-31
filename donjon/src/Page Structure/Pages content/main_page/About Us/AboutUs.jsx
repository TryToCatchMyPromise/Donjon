import React from "react";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
      <section className="about-us-block" id="about-us">
        <div className="about-us-column about-us-left ">
          <div className="about-us-items about-us-left-item">Этот блок выезжает слева</div>
        </div>
        <div className="about-us-column about-us-right">
          <div className="about-us-items about-us-right-item">Этот блок выезжает справа</div>
        </div>
        <div className="about-us-column about-us-left ">
          <div className="about-us-items about-us-left-item">Этот блок выезжает слева</div>
        </div>
        <div className="about-us-column about-us-right">
          <div className="about-us-items about-us-right-item">Этот блок выезжает справа</div>
        </div>
        <div className="about-us-column about-us-left ">
          <div className="about-us-items about-us-left-item">Этот блок выезжает слева</div>
        </div>
        <div className="about-us-column about-us-right">
          <div className="about-us-items about-us-right-item">Этот блок выезжает справа</div>
        </div>
      </section>
  );
};

export default AboutUs;