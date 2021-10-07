import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/filter/filter';
import PaginationButton from '../../components/pagination-button/pagination-button';
import Product from '../../components/product/product';
import SearchHeader from '../../components/search-header/search-header';
import SelectBox from '../../components/select-box/select-box';
import ProductDto from '../../dtos/productDto';
import './search-page.css';

const SearchPage = () => {
   const { products } = useSelector((state: any) => state.productStore);

   const page = 0;
   const pageSize = 12;
   console.log('products', products.slice(page * pageSize).slice(0, pageSize));

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
               {products.map((product: ProductDto) => (
                  <Product product={product} />
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
