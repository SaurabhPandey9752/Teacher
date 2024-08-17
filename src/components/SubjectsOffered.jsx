import React, { useState } from 'react';
import styles from './SubjectsOffered.module.css';

const SubjectsOffered = () => {
  const [mathExpanded, setMathExpanded] = useState(false);
  const [codingExpanded, setCodingExpanded] = useState(false);

  const toggleMath = () => setMathExpanded(!mathExpanded);
  const toggleCoding = () => setCodingExpanded(!codingExpanded);

  return (
    <section className={styles.section} id="subjects" aria-label="Subjects Offered">
      <div className={styles.container}>
        <p className={styles.subtitle}>Subjects Offered</p>
        <h2 className={styles.title}>Pick A Subject To Get Started</h2>

        <ul className={styles.gridList}>
          {/* Mathematics */}
          <li>
            <div className={styles.subjectCard}>
              <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                <img src="/p.png" width="370" height="220" alt="Mathematics" className={styles.imgCover} />
              </figure>

              <div className={styles.cardContent}>
                <span className={styles.badge}>Mathematics</span>
                <h3 className={styles.cardTitle}>Grade 6th to 12th: All Curriculums</h3>
                <p className={styles.cardDescription}>
                  Clear and interesting lessons for all curriculums including CBSE/ICSE/IGCSE/IB, American Curriculum.
                  {mathExpanded && (
                    <span className={styles.expandedText}>
                      <br /><br />
                      I am offering to cover the entire CBSE/ICSE Class 10th and 12th Maths syllabus within 50 days. I will thoroughly
                      explain each topic and provide notes and assignments. If you need someone to complete the syllabus in less time, feel free to contact me. Please note that this is a crash course and will be separate from regular classes, so the fees will differ for this 50-day program. The course will be conducted in 1-hour sessions, not at an accelerated pace.
                      <br /><br />
                      In addition, I offer separate sessions for Pre-Algebra, Algebra 1, 2, and 3, Geometry, and Calculus at all levels.
                    </span>
                  )}
                </p>
                <button className={styles.readMoreBtn} onClick={toggleMath}>
                  {mathExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </li>

          {/* Coding */}
          <li>
            <div className={styles.subjectCard}>
              <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                <img src="c.png" width="370" height="220" alt="Coding" className={styles.imgCover} />
              </figure>

              <div className={styles.cardContent}>
                <span className={styles.badge}>Coding</span>
                <h3 className={styles.cardTitle}>Python, SQL, Web Development</h3>
                <p className={styles.cardDescription}>
                  Learn coding from basics to advanced, including Python, SQL, and Web Development with HTML/CSS.
                  {codingExpanded && (
                    <span className={styles.expandedText}>
                      <br /><br />
                      I also offer specialized training in Data Analytics, and interactive coding lessons for kids.
                      My teaching style is clear, patient, and flexible, making learning fun and easy for students of all ages.
                    </span>
                  )}
                </p>
                <button className={styles.readMoreBtn} onClick={toggleCoding}>
                  {codingExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </li>
        </ul>

        
      </div>
    </section>
  );
};

export default SubjectsOffered;
