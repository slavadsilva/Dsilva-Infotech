import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
        <div className='footer'>
        <ul className='social-icon'>
          <li className='social-icon_item'><a className='social-icon_link' href='https://www.facebook.com/slava.dsilva'>
              <ion-icon name='logo-facebook'><FaSquareFacebook /></ion-icon>
            </a></li>
          <li className='social-icon_item'><a className='social-icon_link' href='https://twitter.com/SlavaDsilva2'>
              <ion-icon name='logo-twitter'><FaXTwitter /></ion-icon>
            </a></li>
          <li className='social-icon_item'><a className='social-icon_link' href="https://www.linkedin.com/in/slava-d-silva-555957230">
              <ion-icon name='logo-linkedin'><FaLinkedin /></ion-icon>
            </a></li>
          <li className='social-icon_item'><a className='social-icon_link' href='https://www.instagram.com/slava_dsilva'>
              <ion-icon name='logo-instagram'><FaInstagram /></ion-icon>
            </a></li>
          <li className='social-icon_item'><a className='social-icon_link' href='https://www.youtube.com/@triquetra545'>
            <ion-icon name='logo-youtube'><FaYoutube /></ion-icon>
          </a></li>
          <li className='social-icon_item'><a className='social-icon_link' href='https://on.soundcloud.com/FpBC7i2UXkqqR6Mr9'>
            <ion-icon name='logo-soundcloud'><FaSoundcloud /></ion-icon>
          </a></li>
        </ul>
        <ul className='menu'>
          <li className='menu_item'><NavLink className='menu_link' to="/">Home</NavLink></li>
          <li className='menu_item'><NavLink className='menu_link' to="/about">About</NavLink></li>
          <li className='menu_item'><NavLink className='menu_link' to="/services">Services</NavLink></li>
          <li className='menu_item'><NavLink className='menu_link' to="/contact">Contact</NavLink></li>
        </ul>
        <p>2024 &copy; Dsilva Infotech | All Rights Reserved</p>
      </div>
    </div>
  );
}
