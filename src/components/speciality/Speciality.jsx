import React from 'react';
import Speciality from './../../assets/speciality.png';
import Speciality1 from './../../assets/Speiality1.png';
import Speciality2 from './../../assets/Speiality2.png';
import Speciality3 from './../../assets/Speiality3.png';
import Speciality4 from './../../assets/Speiality4.png';
import styles from './Speciality.module.css';

function SpecialityComponent() {
  return (
    <div className={styles.specialityContainer}>
      <div className={styles.imageWrapper}>
 <div className={styles.animating_img}>
         <img src={Speciality1} alt="Speciality 1" className={`img-fluid ${styles.subImage}`} />
        <img src={Speciality2} alt="Speciality 2" className={`img-fluid ${styles.subImage}`} />
        <img src={Speciality3} alt="Speciality 3" className={`img-fluid ${styles.subImage}`} />
        <img src={Speciality4} alt="Speciality 4" className={`img-fluid ${styles.subImage}`} />
 </div>
        <img src={Speciality} alt="Speciality Main" className={`img-fluid ${styles.mainImage}`} />
      </div>
      <div className={styles.textWrapper}>
        <h1>JUNO CAMPUS SPECIALITY</h1>
        <h4>Move beyond multiple piece meal solutions.</h4>
        <p>Leave the limitations of multiple legacy software behind. Start with a fully integrated, end-to-end digitization journey with JUNO campus.</p>
        <p>Our configurable frameworks are designed to adopt changes, and put power in the hands of business owners.</p>
        <a className={styles.demoButton} href="/contact-us">
          Request a demo
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="ms-4" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default SpecialityComponent;
