import React from 'react'
import './ContactStyle.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  
  return (
    <div className='body'>
      <div className='contact-container'>
      <div className='contact-content'>
        <div className='left-side'>
          <div className='address details'>
            <i className='fas fa-map-marker-alt'><FaLocationDot /></i>
            <div className='topic'>Address</div>
            <div className='text-one'>S42, Costa Tower</div>
            <div className='text-two'>Margao Goa</div>
          </div>
          <div className='phone details'>
            <i className='fas fa-phone-alt'><FaPhoneAlt /></i>
            <div className='topic'>Phone</div>
            <div className='text-one'><a href="tel:+91 9130598444">+91 9130598444</a></div>
          </div>
          <div className='email details'>
            <i className='fas fa-envelope'><MdEmail /></i>
            <div className='topic'>Email</div>
            <div className='text-one'><a href="mailto:slavadsilva20@gmail.com">slavadsilva20@gmail.com</a> </div>
          </div>
        </div>
        <div className='right-side'>
          <div className='topic-text'>Get in Touch</div>
          <p>Have questions or feedback? Reach out to us using the form below. We'd love to hear from you!</p>
          <form>
            <div className='input-box'>
              <input type='text' placeholder='Name*' name="user_name" />
            </div>
            <div className='input-box'>
              <input type='number' placeholder='Contact Number*' name="contact_number"/>
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Email*' name="user_email" />
            </div>
            <div className='input-box message-box'>
              <textarea placeholder='Message*' name="message"></textarea>
            </div>
            <div className='button'>
              <input type='button' value='Send' />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}