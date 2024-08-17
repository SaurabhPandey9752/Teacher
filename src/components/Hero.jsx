import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../utils/motion';
import { styles } from "../styles";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Mathematics', 'Coding', 'SQL', 'Science'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto pt-24">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#20C863]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center justify-center w-full z-[10] px-6 md:px-0"
        >
          <div className="h-full w-full flex flex-col gap-5 justify-center text-start md:m-auto md:px-24">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 text-4xl md:text-6xl font-bold text-white max-w-[600px]"
            >
              <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold">Md Abdal Khan</h3>
              <h3 className="text-[1.4rem] md:text-[1.8rem] font-bold">
                I Teach <span className="multiple-text text-[#20C863]"></span>
              </h3>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-base md:text-lg text-gray-400 my-1 max-w-[600px]"
            >
              Independent tutor with 3+ years of experience in Mathematics, Coding, SQL, and Science. I tailor lessons to each student’s needs for effective learning.
            </motion.p>

            <motion.a
            href="/Saurabh_s_Resume.pdf"
            variants={slideInFromLeft(1)}
             className="py-3 px-6 bg-[#257e49] hover:bg-[#1aa751] text-center text-white cursor-pointer rounded-lg max-w-[220px] transition-all duration-300"
              >
             Biography
            </motion.a>

          </div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center mb-10 md:mb-0"
          >
            <img
              src="/43.png"
              alt="Abdal"
              style={{
                width: '340px',
                height: '340px',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                margin: '30px',
                boxShadow: '0 5px 5px 5px rgba(13, 110, 253, 0.2)',
                animation: 'animate 5s ease-in-out infinite',
                transition: 'all 1s ease-in-out',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              }}
            />
            <style jsx>{`
              @keyframes animate {
                0%, 100% {
                  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
                50% {
                  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
