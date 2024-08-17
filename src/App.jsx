import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import HeroContent from "./components/HeroContent";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import StatsSection from "./components/StatsSection";
import SubjectsOffered from "./components/SubjectsOffered";
import Subjects from "./components/Subjects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-y-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* <HeroContent/>] */}
        <div className="my-20 mx- rounded-sm">
        <About />
        </div>
        <Services/>
        <SubjectsOffered/>
        <Subjects/>
        {/* <StatsSection/> */}
        <Experience />
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Testimonials/> */}
        {/* <Feedbacks /> */}

        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
