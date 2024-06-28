import React from "react";
import Header from "../../components/shared/Header";
import Blogs from "../../components/Blogs/Blogs";

const Blog = () => {
  return (
    <div>
      <div className="bg-dark_blue">
        <Header />
      </div>
      <Blogs />
    </div>
  );
};

export default Blog;
