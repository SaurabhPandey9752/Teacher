import React from 'react';
import styles from './Subjects.module.css';

const mathsSubjects = [
  "Maths Beginner-Expert",
  "CAT Maths",
  "Linear Algebra Beginner-Expert",
  "Number Theory Beginner-Expert",
  "Engineering Mathematics (B.Tech)",
  "Modern Algebra Beginner-Expert",
  "Math & Reasoning Beginner-Expert",
  "Math (ICSE) Beginner-Expert",
  "CBSE Math Beginner-Expert",
  "Math (11th)",
  "Math (12th)",
  "Math (class 10)"
];

const codingSubjects = [
  "SQL Beginner-Expert",
  "Data Analyst Beginner-Expert",
  "Python for Beginners",
  "Computer (CBSE) Beginner-Expert",
  "CLAT Mathematics",
  "Computer (ICSE) Beginner-Expert",
  "Coding & Programming Beginner-Expert"
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
