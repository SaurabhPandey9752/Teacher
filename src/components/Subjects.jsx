import React from 'react';
import styles from './Subjects.module.css';

const subjectsList = [
  "Maths Beginner-Expert",
  "CAT Maths",
  "SQL Beginner-Expert",
  "SSC",
  "Linear Algebra Beginner-Expert",
  "Number Theory Beginner-Expert",
  "Engineering Mathematics (B.Tech)",
  "Modern Algebra Beginner-Expert",
  "Data Analyst Beginner-Expert",
  "Python for Beginners",
  "Math & Reasoning Beginner-Expert",
  "Math (ICSE) Beginner-Expert",
  "Computer (CBSE) Beginner-Expert",
  "CLAT Mathematics",
  "Computer (ICSE) Beginner-Expert",
  "CBSE Math Beginner-Expert",
  "Math (11th)",
  "Math (12th)",
  "Math (class 10)",
  "Coding & Programming Beginner-Expert"
];

const Subjects = () => {
  return (
    <section className={styles.subjectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Subjects Taught</h2>
        <ul className={styles.subjectsList}>
          {subjectsList.map((subject, index) => (
            <li key={index}>
              <button className={styles.glowOnHover}>
                {subject}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Subjects;
