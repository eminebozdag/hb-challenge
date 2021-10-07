import React, { useState } from 'react';
import image from '../../assets/images/image2.svg';
import ProductDto from '../../dtos/productDto';
import ProductHover from '../product-hover/product-hover';
import './product.css';

interface Props {
   product: ProductDto;
}

const Product = ({ product }: Props) => {
   const [hover, setHover] = useState(false);

   return (
      <div data-testid="product" className="product" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
         {hover ? (
            <ProductHover type="AVAILABLE" />
         ) : (
            <div data-testid="product-without-hover">
               <div className="product__image">
                  <img src={image} alt="product" />
               </div>
               <div className="product__description">
                  <p id="product-name">{product.name}</p>
                  <div className="product__description__meta">
                     <p className="product__description__meta__brand">
                        <b>Marka:</b>
                        <span>{product.meta.brands}</span>
                     </p>
                     <p className="product__description__meta__color">
                        <b>Renk:</b>
                        <span>{product.meta.colors}</span>
                     </p>
                  </div>
                  <div className="product__description__price">
                     <p className="product__description__price__current">
                        <b>{product.price} TL</b>
                     </p>
                     <p className="product__description__price__old">
                        <span className="product__description__price__old__line-through">{product.oldPrice} TL</span>
                        <span className="product__description__price__old__discount">
                           <b>{product.discountRate}%</b>
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Product;
