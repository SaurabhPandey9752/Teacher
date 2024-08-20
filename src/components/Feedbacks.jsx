import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";

// Replace with your styles or import them from the appropriate location
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  rating,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-gray-800 p-6 md:p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[30px] md:text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[14px] md:text-[18px]">
        {testimonial}
      </p>

      <div className="mt-4 md:mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[14px] md:text-[16px]">
            <span className="text-blue-400">@</span> {name}
          </p>
          <p className="mt-1 text-gray-400 text-[12px]">
            {designation} of {company}
          </p>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor="#ffd700"
            edit={false} // Makes the rating non-editable
          />
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  // Calculate total number of reviews and average rating
  const totalReviews = testimonials.length;
  const averageRating =
    testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) /
    totalReviews;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "white",
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></div>
    ),
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          <p className="text-white text-[14px] md:text-[18px] mt-4 mb-10">
            {totalReviews} Reviews - Average Rating: {averageRating.toFixed(1)}{" "}
            <ReactStars
              count={5}
              value={averageRating}
              isHalf={true}
              size={24}
              activeColor="#ffd700"
              edit={false} // Non-editable average star rating
            />
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={index} index={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
