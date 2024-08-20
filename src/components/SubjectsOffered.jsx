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
                  <img src="/c.png" width="370" height="220" alt="Undergraduate Mathematics" className={styles.imgCover} />
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
            {/* Coding - Python */}
            <li>
              <div className={styles.subjectCard}>
                <figure className={`${styles.cardBanner} ${styles.imgHolder}`} style={{ '--width': 370, '--height': 220 }}>
                  <img src="/cd.png" width="370" height="220" alt="Python Coding" className={styles.imgCover} />
                </figure>

                <div className={styles.cardContent}>
                  <span className={styles.badge}>Coding</span>
                  <h3 className={styles.cardTitle}>Python Programming</h3>
                  <p className={styles.cardDescription}>
                    Learn Python from scratch, data analysis, and machine learning. Ideal for beginners and intermediate learners.
                    {codingExpanded.python && (
                      <span className={styles.expandedText}>
                        <br /><br />
                        I offer a comprehensive course for Python programming, covering fundamentals, data analysis, and machine learning.
                        The course is designed for beginners as well as intermediate learners who want to enhance their skills. We will
                        cover practical applications, libraries, and frameworks used in the industry. This is a hands-on course with lots of coding exercises and real-world projects.
                        <br /><br />
                        Additionally, I provide support for Python-based competitive programming and project-based learning.
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
