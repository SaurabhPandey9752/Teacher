import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

function Contact() {
  // Inline Button Component
  const Button = ({ text, link }) => (
    <a href={link} className={styles.btn}>
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
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className={styles.contactCta}>
        <Button link="mailto:kishansheth21@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
