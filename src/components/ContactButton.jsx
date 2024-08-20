import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import an icon from react-icons
import styles from './ContactButton.module.css'; // Import the CSS module

const ContactButton = () => {
  return (
    <div className={styles.contactButtonWrapper}>
      <a href="/contact" className={styles.contactButton}>
        <FaPhone className={styles.icon} />
        <span className={styles.text}>Contact Us</span>
      </a>
    </div>
  );
};

export default ContactButton;
