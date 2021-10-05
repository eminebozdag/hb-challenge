import React from 'react';
import './disabled-button.css';

const DisabledButton = () => {
   return (
      <div data-testid="disabled-button" className="disabled-button">
         <p>Bu ürünü sepete ekleyemezsiniz.</p>
      </div>
   );
};
export default DisabledButton;
