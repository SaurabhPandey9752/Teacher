import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

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
  const experiences = [
    {
      title: "Independent Tutor",
      company_name: "Connectbud",
      icon: "/logo-DMCH9fmY.png", // Replace with actual icon path
      iconBg: "#E6DEDD",
      date: "Jan 2022 – Present",
      points: [
        "I take classes for NRI (Non-Resident Indian) children residing in the USA.",
        "Here's my ConnectBud Profile for your reference:",
        <a 
        href="https://www.connectbud.com/viewProfile/MD-ABDAL-KHAN" 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-[#20C863] underline'
      >
      ConnectBuds
      </a>,
      ],
    },
    {
      title: "Independent Advisor",
      company_name: "Microsoft",
      icon: "/microsoft.png", // Replace with actual icon path
      iconBg: "#E6DEDD",
      date: "Jan 2022 – Sept 2023",
      points: [
        "Helped Microsoft customers with their queries related to Microsoft 365 Home and Microsoft 365 Business apps.",
        "Provided guidance on utilizing these tools to enhance productivity and collaboration.",
        "Here's proof of my work: ",
        <a 
          href="https://answers.microsoft.com/en-us/profile/8f305a9c-4eb9-48cf-903e-b0b2e975cc69" 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-[#20C863] underline'
        >
          Microsoft Advisor Proof
        </a>,
      ],
    },
  ];

  const education = [
    {
      title: "Integrated MSC. in Mathematics and Computer Science",
      institution: "BIT MESRA, Ranchi",
      date: "Jun 2018 – May 2023",
      points: [
        "Focused on Mathematics and Computer Science with comprehensive coursework and practical applications.",
        "Worked on various projects related to software development, data analysis, and algorithm design.",
      ],
      icon: "/Birla.png", // Replace with actual logo path
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#20C863]`}>
          My Journey So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#3b943b]`}>
          Work Experience & Education
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <h2 className='text-2xl font-bold text-center text-[#3b943b]'>Education</h2>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={`education-${index}`}
              contentStyle={{
                background: "transparent", // Make content background transparent
                color: "#ecf0f1", // Light text color
              }}
              contentArrowStyle={{ borderRight: "7px solid #20C863" }} // Arrow with the green color
              date={edu.date}
              iconStyle={{ background: "#E6DEDD" }} // Icon background color
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={edu.icon}
                    alt={edu.institution}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
            >
              <div>
                <h3 className='text-[#20C863] text-[24px] font-bold'>{edu.title}</h3>
                <p
                  className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0, color: '#1aa751' }}
                >
                  {edu.institution}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {edu.points.map((point, index) => (
                  <li
                    key={`education-point-${index}`}
                    className='text-[#bdc3c7] text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <h2 className='text-2xl font-bold text-center text-[#3b943b] mt-20'>Work Experience</h2>
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
