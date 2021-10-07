import { Action, Dispatch } from 'redux';
import ProductDto from '../../dtos/productDto';

enum ProductActionType {
   SET_PRODUCTS = 'SET_PRODUCTS',
}

const setProducts = (products: ProductDto[]) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ProductActionType.SET_PRODUCTS,
         products,
      });
   };
};

export { ProductActionType, setProducts };
