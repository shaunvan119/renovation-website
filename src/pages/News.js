import React from 'react'
import "./News.css"
import BlogSection from "../components/BlogSection"
import Header from '../components/Header'
import Footer from '../components/Footer'

const News = () => {
  return (
    <div className="news-wrapper-main">
    <Header/>
    <div className="content-news">
    <BlogSection/>

    </div>
    <Footer/>
   </div>
  )
}

export default News