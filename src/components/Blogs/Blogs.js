import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'; // Import the CSS file

const Blogs = () => {
  const [blogImages, setBlogImages] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogImages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs`, {
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch blog images');
        }
        const data = await response.json();
        setBlogImages(data);
      } catch (error) {
        console.error('Error fetching blog images:', error);
      }
    };

    fetchBlogImages();
  }, []);

  useEffect(() => {
    console.log('selected blog', selectedBlog);
  }, [selectedBlog]);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    console.log('selected blog', selectedBlog);
  };

  const trimTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
  };

  const trimContent = (content, maxLength) => {
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  };

  return (
    <section className="blogs-section">
      <div className="content-container">
        <div className="text-center mb-10">
          <h3 className="title">Our Blogs</h3>
        </div>
        <div className="flex flex-wrap justify-center">
          {blogImages.map((blog, index) => (
            <div key={index} className="blog-card">
              <Link to={`/blogs/${blog._id}`}>
                <div className="blog-content" onClick={() => handleBlogClick(blog)}>
                  <h3 className="blog-title">{trimTitle(blog.blogTitle, 50)}</h3>
                  <h4 className="blog-contents">{(blog.blogContent)}</h4>
                  <div className="blog-date">{blog.date}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
