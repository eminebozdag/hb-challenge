import ProductDto from '../dtos/productDto';
import { ProductActionType } from './actions/productActions';

const initialState = {
   items: [] as ProductDto[],
};

const productStore = (state = initialState, action: any) => {
   switch (action.type) {
      case ProductActionType.SET_PRODUCTS:
         return { items: action.items };
      default:
         return state;
   }
};

export default productStore;
