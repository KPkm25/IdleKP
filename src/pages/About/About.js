import React from "react";
import Header from "../../components/shared/Header";
import Abouts from "../../components/About/About";

const About = () => {
  return (
    <div>
      <div className="bg-dark_blue">
        <Header />
      </div>
      <Abouts showMore={true} />
    </div>
  );
};

export default About;
