import React, { useEffect, useRef } from 'react';
import Header from '../components/Header'
import ImageSlides from '../components/ImageSlides'
import './HomePage.css';
import { MdOutlineBathtub } from 'react-icons/md';
import { MdKitchen } from 'react-icons/md';
import { GiFloorPolisher } from 'react-icons/gi';
import { MdMapsHomeWork } from 'react-icons/md';
import { FaFileContract } from 'react-icons/fa';
import { BsHouseCheckFill } from 'react-icons/bs';







const HomePage = () => {
  const servicesGridRef = useRef(null);

  useEffect(() => {
    const servicesGrid = servicesGridRef.current;
    const handleScroll = () => {
      if (servicesGrid && window.scrollY + window.innerHeight >= servicesGrid.offsetTop) {
        servicesGrid.classList.add('fade-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home__page'>
    <Header/>
    <ImageSlides/>
    <div className="services-container">
      <div className="services-grid" ref={servicesGridRef}>
        <div className="service">
          <h3 className="service-title"> <MdOutlineBathtub size={30} color='#73a580'/> Bathroom Renovations</h3>
          <p className="service-description">
            Update your bathroom with our complete renovation service. From plumbing to tiling, we'll transform your outdated bathroom into a modern oasis.
          </p>
        </div>
        <div className="service">
          <h3 className="service-title"><MdKitchen size={30} color='#73a580' /> Kitchen Renovations</h3>
          <p className="service-description">
            We'll work with you to design and build the kitchen of your dreams. From cabinets to countertops, we'll handle all aspects of your kitchen renovation.
          </p>
        </div>
        <div className="service">
          <h3 className="service-title"><GiFloorPolisher size={30} color='#73a580'/> Flooring Installation</h3>
          <p className="service-description">
            Our team specializes in high-quality flooring installation services, including hardwood, tile, and laminate flooring. We can also help with refinishing or repairing existing floors to restore them to their former glory.
          </p>
        </div>
        <div className="service">
          <h3 className="service-title"><MdMapsHomeWork size={30} color='#73a580'/> Home Additions</h3>
          <p className="service-description">
            Need more space? We'll help you design and build an addition to your home that meets your needs and complements your existing structure.
          </p>
        </div>
        <div className="service">
          <h3 className="service-title"><BsHouseCheckFill size={30} color='#73a580'/> Exterior Renovations</h3>
          <p className="service-description">
            Enhance your home's curb appeal with our exterior renovation services. From new siding to updated windows, we'll give your home a fresh new look.
          </p>
        </div>
        <div className="service">
          <h3 className="service-title"><FaFileContract size={30} color='#73a580'/> General Contracting</h3>
          <p className="service-description">
            Don't know where to start? Our experienced general contractors will work with you to plan and execute your home renovation project from start to finish.
          </p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default HomePage