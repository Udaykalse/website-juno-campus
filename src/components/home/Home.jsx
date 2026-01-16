import React from 'react'
import styles from './Home.module.css'
import { FaArrowRight } from 'react-icons/fa'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>
        Dominant Market Leader
      </h1>
      <h2 className={styles.subHeading}>
        In Automation of Education Institutions
      </h2>
      <p className={styles.description}>
        500+ institutes | 10,00,000+ users | 10+ years
      </p>
      <a href="/contact-us" className={styles.btnPrimary}>
        Request a demo <FaArrowRight size={18} />
      </a>
    </div>
  )
}

export default Home
