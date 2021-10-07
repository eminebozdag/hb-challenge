import { Action, Dispatch } from 'redux';
import ProductDto from '../../dtos/productDto';

enum BasketActionType {
   ADD_TO_BASKET = 'ADD_TO_BASKET',
   REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
}

const addToBasket = (item: ProductDto) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: BasketActionType.ADD_TO_BASKET,
         item,
      });
   };
};

const removeFromBasket = (id: number) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: BasketActionType.REMOVE_FROM_BASKET,
         id,
      });
   };
};

export { BasketActionType, addToBasket, removeFromBasket };
