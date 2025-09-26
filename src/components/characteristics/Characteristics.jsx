import React from "react";
import styles from "./Characteristics.module.css";

import C1 from "./../../assets/C1.png";
import C2 from "./../../assets/C2.png";
import C3 from "./../../assets/C3.png";
import C4 from "./../../assets/C4.png";
import C5 from "./../../assets/C5.png";
import C6 from "./../../assets/C6.png";

const characteristicsData = [
  {
    img: C1,
    title: "A single source of truth",
    desc: "Our integrated data, Intelligent Data Pipeline facilitates game changing visibility."
  },
  {
    img: C2,
    title: "Built to adapt",
    desc: "JUNO Campus is designed to adopt changes, and puts power in the hand of business owners."
  },
  {
    img: C3,
    title: "Configurable",
    desc: "JUNO Campus modules are configurable at various levels. The solution can adapt to your RULE-BOOKs by the means of configuration."
  },
  {
    img: C4,
    title: "Wholesome Solution",
    desc: "Move beyond multiple piece meal solutions, for fully integrated, end to end digitization journey with JUNO campus."
  },
  {
    img: C5,
    title: "Gel’s well with others",
    desc: "JUNO Campus can shake hands with legacy applications for push and pull of data. No compromises."
  },
  {
    img: C6,
    title: "Total Support",
    desc: "Multi pronged support through dedicated support personnel, phone, whatsapp and email."
  }
];

function Characteristics() {
  return (
    <div className={styles.characteristicsSection}>
      <div className={styles.heading}>
        <h1>UNIQUE CHARACTERISTICS</h1>
        <p>
          Our unique set of characteristics that makes us stand <br /> out from the competitors
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {characteristicsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characteristics;
