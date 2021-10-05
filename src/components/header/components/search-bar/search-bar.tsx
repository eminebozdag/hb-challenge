import React from 'react';
import SearchIco from '../../../../assets/icons/search-ico.svg';
import './search-bar.css';

const SearchBar = () => {
   return (
      <div className="search-box">
         <div className="search-box__icon">
            <img src={SearchIco} alt="search" />
         </div>
         <input data-testid="search-input" placeholder="25 milyon'dan fazla ürün içerisinde ara" className="search-box__input"></input>
      </div>
   );
};
export default SearchBar;
