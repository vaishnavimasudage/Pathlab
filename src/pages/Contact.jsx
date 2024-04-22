// ContactUs.js

import React from "react";
import "./CSS/Contact.css"; // Import your CSS file for styling
import img1 from '../pages/vaish.jpg';
import img2 from '../pages/yash.jpg';
import img3 from '../pages/pra.jpg';
import img4 from '../pages/nm.jpg';
import img5 from '../pages/yy.jpg';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-cards">
        <div className="contact-card">
          <img src={img1} alt="Person2" />
          <h4>Vaishnavi Masudage</h4>
          <h6>vaishnavimasudage@gmail.com</h6>
          <h6>+91 9175221105</h6>
        </div>

        

        <div className="contact-card">
          <img src={img2} alt="Person 2" />
          <h3>Yash Ghodmare</h3>
          <h6>yashghodmare9881@gmail.com</h6>
          <h6>+91 9876543210</h6>
        </div>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <img src={img3} alt="Person 2" />
          <h4>Prasad Ingavale </h4>
          <h6>prasad@gmail.com</h6>
          <h6>+91 9876543210</h6>
        </div>

        <div className="contact-card">
          <img src={img4} alt="Person 2" />
          <h4>Namrata Karmalkar</h4>
          <h6>namrata@gmail.com</h6>
          <h6>+91 9876543210</h6>
        </div>
        
        </div>


        <div className="contact-cards">
        <div className="contact-card">
          <img src={img5} alt="Person 2" />
          <h4>Yash Kamble</h4>
          <h6>yash@gmail.com</h6>
          <h6>+91 9876543210</h6>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
