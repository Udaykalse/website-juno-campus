import React from 'react'
import styles from './Features.module.css'
import AcademicImg from './../../assets/AcademicImg.png' 
import AutomationImg from './../../assets/AutomationImg.png'
import ConfigurableImg from './../../assets/ConfigurableImg.png'

function Features() {
  const cards = [
    {
      img: AcademicImg,
      title: "Academic DNA",
      desc: "Developed by tech-savvy academicians and educationists with education domain experience running over 100 years, JUNO Campus has absolutely no match when it comes to automating Academics."
    },
    {
      img: AutomationImg,
      title: "End-to-End Automation",
      desc: "One Stop Solution providing complete automation using One Application and One Database."
    },
    {
      img: ConfigurableImg,
      title: "Configurable Frameworks",
      desc: "Our fully configurable structure delivers Go-Live in 1-2 months, does away with all post implementation costs and related wait time, and ensures break-even in less than a year."
    }
  ]

  return (
    <div className={styles.featured_all}>
      <div className={styles.featured_wrap}>
        {cards.map((card, index) => (
          <div key={index} className={styles.featured_box}>
            <div className={styles.featured_img}>
              <img src={card.img} alt={card.title} />
            </div>
            <div className={styles.featured_desc}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
