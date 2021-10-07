import { Action, Dispatch } from 'redux';
import ProductDto from '../../dtos/productDto';
import SortType from '../../enum/sortType';

enum ProductActionType {
   SET_PRODUCTS = 'SET_PRODUCTS',
   SORT_PRODUCTS = 'SORT_PRODUCTS',
   FILTER_PRODUCTS = 'FILTER_PRODUCTS',
   FILTER_PRODUCTS_BY_COLORS = 'FILTER_PRODUCTS_BY_COLORS',
   FILTER_PRODUCTS_BY_BRANDS = 'FILTER_PRODUCTS_BY_BRANDS',
}

const setProducts = (items: ProductDto[]) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ProductActionType.SET_PRODUCTS,
         items,
      });
   };
};

const sortProducts = (sortType: SortType) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ProductActionType.SORT_PRODUCTS,
         sortType,
      });
   };
};

const filterProducts = (searchText: string, colorKeys: string[], brandKeys: string[]) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ProductActionType.FILTER_PRODUCTS,
         searchText,
         colorKeys,
         brandKeys,
      });
   };
};

const filterProductsByColors = (keys: string[]) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ProductActionType.FILTER_PRODUCTS_BY_COLORS,
         keys,
      });
   };
};

const filterProductsByBrands = (keys: string[]) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ProductActionType.FILTER_PRODUCTS_BY_BRANDS,
         keys,
      });
   };
};

export { ProductActionType, setProducts, sortProducts, filterProducts, filterProductsByColors, filterProductsByBrands };
