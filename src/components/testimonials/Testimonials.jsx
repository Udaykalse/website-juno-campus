import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import styles from './Testimonials.module.css';

import T1 from './../../assets/T1.png';
import T2 from './../../assets/T2.png';
import T3 from './../../assets/T3.png';
import T4 from './../../assets/T4.png';
import T5 from './../../assets/T5.png';

function Testimonials() {
  const testimonials = [
    {
      img: T1,
      name: "Dr. Nanda Kumar",
      role: "Deputy Director- Clinical Research, MSRUAS Bangalore",
      text: "Domain expertise and cutting-edge technological capabilities from JUNO Campus enabled desirable administrative benefits in the form of a centralized system with a one-window solution specific to our need."
    },
    {
      img: T2,
      name: "Dr. GD Yadav",
      role: "Vice Chancellor ICT Mumbai",
      text: "I was pleased to find Exact match ERP solution that offers excellent value, as well as specific functionality that our business requires. Our relationship with JUNO Team is now over Five years."
    },
    {
      img: T3,
      name: "Dr. Manoj Tiwary",
      role: "Director NITIE, Mumbai",
      text: "JUNO Campus has been an excellent partner in the deployment of ERP system. From Development, implementation, training to service and support."
    },
    {
      img: T4,
      name: "Mr. Prasanth Prabhakaran",
      role: "ERP Head, IMT Group, Ghaziabad",
      text: "We are especially pleased with JUNO Campus involvement in the implementation process. We are glad to have chosen JUNO Campus as our ERP solution partner."
    },
    {
      img: T5,
      name: "Prof. Pardeep Kumar",
      role: "Professor and Chairman, Kurukshetra University",
      text: "IMT Group started their search for a competent ERP solution a few years ago. Correct fit academics solution is crucial for any business."
    }
  ];

  return (
    <div className={styles.juno_testimonial}>
      <div className={styles.heading}>
        <h1>TESTIMONIALS</h1>
        <p>Unconditional love from people who have used JUNO products.</p>
      </div>
     <div className={styles.swiperSlideDiv}>
       <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.testimonial_box}>
              <div className={styles.testimonial_image}>
                <img src={t.img} alt={t.name} />
              </div>

              <div className={styles.testimonial_content}>
                <div className={styles.testDiv}>
                  <p>{t.text}</p>
                  <div className={styles.designation}>
                    <h4>{t.name} :</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </div>
  );
}

export default Testimonials;
