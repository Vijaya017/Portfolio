import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

import ABOUT from '../about/About'



const Footer = () => {
  return (
    <footer>
    
     <a href="#"className='footer__logo'>VIJAYA SINHA</a>
     
     <ul className='permalinks'>
     <li><a href="#">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#experience">Experience</a></li>
     <li><a href="#services">Services</a></li>
     <li><a href="#portfolio">Portfolio</a></li>
     {/* <li><a href="testimonmials">Testimonials</a></li> */}
     <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
      <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
      <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
      <a href="https://linkedin.com" target='_blank'><FaLinkedinIn/></a>
     </div>

     <div className="footer__copyright">
      <small>&copy; Vijaya Sinha's Portfolio. All rights reserved. </small>
     </div>
    </footer>
  )
}

export default Footer
