import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/img/productos/active_balance.jpg';
import image2 from './../assets/img/productos/beauty_balance.jpg';
import image3 from './../assets/img/productos/calm_balance.jpg';

const ProductComponent = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          height={600}
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
        height={600}
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
            
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
        height={600}
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductComponent;