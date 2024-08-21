import React from 'react';
import styles from './Subjects.module.css';

const mathsSubjects = [
  "CBSE Mathematics",
  "Pre-Algebra",
  "Algebra 1, 2, and 3",
  "Geometry",
  "Calculus",
  "Competitive Math",
  "Linear Algebra",
  "Number Theory",
  "Modern Algebra",
  "Ordinary and Partial Differential Equations"
];

const codingSubjects = [
  "Coding for Kids",
  "Python",
  "Scratch Programming",
  "SQL",
  "HTML/CSS/JavaScript"
];

const Subjects = () => {
  return (
    <section className={styles.subjectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Subjects Taught</h2>
        <div className={styles.subjectsWrapper}>
          <div className={styles.subjectsColumn}>
            <h3>Mathematics</h3>
            <ul className={styles.subjectsList}>
              {mathsSubjects.map((subject, index) => (
                <li key={index}>
                  <button className={styles.glowOnHover}>
                    {subject}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.subjectsColumn}>
            <h3>Coding & Programming</h3>
            <ul className={styles.subjectsList}>
              {codingSubjects.map((subject, index) => (
                <li key={index}>
                  <button className={styles.glowOnHover}>
                    {subject}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
