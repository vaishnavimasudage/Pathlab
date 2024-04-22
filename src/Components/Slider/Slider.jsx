import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import pic1 from "../Asset/images/1.jpg";
import pic2 from "../Asset/images/2.jpg";
import pic3 from "../Asset/images/3.jpg";
import pic4 from '../Asset/images/4.jpg';
import pic5 from '../Asset/images/7.jpg';

import './Slider.css';

const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={1100}
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={1100}
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={1100}
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={1100}
          src={pic4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100" width={900} height={1100}
          src={pic5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
export default Slider;