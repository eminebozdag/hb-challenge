import React from 'react';
import SearchHeader from '../../components/search-header/search-header';
import SelectBox from '../../components/select-box/select-box';
import './search-page.css';

const SearchPage = () => {
   return (
      <div className="search-page">
         <div className="search-page__header">
            <SearchHeader />
            <SelectBox />
         </div>
         <div className="search-page__body">
            <div className="search-page__body__filter"></div>
            <div className="search-page__body__products"></div>
         </div>
      </div>
   );
};

export default SearchPage;
