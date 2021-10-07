import ProductDto from '../dtos/productDto';
import LocalStorageType from '../enum/localStorageType';

const getProductsFromLocalStorage = (): ProductDto[] => {
   const productsJson = window.localStorage.getItem(LocalStorageType.Products);
   if (!productsJson) {
      return [];
   }

   return JSON.parse(productsJson as any);
};

const setProductsToLocalStorage = (products: ProductDto[]) => {
   window.localStorage.setItem(LocalStorageType.Products, JSON.stringify(products));
};

const getBasketItemsFromLocalStorage = (): ProductDto[] => {
   const itemsJson = window.localStorage.getItem(LocalStorageType.Basket);
   if (!itemsJson) {
      return [];
   }

   return JSON.parse(itemsJson as any);
};

const setBasketItemsToLocalStorage = (items: ProductDto[]) => {
   window.localStorage.setItem(LocalStorageType.Basket, JSON.stringify(items));
};

export { getProductsFromLocalStorage, setProductsToLocalStorage, getBasketItemsFromLocalStorage, setBasketItemsToLocalStorage };
