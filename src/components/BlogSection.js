import React from 'react';
import './BlogSection.css';
import blogImage from "../assets/grid2.png"
import blogImage2 from "../assets/grid3.png"
import blogImage3 from "../assets/grid12.png"
import { Link } from 'react-router-dom';

const BlogSection = () => {

  

  
  return (
    <div className="main-blog-wrapper">
    <div className="blog-section-container">
    <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/BlogReno">
      <div className="blog-container">
      <img className="blog-image" src={blogImage} alt="logo"/>
      <div className="blog-p">
        <h2>Planning Your Renovation</h2>
        <p className="p-color">
          Planning a renovation can be a daunting task, but with the right knowledge and preparation, it can also be an exciting opportunity to transform your home. In this blog, we'll guide you through the key steps involved in planning a renovation, from setting a budget to choosing a design style and hiring a contractor. We'll also provide tips on how to stay organized throughout the process and ensure that your renovation stays on track.
        </p>
      </div>  
      </div>
      </Link>
      <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/BlogCost">
      <div className="blog-container">
      <img className="blog-image" src={blogImage2} alt="logo"/>
      <div className="blog-p">
        <h2>Renovation Cost</h2>
        <p className="p-color">
          One of the biggest factors to consider when planning a renovation is cost. It's important to have a realistic budget in mind before you start any work, to avoid overspending and unnecessary stress. In this blog, we'll break down the different costs involved in a renovation project, from materials and labor to permits and unexpected expenses. We'll also offer strategies for saving money and staying within your budget, without compromising on the quality of your project.
        </p>
        </div>
      </div>
      </Link>
      <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/BlogTrust">
      <div className="blog-container">
      <img className="blog-image" src={blogImage3} alt="logo"/>
      <div className="blog-p">
        <h2>Finding Builders You Can Trust</h2>
        <p className="p-color">
          When it comes to renovating your home, choosing the right contractor is crucial. You want to work with someone who is experienced, reliable, and who you can trust to bring your vision to life. But with so many contractors out there, it can be overwhelming to know where to start. In this blog, we'll provide tips on how to find and vet potential contractors, from checking references to reviewing contracts and warranties. We'll also discuss red flags.
        </p>
      </div>  
      </div>
     </Link>
    </div>
  </div>  
  );
};

export default BlogSection;
