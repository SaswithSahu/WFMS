
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const ImageCarousel = () => {
  const images = [
    'https://img.freepik.com/free-photo/top-view-trash-cooking-concept_23-2149056487.jpg',
    'https://st3.depositphotos.com/1022214/14081/i/450/depositphotos_140817282-stock-photo-man-throwing-leftovers-to-the.jpg',
    'https://media.istockphoto.com/id/1355684614/photo/throwing-away-leftover-food-in-trash.jpg?s=612x612&w=0&k=20&c=gQz4ZhNhCeajZDWXTiAPftCzI4SYd0ueYKWGEYLqhhA='

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="data-container">
                <h1>
                    Welcome to our Food Waste Management System!
                </h1>
                <p>
                Welcome to our Food Waste Management System, a cutting-edge solution designed to revolutionize the way we handle food resources. In a world grappling with the consequences of excessive food waste, our system emerges as a beacon of sustainability and efficiency.

Our system employs advanced tracking mechanisms, enabling businesses and individuals to monitor their food inventory meticulously. From procurement and storage to consumption, every stage is meticulously managed, minimizing the likelihood of unnecessary waste. This efficient tracking system not only streamlines operations but also contributes to significant cost savings for businesses.

With the integration of smart analytics, users gain valuable insights into their food consumption patterns. Armed with data-driven decision-making, organizations can optimize their inventory, reduce overstocking, and ensure a more balanced and sustainable food supply chain.

Beyond the organizational benefits, our system places a strong emphasis on social responsibility. Integration with local charities and food banks facilitates the seamless donation of surplus food, ensuring that it reaches those in need instead of ending up in landfills. This philanthropic approach fosters community engagement and promotes a culture of giving back.
                </p>
             </div>
    </div>
  );
};

export default ImageCarousel;
