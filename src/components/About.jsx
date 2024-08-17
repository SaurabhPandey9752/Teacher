import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`${styles.about} ${styles.background2}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.dots}>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
          </div>

          <div className={`${styles.content} ${styles.mtop}`}>
            <div className={`${styles.items} ${styles.mtop}`}>
              <div className={styles.box}>
                <div className={styles.number}>
                  <h5>90+</h5>
                </div>
                <div className={styles.text}>
                  <h3>Happy Students</h3>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.number}>
                  <h5>100+</h5>
                </div>
                <div className={styles.text}>
                  <h3>Projects Done</h3>
                </div>
              </div>
            </div>
            <div className={`${styles.items} ${styles.mtop}`}>
              <div className={styles.box}>
                <div className={styles.number}>
                  <h5>15+</h5>
                </div>
                <div className={styles.text}>
                  <h3>Projects in Progress</h3>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.number}>
                  <h5>500+</h5>
                </div>
                <div className={styles.text}>
                  <h3>Working Hours</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.heading}>
            <div className={`${styles.heading_top} ${styles.flex}`}>
              <div className={styles.line}></div>
              <div className={`${styles.line} ${styles.line2}`}></div>
              <i className="fas fa-circle"></i>
              <h3 className='text-[24px] mt-2'>About Me</h3>
            </div>
            <div className={styles.heading_bottom}>
              <h2><span>Unleash Your Creativity</span></h2>
            </div>
            <h4 className={`${styles.descriptionText}`}>A Lead Associate Professor in Machine Learning with 5+ Years of Experience.</h4>
          </div>
          <p className={`${styles.descriptionText}`}>Currently, I am leading two projects and have published numerous papers in internationally renowned conference journals.</p>
          <button className={`${styles.btn2} ${styles.btn3}`}>Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
