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
              <img src="https://img.icons8.com/ios/50/000000/machine-learning.png" alt="Machine Learning" />
            </div>
            <div className={styles.text}>
              <h3>Machine Learning</h3>
              <hr />
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/safety-collection-place.png" alt="Social Network Analysis" />
            </div>
            <div className={styles.text}>
              <h3>Social Network Analysis</h3>
              <hr />
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/learning.png" alt="Deep Learning" />
            </div>
            <div className={styles.text}>
              <h3>Deep Learning</h3>
              <hr />
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src="https://img.icons8.com/ios/50/000000/depth-effect.png" alt="Natural Language Processing" />
            </div>
            <div className={styles.text}>
              <h3>Natural Language Processing</h3>
              <hr />
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
