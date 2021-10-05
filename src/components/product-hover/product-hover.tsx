import React from 'react';
import image from '../../assets/images/image1.svg';
import AddCartButton from './components/add-cart-button/add-cart-button';
import DisabledButton from './components/disabled-button/disabled-button';
import './product-hover.css';

interface Props {
   type?: 'AVAILABLE' | 'NOT_AVAILABLE';
}

const ProductHover = ({ type = 'AVAILABLE' }: Props) => {
   return (
      <div data-testid="product-hover" className="product-hover">
         <div className="product-hover__image">
            <img src={image} alt="product" />
         </div>
         <div className="product-hover__description">
            <p>Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11</p>
         </div>
         <div className="product-hover__button">{type === 'AVAILABLE' ? <AddCartButton /> : <DisabledButton />}</div>
      </div>
   );
};

export default ProductHover;
