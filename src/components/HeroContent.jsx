import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../utils/motion';
import ReactStars from "react-rating-stars-component";

const HeroContent = () => {
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

  const averageRating = 4.85;
  const totalReviews = 200;

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center mt-0 z-10 mb-10 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-center md:text-left w-full max-w-screen-lg mx-auto z-10"
      >
        <div className="flex flex-col gap-5 justify-center text-start md:px-6 lg:px-12">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 mt-6 text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-xl "
          >
            <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold">Md Abdal Khan</h3>
            <h3 className="text-[1.4rem] md:text-[1.8rem] font-bold">
              I Teach <span className="multiple-text text-[#20C863]"></span>
            </h3>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm md:text-base lg:text-lg text-gray-300 my-1 max-w-xl mx-auto"
          >
            Independent tutor with 3+ years of experience in Mathematics, Coding, SQL, and Science. I tailor lessons to each student’s needs for effective learning.
          </motion.p>

          {/* Find Me On Section */}
          <motion.div
            variants={slideInFromLeft(1.2)}
            className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8 max-w-sm  lg:mb-1"
          >
            <h4 className="text-white text-lg md:text-xl font-semibold">Find me on:</h4>
            <div className="flex gap-4 justify-center md:justify-start items-center">
              {/* TeacherOn Image */}
              <a
                href="https://www.connectbud.com/viewProfile/MD-ABDAL-KHAN"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full h-full"
              >
                <img
                  src="/logo-DMCH9fmY.png"
                  alt="TeacherOn"
                  className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm md:text-base">ConnectBud</span>
                </div>
              </a>

              {/* ConnectBud Image */}
              <a
                href="https://www.teacheron.com/tutor/8aKh?r=8aKh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full h-full"
              >
                <img
                  src="/viewMyProfile.png"
                  alt="ConnectBud"
                  className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm md:text-base">TeacherOn</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/md-abdal-khan-976192194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full h-full"
              >
                <img
                  src="/Linkedin.png"
                  alt="ConnectBud"
                  className="w-full h-full object- rounded-sm  shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm md:text-base">LinkedIn</span>
                </div>
              </a>
              
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex flex-col items-center justify-center mt-8 md:mt-0 mb-8 md:mb-0"
        >
          <img
            src="/43.png"
            alt="work icons"
            className="w-40 h-40 mt-[30px] md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-cover bg-center shadow-lg transition-all duration-500"
            style={{
              boxShadow: "0 5px 5px 5px rgba(13, 110, 253, 0.2)",
              animation: "animate 5s ease-in-out infinite",
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

          <div className="flex flex-col items-center justify-center mt-4 md:mt-6">
            <div className="flex items-center gap-2">
              <ReactStars
                count={5}
                value={averageRating}
                size={24}
                isHalf={true}
                activeColor="#ffd700"
                edit={false}
              />
              <span className="text-sm md:text-base lg:text-lg text-[#20C863] font-semibold">
                ({averageRating.toFixed(2)})
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroContent;
