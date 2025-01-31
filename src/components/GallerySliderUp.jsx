import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.jpg';
import lens1 from '../assets/lens1.png';
import './GallerySliderUP.css';

const galleryImages = [
  image1,
  image1,
  image1,
  image1,
];

const GallerySliderUp = () => {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Simulate a 2-second loading period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="gallery-slider-container"
      style={{
        backgroundImage: `url(${lens1})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        color: "white",
        padding: "20px 0",
      }}
    >
      {loading ? (
        // Horizontal Skeleton Loader
        <div
          className="skeleton-loader-horizontal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            gap: "20px",
          }}
        >
          {Array(3) // Show 3 horizontal skeleton cards
            .fill()
            .map((_, index) => (
              <div
                key={index}
                style={{
                  flex: "1",
                  height: "140px",
                //   width:"100px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  animation: "pulse 1.5s infinite",
                }}
              ></div>
            ))}
        </div>
      ) : (
        // Actual Slider
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} style={{ padding: '10px' }}>
              <img
                src={image}
                alt={`gallery ${index}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default GallerySliderUp;
