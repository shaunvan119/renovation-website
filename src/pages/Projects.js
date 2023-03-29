import React from 'react'
import "./Projects.css"
import ImageGrid from '../components/ImageGrid'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div className="projects-wrapper-main">
    <Header/>
    <div className="content-projects">
    <ImageGrid/>
    </div>
    <Footer/>
   </div>
  )
}

export default Projects