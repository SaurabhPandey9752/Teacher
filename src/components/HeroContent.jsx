import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../utils/motion';

const HeroContent = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Mathematics', 'Coding', 'SQL', 'Science'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:mt-40 w-full z-[20] px-6 md:px-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start md:m-auto md:px-24">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-10 text-4xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold">Md Abdal Khan</h3>
          <h3 className="text-[1.4rem] md:text-[1.8rem] font-bold">I Teach <span className="multiple-text text-[#0ef]"></span></h3>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-1 max-w-[600px]"
        >
          Independent tutor with 3+ years of experience in Mathematics, Coding, SQL, and Science. I tailor lessons to each student’s needs for effective learning.
        </motion.p>

        <motion.a
          href='/Saurabh_s_Resume.pdf'
          variants={slideInFromLeft(1)}
          className=" py-2 px-1 bg-blue-500 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Biography
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mb-10 md:mb-0"
      >
        <img
          src="/Abdal.png"
          alt="work icons"
          style={{
            width: "340px",
            height: "340px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            margin: "30px",
            boxShadow: "0 5px 5px 5px rgba(13, 110, 253, 0.2)",
            animation: "animate 5s ease-in-out infinite",
            transition: "all 1s ease-in-out",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
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

      {/* <div className="w-[40px] hidden md:block fixed bottom-0 right-[20px] lg:right-[25px] z-10 text-primaryText" style={{ opacity: 1 }}>
        <div className="flex flex-col items-center relative">
          <a href="mailto:tapesh.dua420@gmail.com" rel="noopener noreferrer" target="_blank" className="font-mono text-sm my-[20px] mx-auto p-[10px] tracking-widest transition hover:-translate-y-[5px] duration-300 text-secondaryText hover:text-themeBlue" style={{ writingMode: "vertical-rl", color:"#fff" }}>
            pandeysaurabh9752@gmail.com
          </a>
          <div className="block w-[1px] h-[90px] mx-auto my-0 bg-white"></div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default HeroContent;
