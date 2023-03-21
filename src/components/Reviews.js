import React, { useState, useEffect } from 'react';
import './Reviews.css';
import profileImage from '../assets/review1.png';
import profileImageTwo from '../assets/review2.png';
import profileImageThree from '../assets/review3.png';
import profileImageFour from '../assets/review4.png';
import profileImageFive from '../assets/review5.png';
import profileImageSix from '../assets/review6.png';
import profileImageSeven from '../assets/review7.png';
import profileImageEight from '../assets/review8.png';
import profileImageNine from '../assets/review9.png';
import profileImageTen from '../assets/review10.png';

import { RiStarSFill } from 'react-icons/ri';
import { MdOutlineVerified } from 'react-icons/md';






const reviewsData = [
{
id: 1,
name: "John S",
body: "Impressed with Manto's attention to detail and communication",
profileImage: profileImage,
city: "Melbourne VIC",
},
{
id: 2,
name: "Jenny K",
body: "Manto exceeded our expectations with their high-quality work",
profileImage: profileImageTwo,
city: "Sydney NSW",
},
{
id: 3,
name: "Matt L",
body: "Manto's team was efficient, reliable, and delivered on time",
profileImage: profileImageThree,
city: "Brisbane QLD",
},
{
id: 4,
name: "Sara M",
body: "Manto transformed our home with their expertise and professionalism",
profileImage: profileImageFour,
city: "Adelaide SA",
},
{
id: 5,
name: "Alex H",
body: "Manto's customer service was exceptional, highly recommend their services",
profileImage: profileImageFive,
city: "Perth WA",
},
{
id: 6,
name: "Chris T",
body: "Manto's attention to detail and craftsmanship is outstanding",
profileImage: profileImageSix,
city: "Melbourne VIC",
},
{
id: 7,
name: "Emily W",
body: "Manto's team was professional and respectful throughout the entire project",
profileImage: profileImageSeven,
city: "Sydney NSW",
},
{
id: 8,
name: "Adam B",
body: "Manto's design and construction transformed our outdated space",
profileImage: profileImageEight,
city: "Brisbane QLD",
},
{
id: 9,
name: "Olivia K",
body: "Manto's project management ensured a smooth and stress-free experience",
profileImage: profileImageNine,
city: "Adelaide SA",
},
{
id: 10,
name: "Marcus L",
body: "Manto's team provided excellent craftsmanship and attention to detail",
profileImage: profileImageTen,
city: "Perth WA",
},
// add more reviews here...
];


const Reviews = () => {
 const [reviews, setReviews] = useState([]);
 const [currentReview, setCurrentReview] = useState(0);


 useEffect(() => {
   if (reviewsData && reviewsData.length > 0) {
     setReviews(reviewsData);
   } else {
     console.error("Reviews data is missing or invalid!");
   }
 }, []);


 useEffect(() => {
   if (reviews.length > 0) {
     const interval = setInterval(() => {
       setCurrentReview((currentReview + 1) % reviews.length);
     }, 3000);
     return () => clearInterval(interval);
   }
 }, [currentReview, reviews.length]);


 return (
   <div className="reviews-container">
   <div className="review__background">
     {reviews.length > 0 && (
       <div className="review">
         <div className="reviewer">
           <div className="profile-image-container">
             <img className="profile-image" src={reviews[currentReview].profileImage} alt={reviews[currentReview].name} />
           </div>
           <div className="review__stars">
           <div className="name">{reviews[currentReview].name}</div>
           <div className="city">{reviews[currentReview].city}</div>
           <div className="stars">
           <RiStarSFill color="gold" />
           <RiStarSFill color="gold"/>
           <RiStarSFill color="gold"/>
           <RiStarSFill color="gold"/>
           <RiStarSFill color="gold"/>
           </div>
           <h5 className="Verified">Verified <MdOutlineVerified color="green"/></h5>
           </div>
         </div>
         <div className="comment">"{reviews[currentReview].body}"</div>
        
       </div>
     )}
     {reviews.length === 0 && (
       <div className="no-reviews">No reviews available.</div>
     )}
     </div>
   </div>
 );
};


export default Reviews;
