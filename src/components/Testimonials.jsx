import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css"; // Import the CSS module

const testimonials = [
  {
    id: 1,
    quote: "Teachers have three loves: love of learning, love of learners, and the love of bringing the first two loves together.",
    name: "Naem",
  },
  {
    id: 2,
    quote: "I am not a teacher, but an awakener.",
    name: "Robert Frost",
  },
  {
    id: 3,
    quote: "They may forget what you said but they will not forget how you made them feel.",
    name: "Carl Buechner",
  },
];

const FeedbackCard = ({ quote, name }) => (
  <div className={`${styles.item} ${styles.mtop}`}>
    <i className="fas fa-quote-right"></i>
    <div className={styles.text}>
      <p>{quote}</p>
      <h4>{name}</h4>
    </div>
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
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
    <section className={styles.Testimonials}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <div className={styles.heading_top}>
              <div className={styles.line}></div>
              <div className={`${styles.line} ${styles.line2}`}></div>
              <i className="fas fa-circle"></i>
              <h3>Testimonials</h3>
            </div>
            <div className={styles.heading_bottom}>
              <h2><span>Happy Students </span></h2>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <FeedbackCard key={testimonial.id} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
