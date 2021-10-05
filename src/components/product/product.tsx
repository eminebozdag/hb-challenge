import React, { useState } from 'react';
import image from '../../assets/images/image2.svg';
import ProductHover from '../product-hover/product-hover';
import './product.css';

const Product = () => {
   const [hover, setHover] = useState(false);
   return (
      <div className="product" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
         {hover ? (
            <ProductHover type="AVAILABLE" />
         ) : (
            <div>
               <div className="product__image">
                  <img src={image} alt="product" />
               </div>
               <div className="product__description">
                  <p>Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11</p>
                  <div className="product__description__meta">
                     <p className="product__description__meta__brand">
                        <b>Marka:</b>
                        <span>Apple</span>
                     </p>
                     <p className="product__description__meta__color">
                        <b>Renk:</b>
                        <span>Siyah</span>
                     </p>
                  </div>
                  <div className="product__description__price">
                     <p className="product__description__price__current">
                        <b>90,85 TL</b>
                     </p>
                     <p className="product__description__price__old">
                        <span className="product__description__price__old__line-through">124.00 TL</span>
                        <span className="product__description__price__old__discount">
                           <b>12%</b>
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
