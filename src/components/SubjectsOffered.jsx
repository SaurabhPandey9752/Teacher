import React, { useState } from 'react';
import styles from './SubjectsOffered.module.css';

const SubjectsOffered = () => {
  const [mathExpanded, setMathExpanded] = useState({
    grade: false,
    undergrad: false
  });
  const [codingExpanded, setCodingExpanded] = useState({
    python: false,
    other: false
  });

  const toggleMath = (key) => setMathExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleCoding = (key) => setCodingExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className={styles.section} id="subjects" aria-label="Subjects Offered">
      <div className={styles.container}>
        <p className={styles.subtitle}>Subjects Offered</p>
        <h2 className={styles.title}>Pick A Subject To Get Started</h2>

        <div className={styles.subjectCategory}>
          <h3 className={styles.categoryTitle}>Mathematics</h3>
          <ul className={styles.gridList}>
            {/* Mathematics - Grade 6 to 12 */}
            <li>
              <div className={styles.subjectCard}>
                <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                  <img src="/p.png" width="370" height="220" alt="Mathematics Grade 6-12" className={styles.imgCover} />
                </figure>

                <div className={styles.cardContent}>
                  <span className={styles.badge}>Mathematics</span>
                  <h3 className={styles.cardTitle}>Grade 6th to 12th: All Curriculums</h3>
                  <p className={styles.cardDescription}>
                    Clear and interesting lessons for all curriculums including CBSE/ICSE/IGCSE/IB, American Curriculum.
                    {mathExpanded.grade && (
                      <span className={styles.expandedText}>
                        <br /><br />
                        I am offering to cover the entire CBSE/ICSE Class 10th and 12th Maths syllabus within 50 days. I will thoroughly
                        explain each topic and provide notes and assignments. If you need someone to complete the syllabus in less time, feel free to contact me. Please note that this is a crash course and will be separate from regular classes, so the fees will differ for this 50-day program. The course will be conducted in 1-hour sessions, not at an accelerated pace.
                        <br /><br />
                        In addition, I offer separate sessions for Pre-Algebra, Algebra 1, 2, and 3, Geometry, and Calculus at all levels.
                      </span>
                    )}
                  </p>
                  <button className={styles.readMoreBtn} onClick={() => toggleMath('grade')}>
                    {mathExpanded.grade ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </li>

            {/* Mathematics - Undergraduate */}
            <li>
              <div className={styles.subjectCard}>
                <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                  <img src="/math.png" width="370" height="220" alt="Undergraduate Mathematics" className={styles.imgCover} />
                </figure>

                <div className={styles.cardContent}>
                  <span className={styles.badge}>Mathematics</span>
                  <h3 className={styles.cardTitle}>Undergraduate Math & Competitive Exams</h3>
                  <p className={styles.cardDescription}>
                    Advanced topics in calculus, algebra, and linear algebra. Preparation for competitive exams like GRE and SAT.
                    {mathExpanded.undergrad && (
                      <span className={styles.expandedText}>
                        <br /><br />
                        I offer tailored guidance for undergraduate mathematics courses, including Advanced Calculus, Linear Algebra,
                        Differential Equations, and Discrete Mathematics. In addition, I provide comprehensive training for competitive
                        exams such as GRE and SAT. Let me help you understand the intricate concepts and develop problem-solving skills.
                        <br /><br />
                        My sessions are interactive, aiming to strengthen your foundation and boost your performance in exams.
                      </span>
                    )}
                  </p>
                  <button className={styles.readMoreBtn} onClick={() => toggleMath('undergrad')}>
                    {mathExpanded.undergrad ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.subjectCategory}>
          <h3 className={styles.categoryTitle}>Coding</h3>
          <ul className={styles.gridList}>
            {/* Coding - Python for Kids */}
            <li>
              <div className={styles.subjectCard}>
                <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                  <img src="/kids.png" width="370" height="220" alt="Python Programming for Kids" className={styles.imgCover} />
                </figure>

                <div className={styles.cardContent}>
                  <span className={styles.badge}>Coding</span>
                  <h3 className={styles.cardTitle}>Python Programming for Kids</h3>
                  <p className={styles.cardDescription}>
                    Teaching Python in a fun and interactive way for young learners. Introduction to programming concepts and basic coding skills.
                    {codingExpanded.python && (
                      <span className={styles.expandedText}>
                        <br /><br />
                        I offer engaging Python programming lessons designed specifically for kids. Students will learn the basics of coding
                        through interactive projects and games. We will cover topics such as Python syntax, loops, and conditionals, and work
                        on simple programs to build a strong foundation in programming. This course aims to make learning programming fun and accessible.
                        <br /><br />
                        Additionally, we explore Scratch programming to introduce more complex concepts in a visual and intuitive manner.
                      </span>
                    )}
                  </p>
                  <button className={styles.readMoreBtn} onClick={() => toggleCoding('python')}>
                    {codingExpanded.python ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </li>

            {/* Coding - Other Languages */}
            <li>
              <div className={styles.subjectCard}>
                <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                  <img src="/db.png" width="370" height="220" alt="Other Programming Languages" className={styles.imgCover} />
                </figure>

                <div className={styles.cardContent}>
                  <span className={styles.badge}>Coding</span>
                  <h3 className={styles.cardTitle}>Other Programming Languages</h3>
                  <p className={styles.cardDescription}>
                    Tutorials for languages like Java, C++, JavaScript, and more. For all skill levels.
                    {codingExpanded.other && (
                      <span className={styles.expandedText}>
                        <br /><br />
                        Expand your programming skills with tutorials in various languages including Java, C++, JavaScript, and more.
                        Whether you're a beginner or looking to advance your skills, these sessions are tailored to meet your needs. 
                        I provide a solid foundation in each language, along with practical projects and problem-solving techniques.
                        <br /><br />
                        Let me help you become proficient in multiple programming languages and enhance your coding portfolio.
                      </span>
                    )}
                  </p>
                  <button className={styles.readMoreBtn} onClick={() => toggleCoding('other')}>
                    {codingExpanded.other ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubjectsOffered;
