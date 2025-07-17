import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/assets/images/slide1.jpg",
    subhead: "Your Fit. Your Flow.",
    head: "Wear What |Moves You",
    text: "Timeless styles for every body. No labels. |Just comfort and confidence.",
    link: "/products",
  },
  {
    image: "/assets/images/slide2.jpg",
    subhead: "Your Fit. Your Flow.",
    head: "Move Freely |Live Fully",
    text: "Embrace the power of effortless fashion. |Confidence comes from comfort.",
    link: "/products",
  },
  {
    image: "/assets/images/slide3.jpg",
    subhead: "Your Fit. Your Flow.",
    head: "Be Bold |Be You",
    text: "Every look is a statement. |Define your own style.",
    link: "/products",
  },
];

function HeroSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="heroSlider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="heroSlide_Box" key={index}>
            <div className="slide_bg">
              <img src={slide.image} alt="Hero Slide" className="img-fluid w-100" />
            </div>
            <div className="slide_content text-center">
              <p className="text-uppercase slide_subhead">{slide.subhead}</p>
              <p className="text-uppercase slide_head">
                {slide.head.split("|").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < slide.head.split("|").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <p className="slide_text">
                {slide.text.split("|").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < slide.text.split("|").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <Link
                to={slide.link}
                className="text-decoration-none text-uppercase text-center common_btn"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
