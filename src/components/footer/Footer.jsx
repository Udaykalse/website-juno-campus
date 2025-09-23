import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      
      {/* Newsletter Section */}
      <div className={styles.section}>
        <h3>Stay Updated With Us:</h3>
        <p>The fastest and simple way to generate growing business solutions with our products</p>
        <input
          type="email"
          placeholder="Your business email"
          className={styles.inputEmail}
        />
      </div>

      {/* Development Center */}
      <div className={styles.section}>
        <h3>Development Center</h3>
        <p>701/702, Pentagon P2, Magarpatta, Hadapsar Pune(MH) - 411028</p>

        <h3>Sales Office</h3>
        <p>#2, 2nd Floor, Singh House, Plot #23/25, Ambalal Doshi Marg, Fort, Mumbai 400001</p>

        <h3>Contact</h3>
        <p>contactus@juno.org.in</p>
      </div>

      {/* Company & Resources */}
      <div className={styles.section}>
        <h3>Company</h3>
        <a href="#" className={styles.link}>About</a>
        <a href="#" className={styles.link}>Privacy Policy</a>
        <a href="#" className={styles.link}>Terms & Conditions</a>
        <a href="#" className={styles.link}>Partners</a>

        <h3>Resources</h3>
        <a href="#" className={styles.link}>Guides and resources</a>
        <a href="#" className={styles.link}>Blog</a>
        <a href="#" className={styles.link}>Support</a>
        <a href="#" className={styles.link}>ISO/IEC 27001:2025</a>
      </div>

      {/* Get in Touch / Socials */}
      <div className={styles.section}>
        <h3>Get in Touch</h3>
        <a href="#" className={styles.link}>Contact</a>
        <div className={styles.socials}>
          <FaFacebook size={24} style={{ marginRight: '10px' }} />
          <FaTwitter size={24} style={{ marginRight: '10px' }} />
          <FaLinkedin size={24} style={{ marginRight: '10px' }} />
          <FaInstagram size={24} />
        </div>
      </div>
      
    </div>
  )
}

export default Footer
