import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const FooterBanner = () => {
  return (
    <div className="footer-container">
        <div className="footer-newsletter">
            <input type="email" placeholder="enter your email"></input>
            <input type="button" value="Subscribe"></input>
        </div>
        <div className="Brands-lists">
            <div className="Brands-slider"></div>
        </div>
        <div className="privacy-socials">
            <div className="terms-conditions">
                <ul>
                    <li>PRIVACY</li>
                    <li>T'S & C'S</li>
                    <li>RETURNS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li><FaXTwitter /></li>
                    <li><FaFacebookF /></li>
                    <li><FaLinkedin /></li>
                    <li><FaInstagram /></li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copy rights Swipe a'Loot 2024 @ all rights reserved</p>
            </div>
        </div>
    </div>
  )
}
