import LocalStorageType from '../enum/localStorageType';
import Product from '../models/product';

const getProductsFromLocalStorage = (): Product[] => {
   const productsJson = window.localStorage.getItem(LocalStorageType.Products);
   return JSON.parse(productsJson as any);
};

const setProductsToLocalStorage = (products: Product[]) => {
   window.localStorage.setItem(LocalStorageType.Products, JSON.stringify(products));
};

export { getProductsFromLocalStorage, setProductsToLocalStorage };
