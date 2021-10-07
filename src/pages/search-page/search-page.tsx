import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Filter, { FilterValue } from '../../components/filter/filter';
import PaginationButton from '../../components/pagination-button/pagination-button';
import Product from '../../components/product/product';
import SearchHeader from '../../components/search-header/search-header';
import SelectBox from '../../components/select-box/select-box';
import ProductDto from '../../dtos/productDto';
import useSortValues from '../../hooks/useSortValues';
import './search-page.css';

const SearchPage = () => {
   const { items } = useSelector((state: any) => state.productStore);
   const [colors, setColors] = useState<any>({});
   const [brands, setBrands] = useState<any>({});

   const page = 0;
   const pageSize = 12;

   const pageProducts = items.slice(page * pageSize).slice(0, pageSize);
   const totalPages = Array.from(Array(items.length / 12).keys());

   useEffect(() => {
      const productColors: any = {};
      const productBrands: any = {};
      for (const product of items) {
         product.meta.colors.forEach((color: string) => {
            const key = `color_${color.toLowerCase()}`;
            const existItem = productColors[key];
            if (!existItem) {
               productColors[key] = {
                  value: color,
                  count: 0,
               };
            } else {
               existItem.count++;
            }
         });

         product.meta.brands.forEach((brand: string) => {
            const key = `brand_${brand.toLowerCase()}`;
            const existItem = productBrands[key];
            if (!existItem) {
               productBrands[key] = {
                  value: brand,
                  count: 0,
               };
            } else {
               existItem.count++;
            }
         });
      }

      setColors(productColors);
      setBrands(productBrands);
   }, [items]);

   return (
      <div className="search-page">
         <div className="search-page__header">
            <SearchHeader />
            <SelectBox />
         </div>
         <div className="search-page__body">
            <div className="search-page__body__filter">
               <Filter
                  title="Renk"
                  values={Object.keys(colors).map((key: string) => {
                     return {
                        key: key,
                        value: `${colors[key].value} (${colors[key].count})`,
                     } as FilterValue;
                  })}
                  onSelected={(key: string) => {}}
               />
               <Filter title="Sıralama" values={useSortValues()} onSelected={(key: string) => {}} />
               <Filter
                  title="Marka"
                  values={Object.keys(brands).map((key: string) => {
                     return {
                        key: key,
                        value: `${brands[key].value} (${brands[key].count})`,
                     } as FilterValue;
                  })}
                  onSelected={(key: string) => {}}
               />
            </div>
            <div className="search-page__body__products">
               {pageProducts.map((product: ProductDto) => (
                  <Product product={product} />
               ))}
            </div>
         </div>
         <div className="search-page__footer">
            <div className="search-page__footer__pagination">
               <PaginationButton text="<" onClick={() => console.log('sayfa azalt ')} />
               {Array.from(totalPages).map((p: number) => {
                  return <PaginationButton text={p + 1} selected={p === page} onClick={(text: number) => console.log('sayfa', text)} />;
               })}
               <PaginationButton text=">" onClick={() => console.log('sayfa arttir')} />
            </div>
         </div>
      </div>
   );
};

export default SearchPage;
