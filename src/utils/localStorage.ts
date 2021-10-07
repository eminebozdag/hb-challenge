import ProductDto from '../dtos/productDto';
import LocalStorageType from '../enum/localStorageType';

const getProductsFromLocalStorage = (): ProductDto[] => {
   const productsJson = window.localStorage.getItem(LocalStorageType.Products);
   return JSON.parse(productsJson as any);
};

const setProductsToLocalStorage = (products: ProductDto[]) => {
   window.localStorage.setItem(LocalStorageType.Products, JSON.stringify(products));
};

export { getProductsFromLocalStorage, setProductsToLocalStorage };
