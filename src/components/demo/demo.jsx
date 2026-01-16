import React from 'react';
import demoPng from './../../assets/Demo.png';
import styles from './demo.module.css';

function Demo() {
  return (
    <div className={styles.be_partner}>
      <div className={styles.wrap}>
        <div className={styles.partner_desc}>
          <h1>
            Let JUNO campus be your partner in <br /> your digitization journey...
          </h1>
          <p>
            In a rapidly changing world, your business needs more than a <br />
            technology vendor— a partner who understands academic <br />
            domain and who’s committed to your long-term success. <br />
            JUNO Campus is a partner worth having!
          </p>
          <a className={styles.btn_primary} href="/contact-us">
            Request a demo
          </a>
        </div>

        <div className={styles.partner_image}>
          <img src={demoPng} alt="be_partner" className={styles.img_fluid} />
        </div>
      </div>
    </div>
  );
}

export default Demo;
