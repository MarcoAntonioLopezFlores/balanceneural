import React from 'react';
import { Carousel } from 'react-bootstrap';
import { products } from '../util/Slides';


const ProductComponent = () => {
  const heightWindow = window.innerWidth>760?710:300
  return (
    <Carousel id="products" fade={true} pause={false}>
      {products.map((product,index)=>
      <Carousel.Item key={index} interval={2000}>
        <img
          height={heightWindow}
          className="d-block w-100"
          src={product.image}
          alt={product.alt}
        />
      </Carousel.Item>
      )}
    </Carousel>
  )
}

export default ProductComponent;