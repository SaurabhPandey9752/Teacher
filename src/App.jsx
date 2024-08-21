import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import HeroContent from "./components/HeroContent";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import StatsSection from "./components/StatsSection";
import SubjectsOffered from "./components/SubjectsOffered";
import FeedbackButton from "./components/FeedbackButton";
import Subjects from "./components/Subjects";
import Footer from "./components/Footer";
import ReviewManager from "./components/ReviewManager";
import ContactButton from "./components/ContactButton"; // Import the ContactButton component

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-y-hidden'>
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <HeroContent/>
        </div>
        
        <div className="my-5 mx- rounded-sm">
          <About />
        </div>
        <Services/>
        <SubjectsOffered/>
        <Subjects/>
        <Experience />
        {/* <ReviewManager/> */}
        <Feedbacks />
        <FeedbackButton/>

        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer/>
        <ContactButton /> {/* Include the ContactButton component */}
      </div>
    </BrowserRouter>
  );
}

export default App;
