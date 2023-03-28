import React, { useEffect } from 'react';
import "./Footer.css"
import footerBackground from "../assets/footerBackground.png"
import LogoFooter from "../assets/logoFooter.png"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';

const Footer = () => {

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
};

useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.3,
    });
    const container = document.querySelector('.footer-fade');
    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);



  return (
    <div className="footer-wrapper">
     <div className="overlay-footer"></div>
      <img className="footer-background" src={footerBackground} alt="kitchen background"/>
      <h2 className="footer-header footer-fade">MELBOURNES MOST <span className="color-footer">TRUSTED</span> BUILDERS</h2>

     <div className="footer-items-wrapper">

      <div className="footer-logo-container">
        <img className="footer-logo" src={LogoFooter} alt="logo"/>
        <p className="footer-p">Manto construstion manages<br/> he whole renovation process,<br/> design through to build.</p>
      </div>
      
      <div className="contact-wrapper">
      <div className="contact-info">
        <h3 className="footer-h3-contact">Contact</h3>
        <p className="contact"><span className="color-footer">P:</span>1800 465 968</p>
        <p className="contact"><span className="color-footer">E:</span>admin@manto.com.au</p>
      </div>  
        <div className="react-icons">
          <FaFacebookF size={25} color="rgb(192, 165, 8)" />
          <AiOutlineInstagram size={25} color="rgb(192, 165, 8)"/>
          <ImPinterest2 size={25} color="rgb(192, 165, 8)" />
        </div>
      </div>
      </div>

      <div className="black-container-footer">
      </div>
    </div>
  )
}

export default Footer
