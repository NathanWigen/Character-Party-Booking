import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-phone"> 
        <p className="phone-number">Call: (541) 301-7448</p>
        {/* <p className="phone-number">(541) 301-7448</p> */}
      </div>
      <div className="footer-email">
        <p className="email">Email: Dctc.Parties@gmail.com</p>
        {/* <p>Dctc.Parties@gmail.com</p> */}
      </div>
      <div className="footer-socials">
        <p className="socials">Follow Us</p>
        <p></p>
      </div>
    </footer>
  );
}
