import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.headingTop}>
            <div className={styles.line}></div>
            <h3 className={styles.centeredText}>My Services</h3>
            <div className={`${styles.line} ${styles.line2}`}></div>
          </div>
          <div className={styles.headingBottom}>
            <h2><span>What Can I Do Best?</span></h2>
          </div>
        </div>

        <div className={`${styles.content} ${styles.grid}`}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/machine-learning.png" alt="Mathematics Instruction" />
            </div>
            <div className={styles.text}>
              <h3>Mathematics Instruction</h3>
              <hr />
              <p>Expert in teaching Math from basics to advanced, covering CBSE, ICSE, and American curriculums including Pre-Algebra, Algebra, and Calculus.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/safety-collection-place.png" alt="Competitive Exam Preparation" />
            </div>
            <div className={styles.text}>
              <h3>Competitive Exam Prep</h3>
              <hr />
              <p>Guidance for Olympiads, JEE Mains, SAT, and more with strategic insights and rigorous practice.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/learning.png" alt="Mentorship and Guidance" />
            </div>
            <div className={styles.text}>
              <h3>Mentorship & Guidance</h3>
              <hr />
              <p>Personalized teaching and career guidance to help you excel academically and professionally.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/depth-effect.png" alt="Coding and Data Analytics" />
            </div>
            <div className={styles.text}>
              <h3>Coding & Data Analytics</h3>
              <hr />
              <p>Python and coding for beginners, plus data analysis with SQL, Power BI, and Tableau.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
