import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Logo from './../../assets/junologo.png'
import { FaChevronDown } from 'react-icons/fa'

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Juno Logo" className={styles.logoImage} />
        <span className={styles.CompanyName}>JUNO Software Systems Pvt. Ltd.</span>
      </div>

      <ul className={styles.menu}>
        
        <li
          className={styles.menuItem}
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button className={styles.menuButton}>
          <FaChevronDown />  About Us
          </button>
          {aboutOpen && (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>Our Story</li>
              <li className={styles.dropdownItem}>Team & Leadership</li>
              <li className={styles.dropdownItem}>Media & Events</li>
            </ul>
          )}
        </li>

        <li
          className={styles.menuItem}
          onMouseEnter={() => setProductOpen(true)}
          onMouseLeave={() => setProductOpen(false)}
        >
          <button className={styles.menuButton}>
          <FaChevronDown />  Product 
          </button>
          {productOpen && (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>Juno Campus</li>
              <li className={styles.dropdownItem}>Offerings</li>
              <li className={styles.dropdownItem}>Architecture</li>
            </ul>
          )}
        </li>

        <li className={styles.menuButton}>Clientele</li>
        
        <li>
          <button className={styles.contactButton}>Request a Demo</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
