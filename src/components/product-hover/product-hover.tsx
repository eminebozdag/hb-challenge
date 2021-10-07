import React from 'react';
import { useDispatch } from 'react-redux';
import ProductDto from '../../dtos/productDto';
import { addToBasket } from '../../store/actions/basketActions';
import AddCartButton from './components/add-cart-button/add-cart-button';
import DisabledButton from './components/disabled-button/disabled-button';
import './product-hover.css';

interface Props {
   product: ProductDto;
   type?: 'AVAILABLE' | 'NOT_AVAILABLE';
}

const ProductHover = ({ product, type = 'AVAILABLE' }: Props) => {
   const dispatch = useDispatch();

   const handleAddToBasket = () => {
      dispatch(addToBasket(product));
   };

   return (
      <div data-testid="product-hover" className="product-hover">
         <div className="product-hover__image">
            <img src={product.image} alt="product" />
         </div>
         <div className="product-hover__description">
            <p>{product.name}</p>
         </div>
         <div className="product-hover__button">{type === 'AVAILABLE' ? <AddCartButton onClick={handleAddToBasket} /> : <DisabledButton />}</div>
      </div>
   );
};

export default ProductHover;
