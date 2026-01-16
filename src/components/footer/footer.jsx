import React from "react";
import styles from "./footer.module.css";
import footerLogo from "../../assets/f-juno-logo.png";
import emailLogo from "../../assets/f-email.png";
import flogoL from "../../assets/f-loc.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.newsletter_content}>
          <h1>Stay Updated With Us</h1>
          <p>
            The fastest and simple way to generate growing business
            <br />
            solutions with our products
          </p>
        </div>
        <div className={styles.newsletter_form}>
          <div className={styles.inputDiv}>
            <input type="email" placeholder="Your business email" />
            <button className={styles.btnPrimary}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Footer Main */}
      <div className={styles.footerMain}>
        {/* Logo + Address */}
        <div className={styles.footerCol}>
          <div className={styles.flogoDiv}>
            <img src={footerLogo} alt="JUNO" width="280" />
          </div>

          <div className={styles.flogoMDiv}>
            <div className={styles.addressBox}>
              <div>
                <img src={flogoL} alt="" />
              </div>
              <div>
                <h4>Development Center</h4>
                <p>
                  701/702, Pentagon P2, Magarpatta,
                  <br />
                  Hadapsar Pune (MH) - 411028
                </p>
              </div>
            </div>

            <div className={styles.addressBox}>
              <div>
                <img src={flogoL} alt="" />
              </div>
              <div>
                <h4>Sales Office</h4>
                <p>
                  #2, 2nd Floor, Singh House, <br /> Plot #23/25, Ambalal Doshi
                  Marg, <br /> Fort, Mumbai 400001
                </p>
              </div>
            </div>
          </div>

          <div className={styles.flogoBDiv}>
            <img src={emailLogo} alt="" />
            <p className={styles.email}>contactus@juno.org.in</p>
          </div>
        </div>

        <div className={styles.finfoDiv}>
          {/* Company */}
          <div className={styles.footerCol1}>
            <h3>Company</h3>
            <a href="/about-us">About</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Partners</a>
          </div>

          {/* Resources */}
          <div className={styles.footerCol1}>
            <h3>Resources</h3>
            <a href="#">Guides & Resources</a>
            <a href="#">Blog</a>
            <a href="#">Support</a>
            <a href="#">ISO/IEC 27001:2025</a>
          </div>

          {/* Social */}
          <div className={styles.footerCol1}>
            <h3>Get in Touch</h3>
            <a href="/contact-us">Contact</a>
            <a href="/#">Socials</a>

            <div className={styles.socials}>
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
