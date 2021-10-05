import React from 'react';
import './search-header.css';

const SearchHeader = () => {
   return (
      <div className="search-header">
         <h4>
            <b data-testid="search-header-title">iPhone iOS cep telefonu</b>
         </h4>
         <p data-testid="search-header-detail">
            Aranan Kelime: <span>iphone 11</span>
         </p>
      </div>
   );
};

export default SearchHeader;
