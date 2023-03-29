import React from 'react';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JumpingButton from '../components/JumpingButton';
import { AiOutlineMinus } from 'react-icons/ai';
import Team from "../assets/team.png"

function About() {
  return (
    <div className="about-container">
    <Header/>
  <div className="blog-container-pages blog-container-about">
     <div className="heading-content">
    <div className="heading-overlay">
      <h1 className="heading">Melbourne home <br />renovation <span className="color__change"><br/>experts.</span><br/><AiOutlineMinus /></h1>
      <div className="jump-container">
        <JumpingButton/>
      </div>
    </div>  
  </div>
    <div className="flex-blog-section">
      <h2>Welcome to Manto <span className="color-change-steps">Construction!</span></h2>
      <p className="blog-pages-p">We are a home renovation business dedicated to providing high-quality construction services to homeowners in need of transforming their living spaces. With years of experience in the industry, we pride ourselves on delivering exceptional results that exceed our clients' expectations.</p>
      <p className="blog-pages-p">Our team consists of highly skilled professionals who are passionate about their work and committed to delivering outstanding results. We offer a wide range of services, including but not limited to kitchen and bathroom renovations, basement finishing, custom cabinetry, and home additions.</p>
      <p className="blog-pages-p">At Manto Construction, we understand that every client has unique needs and preferences. That's why we work closely with our clients from the initial consultation to the final touches, to ensure that we fully understand their vision and requirements. We believe in transparency and open communication, and we always keep our clients informed throughout the entire renovation process.</p>
      <p className="blog-pages-p">Our company is built on a foundation of integrity, honesty, and professionalism. We strive to maintain the highest standards of quality in all our projects, no matter the size or complexity. Our goal is to exceed our clients' expectations and create a space that they will love for years to come.</p>
      <p className="blog-pages-p">We are proud to serve the community and have established a reputation for excellence. Our clients trust us to handle their home renovations with care, and we are committed to delivering exceptional results every time. If you're looking for a reliable and trustworthy home renovation company, look no further than Manto Construction. Contact us today to schedule a consultation and let us bring your vision to life.</p>
    </div>
    </div>
    <div className="about-image-container">
      <div className="about-div-image-container">
      <img className="background-team-photo" src={Team} alt="team"/>
      </div>
      <div className="h2-about-container">
      <h2 className="heading-about">Over 20 years<br/> <span className="blog-pages-p">experience</span></h2>
      </div>
    </div>
    <div className="footer-about">
    <Footer/>
    </div>
    </div>
  );
}

export default About;
