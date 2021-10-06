import React from 'react';
import image from '../../../../../../assets/images/image1.svg';
import './basket-item.css';

const BasketItem = () => {
   return (
      <div data-testid="basket-item" className="basket-item">
         <div className="basket-item__image">
            <img src={image} alt="product-item__image" />
         </div>
         <div className="basket-item__description">
            <div className="basket-item__description__title">
               <p>iPhone 11 Kırmızı Kılıflı Garantili Telefon</p>
            </div>
            <div className="basket-item__description__remove">
               <span>Kaldır</span>
            </div>
         </div>
      </div>
   );
};
export default BasketItem;
