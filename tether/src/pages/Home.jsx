import { useState } from "react";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slide1.png"
          alt="First slide"
          max-width="100"
          height="auto"
        />
        <Carousel.Caption>
          <h3>Welcome to tether!</h3>
          <p>Made by team tether</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slide2.png"
          alt="Second slide"
          max-width="100"
          height="auto"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slide3.png"
          alt="Third slide"
          max-width="100"
          height="auto"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;