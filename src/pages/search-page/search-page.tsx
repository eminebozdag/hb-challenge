import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Filter, { FilterValue } from '../../components/filter/filter';
import PaginationButton from '../../components/pagination-button/pagination-button';
import Product from '../../components/product/product';
import SearchHeader from '../../components/search-header/search-header';
import SelectBox, { SelectItem } from '../../components/select-box/select-box';
import ProductDto, { MetaDto } from '../../dtos/productDto';
import SortType from '../../enum/sortType';
import useSortValues, { SortValue } from '../../hooks/useSortValues';
import { filterProducts, sortProducts } from '../../store/actions/productActions';
import './search-page.css';

const SearchPage = () => {
   const { items, defaultItems } = useSelector((state: any) => state.productStore);
   const [colors, setColors] = useState<any>({});
   const [brands, setBrands] = useState<any>({});
   const [query, setQuery] = useState<URLSearchParams>();
   const { search } = useLocation();
   const history = useHistory();
   const dispatch = useDispatch();

   const page = Number(query?.get('sayfa')) || 1;
   const pageSize = 12;

   const pageProducts = items.slice((page - 1) * pageSize).slice(0, pageSize);
   const totalPages = items.length >= 12 ? Array.from(Array(Math.floor((items.length + pageSize - 1) / pageSize)).keys()) : [0];

   useEffect(() => {
      setQuery(new URLSearchParams(search));
   }, [search]);

   useEffect(() => {
      const productColors: any = {};
      const productBrands: any = {};
      for (const product of defaultItems) {
         product.meta.colors.forEach((color: MetaDto) => {
            const existItem = productColors[color.key];
            if (!existItem) {
               productColors[color.key] = {
                  value: color.value,
                  count: 0,
               };
            }
         });

         product.meta.brands.forEach((brand: MetaDto) => {
            const existItem = productBrands[brand.key];
            if (!existItem) {
               productBrands[brand.key] = {
                  value: brand.value,
                  count: 0,
               };
            }
         });
      }

      for (const product of items) {
         product.meta.colors.forEach((color: MetaDto) => {
            const existItem = productColors[color.key];
            existItem.count++;
         });

         product.meta.brands.forEach((brand: MetaDto) => {
            const existItem = productBrands[brand.key];
            existItem.count++;
         });
      }

      setColors(productColors);
      setBrands(productBrands);
   }, [items]);

   useEffect(() => {
      dispatch(filterProducts(query?.get('q') || '', query?.get('renk')?.split(',') || [], query?.get('marka')?.split(',') || []));
   }, [query]);

   useEffect(() => {
      dispatch(sortProducts((query?.get('siralama') as SortType) || SortType.Default));
   }, [query]);

   return (
      <div data-testid="search-page" className="search-page">
         <div className="search-page__header">
            <SearchHeader />
            <SelectBox
               defaultText="Sıralama"
               items={useSortValues().map((val: SortValue) => {
                  return { value: val.key, text: val.value };
               })}
               selectedValue={query?.get('siralama') || SortType.Default}
               onChange={(item: SelectItem) => {
                  let val = SortType.Default;
                  if (item) {
                     val = item.value as SortType;
                  }

                  query?.set('siralama', val);
                  history.push(`/ara?${query?.toString()}`);
               }}
            />
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
                  selectedKeys={query?.get('renk')?.split(',') || []}
                  onSelected={(key: string) => {
                     let colors: any = {};
                     const queryColors = query?.get('renk')?.split(',') || [];
                     queryColors.forEach((val: string) => (colors[val] = val));

                     const isExist = colors[key];
                     isExist ? delete colors[key] : (colors[key] = key);

                     const colorValues = Object.keys(colors).filter((e) => e);
                     if (colorValues.length === 0) query?.delete('renk');
                     else query?.set('renk', Object.keys(colors)?.join(',')!);

                     history.push(`/ara?${query?.toString()}`);
                  }}
               />
               <Filter
                  title="Sıralama"
                  values={useSortValues()}
                  selectedKeys={query?.get('siralama')?.split(',') || []}
                  onSelected={(key: string) => {
                     query?.set('siralama', key);
                     history.push(`/ara?${query?.toString()}`);
                  }}
               />
               <Filter
                  title="Marka"
                  values={Object.keys(brands).map((key: string) => {
                     return {
                        key: key,
                        value: `${brands[key].value} (${brands[key].count})`,
                     } as FilterValue;
                  })}
                  selectedKeys={query?.get('marka')?.split(',') || []}
                  onSelected={(key: string) => {
                     let colors: any = {};
                     const queryBrands = query?.get('marka')?.split(',') || [];
                     queryBrands.forEach((val: string) => (colors[val] = val));

                     const isExist = colors[key];
                     isExist ? delete colors[key] : (colors[key] = key);

                     const colorValues = Object.keys(colors).filter((e) => e);
                     if (colorValues.length === 0) query?.delete('marka');
                     else query?.set('marka', Object.keys(colors)?.join(',')!);

                     history.push(`/ara?${query?.toString()}`);
                  }}
               />
            </div>
            <div className="search-page__body__products">
               {pageProducts.map((product: ProductDto) => (
                  <Product key={`product-${product.id}`} product={product} />
               ))}
            </div>
         </div>
         <div className="search-page__footer">
            <div className="search-page__footer__pagination">
               <PaginationButton
                  text="<"
                  onClick={() => {
                     if (page === 1) return;
                     const previousPage = page - 1;
                     query?.set('sayfa', previousPage.toString());
                     history.push(`/ara?${query?.toString()}`);
                  }}
               />
               {Array.from(totalPages).map((p: number) => {
                  return (
                     <PaginationButton
                        key={p}
                        text={p + 1}
                        selected={p === page - 1}
                        onClick={(text: number) => {
                           query?.set('sayfa', text.toString());
                           history.push(`/ara?${query?.toString()}`);
                        }}
                     />
                  );
               })}
               <PaginationButton
                  text=">"
                  onClick={() => {
                     if (page === totalPages.length) return;
                     const nextPage = page + 1;
                     query?.set('sayfa', nextPage.toString());
                     history.push(`/ara?${query?.toString()}`);
                  }}
               />
            </div>
         </div>
      </div>
   );
};

export default SearchPage;
