// LogoSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSlider = () => {
  // Slider settings
  const settings = {
    infinite: true,            // Enables infinite looping
    speed: 900,                // Duration of the slide transition (in milliseconds)
    slidesToShow: 4,           // Number of slides to show at once
    slidesToScroll: 1,         // Number of slides to scroll per click
    autoplay: true,           // Enables automatic sliding
    autoplaySpeed: 0,         // Set to 0 for continuous scrolling effect
    arrows: false,            // Hides navigation arrows
    pauseOnHover: false,       // Disable pause on hover for continuous effect
    cssEase: 'linear',        // Ensure smooth scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Create an array of duplicated logos
  const logos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <div className="py-10 px-4 mr-16 ml-16 overflow-hidden">
      <Slider {...settings} className="logo-slider">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={logo} alt={`Client Logo ${index + 1}`} className="h-10" />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-slide {
          transition: transform 0.5s linear;
        }

        .slick-track {
          display: flex;
          align-items: center;
        }

        .slick-list {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
