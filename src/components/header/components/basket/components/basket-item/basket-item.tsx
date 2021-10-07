import React from 'react';
import ProductDto from '../../../../../../dtos/productDto';
import './basket-item.css';

interface Props {
   item: ProductDto;
   onDelete(id: number): void;
}

const BasketItem = ({ item, onDelete }: Props) => {
   return (
      <div data-testid="basket-item" className="basket-item">
         <div className="basket-item__image">
            <img src={item.image} alt="product-item__image" />
         </div>
         <div className="basket-item__description">
            <div className="basket-item__description__title">
               <p>{item.name}</p>
            </div>
            <div className="basket-item__description__remove" onClick={() => onDelete(item.id)}>
               <span>Kaldır</span>
            </div>
         </div>
      </div>
   );
};
export default BasketItem;
