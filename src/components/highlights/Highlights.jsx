import React from 'react';
import styles from './Highlights.module.css';
import mainImage from './../../assets/key-highlights.png';
import keyHighlights from './../../assets/key-highlights.png.png'
import keyHighlights1 from './../../assets/key-highlights1.png';
import keyHighlights2 from './../../assets/key-highlights2.png';
import keyHighlights3 from './../../assets/key-highlights3.png';
import keyHighlights4 from './../../assets/key-highlights4.png';
import keyHighlights5 from './../../assets/key-highlights5.png';
import keyHighlights6 from './../../assets/key-highlights6.png';
import keyHighlights7 from './../../assets/key-highlights7.png';
import keyHighlights8 from './../../assets/key-highlights8.png';
import keyHighlights9 from './../../assets/key-highlights9.png';
import keyHighlights10 from './../../assets/key-highlights10.png';
import keyHighlights11 from './../../assets/key-highlights11.png';
import keyHighlights12 from './../../assets/key-highlights12.png';

const highlightsData = [
  { img: keyHighlights1, title: "End to End Digitization", desc: "Academic workflows, LMS, Administrative functionalities, collaboration & compliance." },
  { img: keyHighlights2, title: "Fully Integrated", desc: "Maps, modules & real-time data, to offer cutting edge analytics." },
  { img: keyHighlights3, title: "Seamless Data Pipelines", desc: "Intelligent Data Pipeline with multiple modules supporting vast data flows." },
  { img: keyHighlights4, title: "Configurable Frameworks", desc: "Pivot Easily to new norms with our Configurable frameworks." },
  { img: keyHighlights5, title: "Power to Adapt", desc: "Map your RULEBOOKs in our application without customization." },
  { img: keyHighlights6, title: "One Organisation One Solution", desc: "Providing complete automation using One Application & Database." },
  { img: keyHighlights7, title: "Intelligent Data Core", desc: "Manages huge amounts of data, for reporting, analytics, BI and AI Reports." },
  { img: keyHighlights8, title: "Academic DNA", desc: "Developed by Academicians with 100+ years’ experience." },
  { img: keyHighlights9, title: "Quick Implementation", desc: "Go-Live in less than 3 months, & ensure break-even within a year." },
  { img: keyHighlights10, title: "Best Practices", desc: "Access to Best Practices from 200+ institutes." },
  { img: keyHighlights11, title: "Game Changing Visibility", desc: "Designed to sustain multi-domain, multi-level education entities." },
  { img: keyHighlights12, title: "Compliance to Regulatory Bodies", desc: "Ready Data & analytics for regulatory compliance." },
];

function Highlights() {
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.mainImageWrapper}>
        <div className={styles.heading}>
          <h1>KEY 
            <br />HIGHLIGHTS</h1>
        </div>
        <img src={mainImage} alt="Key Highlights Main" />
        <img src={keyHighlights} alt="Key Highlights Main" className={styles.ballImage} />
      </div>

      <div className={styles.highlightsGrid}>
        {highlightsData.map((item, index) => (
          <div key={index} className={styles.keyBox}>
            <div className={styles.iconWrapper}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={styles.desc}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
