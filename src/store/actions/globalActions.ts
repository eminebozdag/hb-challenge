import { Action, Dispatch } from 'redux';

enum GlobalActionType {
   DISPATCH_REMOVE_FROM_BASKET_MODAL = 'DISPATCH_REMOVE_FROM_BASKET_MODAL',
}

const dispatchRemoveFromBasketModal = (show: boolean, productId?: number) => {
   return async (dispatch: Dispatch<Action>) => {
      dispatch({
         type: GlobalActionType.DISPATCH_REMOVE_FROM_BASKET_MODAL,
         show,
         productId,
      });
   };
};

export { GlobalActionType, dispatchRemoveFromBasketModal };
