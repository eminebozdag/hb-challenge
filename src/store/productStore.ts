import ProductDto from '../dtos/productDto';
import SortType from '../enum/sortType';
import { ProductActionType } from './actions/productActions';

const initialState = {
   items: [] as ProductDto[],
   defaultItems: [] as ProductDto[],
};

const productStore = (state = initialState, action: any) => {
   switch (action.type) {
      case ProductActionType.SET_PRODUCTS:
         return { items: action.items, defaultItems: action.items };

      case ProductActionType.SORT_PRODUCTS:
         if (action.sortType === SortType.HigherPrice) {
            return { items: state.items.sort((a: ProductDto, b: ProductDto) => b.price - a.price), defaultItems: state.defaultItems };
         } else if (action.sortType === SortType.LowerPrice) {
            return { items: state.items.sort((a: ProductDto, b: ProductDto) => a.price - b.price), defaultItems: state.defaultItems };
         } else if (action.sortType === SortType.Newest) {
            return { items: state.items.sort((a: ProductDto, b: ProductDto) => a.name.localeCompare(b.name)), defaultItems: state.defaultItems };
         } else if (action.sortType === SortType.Oldest) {
            return { items: state.items.sort((a: ProductDto, b: ProductDto) => b.name.localeCompare(a.name)), defaultItems: state.defaultItems };
         }

         return { items: state.items, defaultItems: state.defaultItems };

      case ProductActionType.FILTER_PRODUCTS:
         let filteredProducts: any[] = [];

         let defaultItems = state.defaultItems;
         if (action.searchText?.length > 0) {
            defaultItems = state.defaultItems.filter((e) => e.name.toLowerCase().includes(action.searchText?.toLowerCase()));
         }
         let colorFilteredProducts = defaultItems?.filter(
            (e) => e.meta.colors.findIndex((f) => action.colorKeys.findIndex((f2: string) => f2 === f.key) >= 0) >= 0,
         );
         const brandFilteredProducts = defaultItems?.filter(
            (e) => e.meta.brands.findIndex((f) => action.brandKeys.findIndex((f2: string) => f2 === f.key) >= 0) >= 0,
         );

         filteredProducts = colorFilteredProducts.concat(brandFilteredProducts);

         if (brandFilteredProducts.length > 0 && action.colorKeys.length > 0) {
            filteredProducts = brandFilteredProducts?.filter(
               (e) => e.meta.colors.findIndex((f) => action.colorKeys.findIndex((f2: string) => f2 === f.key) >= 0) >= 0,
            );
         } else if (colorFilteredProducts.length > 0 && action.brandKeys.length > 0) {
            filteredProducts = colorFilteredProducts?.filter(
               (e) => e.meta.brands.findIndex((f) => action.colorKeys.findIndex((f2: string) => f2 === f.key) >= 0) >= 0,
            );
         }

         if ((!colorFilteredProducts || colorFilteredProducts.length === 0) && (!brandFilteredProducts || brandFilteredProducts.length === 0)) {
            return { items: defaultItems, defaultItems: state.defaultItems };
         }

         return { items: filteredProducts, defaultItems };
      default:
         return state;
   }
};

export default productStore;
