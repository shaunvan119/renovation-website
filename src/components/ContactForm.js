import React, { useState, useRef } from "react"
import ReactGA from 'react-ga';
import emailjs from "@emailjs/browser"
import "./ContactForm.css"



const Result = () => {
  return (
    
    <p className="result-msg">Your message has been sent</p>
   
  );
};

const ContactForm = () => {

  const FormSubmission = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Form submision button clicked'
          });
        
    }
  const [result, showResult] = useState(false)
 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4aiwmr",
        "template_rer8is9",
        form.current,
        "Fh0Y9YM-DloiKhGif"
      )
      .then(
        (result) => {
          console.log(result.text);
       
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true)
  };

  

  return (

    <div className="form-container">
    <h2 className="popform__heading">BOOK YOUR FREE <span style={{ color: "#6b6e70" }} >CONSULT</span></h2>
    <h2 className="popform__offer"><span style={{ color: "whitesmoke" }} >*30 Spots Available <span style={{ color: "rgb(192, 165, 8)" }} >(Valued at $299)</span></span></h2>
     <form className="form-contact" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input-contact" type="text" name="user_name" />
        <label>Email</label>
        <input className="input-contact" type="email" name="user_email" />
        <label >Message</label>
        <textarea className="input-contact" name="message" />
        <div> {result ? <Result/> : null}</div>
        <input onClick={FormSubmission} className="input-button  last_input" type="submit" value="Claim offer" />
      </form>
   
 </div>  
  );
};

export default ContactForm;