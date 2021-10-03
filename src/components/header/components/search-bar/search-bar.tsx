import React from 'react';
import './search-bar.css';

const SearchBar = () => {
   return (
      <div>
         <div className="search-box">
            <div className="search-box__icon">
               <img src="" alt="search" />
            </div>
            <input placeholder="25 milyon'dan fazla ürün içerisinde ara" className="search-box__input"></input>
         </div>
      </div>
   );
};
export default SearchBar;
