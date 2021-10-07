import { GlobalActionType } from './actions/globalActions';

const initialState = {
   showRemoveFromBasketModal: false,
   removeFromBasketProductId: 0,
};

const globalStore = (state = initialState, action: any) => {
   switch (action.type) {
      case GlobalActionType.DISPATCH_REMOVE_FROM_BASKET_MODAL:
         return { showRemoveFromBasketModal: action.show, removeFromBasketProductId: action.productId };
      default:
         return state;
   }
};

export default globalStore;
