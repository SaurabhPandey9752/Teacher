import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent", // Make content background transparent
        color: "#ecf0f1", // Light text color
      }}
      contentArrowStyle={{ borderRight: "7px solid #20C863" }} // Arrow with the green color
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#20C863] text-[24px] font-bold'>{experience.title}</h3> {/* Green color */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0, color: '#1aa751' }} // Slightly darker green for the company name
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#bdc3c7] text-[14px] pl-1 tracking-wider' // Light grayish text color for points
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#20C863]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#3b943b]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'> {/* Remove background color, keep the structure */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
