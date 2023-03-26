import React from 'react'
import './footer.css'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className='footer__logo'>RAIASHISH</a>
            <ul className="parmalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com" target="_blank"><AiFillFacebook /></a>
                <a href="https://instagram.com" target="_blank"><AiFillInstagram /></a>
                <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;RAIASHISHDEVELOPMENT.All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
