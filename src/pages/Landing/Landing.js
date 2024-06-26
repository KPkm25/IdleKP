import React from "react";
import Header from "../../components/shared/Header";
// import Blogs from "../../components/Landing/Blogs";
import About from "../../components/About/About";

const Landing = () => {
  return (
    <div>
      <div className="bg-dark_blue">
        <Header />
      </div>
      <About showMore={false}/>
      {/* <Blogs /> */}
    </div>
  );
};

export default Landing;
