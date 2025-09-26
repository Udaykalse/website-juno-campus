import React from "react";
import styles from "./Partnerships.module.css";

import p1 from "./../../assets/p1.png";
import p2 from "./../../assets/p2.png";
import p3 from "./../../assets/p3.png";
import p21 from "./../../assets/p2-1.png";
import p22 from "./../../assets/p2-2.png";
import p23 from "./../../assets/p2-3.png";
import p24 from "./../../assets/p2-4.png";
import p31 from "./../../assets/p3-1.png";
import p32 from "./../../assets/p3-2.png";
import p33 from "./../../assets/p3-3.png";
import p41 from "./../../assets/p4-1.png";
import p42 from "./../../assets/p4-2.png";
import p43 from "./../../assets/p4-3.png";
import p44 from "./../../assets/p4-4.png";

function Partnerships() {
  return (
    <div className={styles.partnershipsSection}>
      <div className={styles.leftContent}>
        <h2>
          CHANGEMAKING <br /> PARTNERSHIPS
        </h2>
        <p>game-changing results</p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardsColumn}>
          <div className={styles.card}><img src={p1} alt="p1" /></div>
          <div className={styles.card}><img src={p2} alt="p2" /></div>
          <div className={styles.card}><img src={p3} alt="p3" /></div>
        </div>

        <div className={styles.cardsColumn}>
          <div className={styles.card}><img src={p21} alt="p21" /></div>
          <div className={styles.card}><img src={p22} alt="p22" /></div>
          <div className={styles.card}><img src={p23} alt="p23" /></div>
          <div className={styles.card}><img src={p24} alt="p24" /></div>
        </div>

        <div className={styles.cardsColumn}>
          <div className={styles.card}><img src={p31} alt="p31" /></div>
          <div className={styles.card}><img src={p32} alt="p32" /></div>
          <div className={styles.card}><img src={p33} alt="p33" /></div>
        </div>

        <div className={styles.cardsColumn}>
          <div className={styles.card}><img src={p41} alt="p41" /></div>
          <div className={styles.card}><img src={p42} alt="p42" /></div>
          <div className={styles.card}><img src={p43} alt="p43" /></div>
          <div className={styles.card}><img src={p44} alt="p44" /></div>
        </div>
      </div>
    </div>
  );
}

export default Partnerships;
