import React from 'react';
import SearchIco from '../../../../assets/icons/search-ico.svg';
import './search-bar.css';

interface Props {
   onSearch(text: string): void;
}

const SearchBar = ({ onSearch }: Props) => {
   return (
      <div className="search-box">
         <div className="search-box__icon">
            <img src={SearchIco} alt="search" />
         </div>
         <input
            data-testid="search-input"
            placeholder="25 milyon'dan fazla ürün içerisinde ara"
            className="search-box__input"
            type="text"
            onChange={(e: any) => onSearch(e.target.value)}
         />
      </div>
   );
};
export default SearchBar;
