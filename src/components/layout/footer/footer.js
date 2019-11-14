import React from 'react'
import logo from '../../../assets/img/Lukerlogo.svg'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

  return (
    <div className="footer-component" >
      <div className="footer-component-logo">
        <img src={logo} className="logo" alt="Logo Luker" />
      </div>
      <div className="footer-component-data">
        <h2>LUKER CHOCOLATE COLOMBIA</h2>
        <ul>
          <li>Calle 13 # 68-98</li>
          <li>Bogotá, Colombia</li>
          <li>lukercacao@lukerchocolate.com</li>
          <li>+57(1) 4473700</li>
        </ul>
      </div>
      <div className="footer-component-data">
        <h2>LUKER CHOCOLATE EUROPA</h2>
        <ul>
          <li>Kortrijksesteenweg 1132</li>
          <li>9051 Sint-Denjis-Westrem, Belgium</li>
          <li>lukereu@lukerchocolate.com</li>
          <li>+32(0) 9 2450460</li>
        </ul>
      </div>
      <div className="footer-component-link">
        <Link to="/solution">WORK WITH US</Link>
        <Link to="/solution">CONTACT US</Link>
        <Link to="/solution">VISIT OUR BLOG</Link>
      </div>
      <div className="footer-component-social">
        <h2>JOIN OUR NEWSLETTER</h2>
        <form action="/" >
          <input type="text" name="email" placeholder="Enter your email" />
          <input type="submit" value="Send" />
        </form>
        <div className="footer-component-social--btn">
          <a href="https://www.facebook.com/casalukeroficial" target="_blank" ><FaFacebookF /></a>
          <a href="https://twitter.com/CasaLuker_" target="_blank" ><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/casa-luker/" target="_blank" ><FaLinkedinIn /></a>
        </div>
      </div>
    </div >
  )
}

export default Footer;