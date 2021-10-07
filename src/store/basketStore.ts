import ProductDto from '../dtos/productDto';
import { getBasketItemsFromLocalStorage, setBasketItemsToLocalStorage } from '../utils/localStorage';
import { BasketActionType } from './actions/basketActions';

const initialState = {
   items: [] as ProductDto[],
};

const basketStore = (state = initialState, action: any) => {
   if (state.items?.length === 0) state.items = getBasketItemsFromLocalStorage();

   switch (action.type) {
      case BasketActionType.ADD_TO_BASKET:
         state.items.push(action.item);
         setBasketItemsToLocalStorage(state.items);
         return { items: state.items };
      case BasketActionType.REMOVE_FROM_BASKET:
         const updatedItems = state.items.filter((item: ProductDto) => item.id !== action.id);
         setBasketItemsToLocalStorage(updatedItems);
         return { items: updatedItems };
      default:
         return state;
   }
};

export default basketStore;
