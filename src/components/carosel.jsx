import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import './carousel.css';
import c1 from "../images/c1.PNG";
import c2 from "../images/c2.PNG";
import c3 from "../images/c3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='carosel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='frix'><strong></strong></h3>
          <p className='frix1'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='frix'><strong></strong></h3>
          <p className='frix1'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='frix'><strong></strong></h3>
          <p className='frix1'></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
