import { ProductActionType } from './actions/productActions';

const initialState = {
   products: [],
};

const productStore = (state = initialState, action: any) => {
   switch (action.type) {
      case ProductActionType.SET_PRODUCTS:
         return { products: action.products };
      default:
         return state;
   }
};

export default productStore;
