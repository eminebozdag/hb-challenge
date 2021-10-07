import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDto from '../../../../dtos/productDto';
import { dispatchRemoveFromBasketModal } from '../../../../store/actions/globalActions';
import './basket.css';
import BasketItem from './components/basket-item/basket-item';

const Basket = () => {
   const dispatch = useDispatch();
   const { items } = useSelector((state: any) => state.basketStore);
   const [hover, setHover] = useState(false);

   const handleDelete = (id: number) => {
      dispatch(dispatchRemoveFromBasketModal(true, id));
   };

   return (
      <div data-testid="basket__detail-without-hover" className="basket" onMouseLeave={() => setHover(false)}>
         <div data-testid="basket" className="basket__button" onMouseEnter={() => setHover(true)}>
            <p>Sepetim</p>
            <div data-testid="basket-button-count" className="basket__button__count">
               {items.length}
            </div>
         </div>

         {hover && (
            <div data-testid="basket__detail-with-hover" className="basket__detail">
               <div className="basket__detail__list">
                  {items.map((item: ProductDto) => (
                     <BasketItem key={`basketitem-${item.id}`} item={item} onDelete={handleDelete} />
                  ))}

                  {items.length === 0 && <p>Sepetiniz boş!</p>}
               </div>
            </div>
         )}
      </div>
   );
};

export default Basket;
