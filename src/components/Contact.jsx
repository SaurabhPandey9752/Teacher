import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

function Contact() {
  // Inline Button Component with WhatsApp Icon
  const Button = ({ text, link, icon }) => (
    <a href={link} className={styles.btn} target="_blank" rel="noopener noreferrer">
      {icon}
      {text}
    </a>
  );

  return (
    <motion.div
      className={styles.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className={styles.contactTitle}>What&apos;s Next?</h2>
      <h2 className={styles.contactSubTitle}>Get In Touch</h2>
      <p className={styles.contactText}>
        Whether you need help with math, are preparing for competitive exams, or want to learn coding, I am here to guide you. Let's start this learning journey together and reach your academic and professional goals.
      </p>
      <div className={styles.contactCta}>
        <Button
          link="https://wa.me/7763973938"
          text="Contact Me"
          icon={<FaWhatsapp size={20} />} // WhatsApp icon inside the button
        />
      </div>
    </motion.div>
  );
}

export default Contact;
