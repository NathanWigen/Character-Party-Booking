import React from "react";
import './Footer.css'

import twitter from '../../../Assets/about-photos/twitter.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-phone"> 
        <p className="phone-number">Call: (202)-555-0183</p>
      </div>
      <div className="footer-email">
        <p className="email">Email: Charcterpartys@gmail.com</p>
      </div>
      <div className="footer-socials">
        <p className="socials">Follow Us</p>
        <img src={twitter} alt="twitter Logo" className="twitter-logo"/>
      </div>
    </footer>
  );
}
