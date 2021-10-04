import React from 'react';
import './basket.css';

const Basket = () => {
   return (
      <div>
         <div className="basket">
            <p>Sepetim</p>
            <div data-testid="basket-count" className="basket__count">
               3
            </div>
         </div>
      </div>
   );
};

export default Basket;
