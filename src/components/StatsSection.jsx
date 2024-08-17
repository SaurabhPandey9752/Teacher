import React from "react";
import styles from "./StatsSection.module.css";

const statsData = [
  { value: "29.3k", label: "Student Enrolled", color: "170, 75%, 41%" },
  { value: "32.4K", label: "Class Completed", color: "351, 83%, 61%" },
  { value: "100%", label: "Satisfaction Rate", color: "260, 100%, 67%" },
  { value: "354+", label: "Top Instructors", color: "42, 94%, 55%" },
];

const StatsSection = () => {
  return (
    <section className={styles.statsSection} aria-label="stats">
      <div className={styles.container}>
        <ul className={styles.gridList}>
          {statsData.map((stat, index) => (
            <li key={index}>
              <div
                className={styles.statsCard}
                style={{ "--color": stat.color }}
              >
                <h3 className={styles.cardTitle}>{stat.value}</h3>
                <p className={styles.cardText}>{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatsSection;
