import React from 'react';
import Filter from '../../components/filter/filter';
import PaginationButton from '../../components/pagination-button/pagination-button';
import Product from '../../components/product/product';
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
            <div className="search-page__body__filter">
               <Filter />
               <Filter />
               <Filter />
            </div>
            <div className="search-page__body__products">
               {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((e) => (
                  <Product />
               ))}
            </div>
         </div>
         <div className="search-page__footer">
            <div className="search-page__footer__pagination">
               {[0, 1, 2, 3, 4, 5, 6, 7].map((e) => (
                  <PaginationButton />
               ))}
            </div>
         </div>
      </div>
   );
};

export default SearchPage;
