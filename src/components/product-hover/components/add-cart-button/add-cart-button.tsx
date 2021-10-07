import React from 'react';
import './add-cart-button.css';

interface Props {
   onClick(): void;
}

const AddCartButton = ({ onClick }: Props) => {
   return (
      <div data-testid="add-cart-button" className="add-cart-button" onClick={onClick}>
         <p>Sepete Ekle</p>
      </div>
   );
};
export default AddCartButton;
