import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <img src={instagram_icon} alt="Instagram" />
      </a>

      <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
        <img src={facebook_icon} alt="Facebook" />
      </a>

      <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
        <img src={youtube_icon} alt="YouTube" />
      </a>

      <a href="https://twitter.com/gargie_a_03" target="_blank" rel="noopener noreferrer">
        <img src={twitter_icon} alt="Twitter" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gifts Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'> @ 1997-2025 Netflix, INC.</p>
    </div>
  )
}

export default Footer
