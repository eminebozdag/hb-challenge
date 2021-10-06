import React, { useState } from 'react';
import './basket.css';
import BasketItem from './components/basket-item/basket-item';

const Basket = () => {
   const [hover, setHover] = useState(false);

   return (
      <div data-testid="basket__detail-without-hover" className="basket" onMouseLeave={() => setHover(false)}>
         <div data-testid="basket" className="basket__button" onMouseEnter={() => setHover(true)}>
            <p>Sepetim</p>
            <div data-testid="basket-button-count" className="basket__button__count">
               3
            </div>
         </div>

         {hover && (
            <div data-testid="basket__detail-with-hover" className="basket__detail">
               <div className="basket__detail__list">
                  <BasketItem />
                  <BasketItem />
                  <BasketItem />
                  <BasketItem />
                  <BasketItem />
                  <BasketItem />
               </div>
            </div>
         )}
      </div>
   );
};

export default Basket;
