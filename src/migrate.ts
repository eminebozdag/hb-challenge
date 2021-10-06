import Product from './models/product';
import { setProductsToLocalStorage } from './utils/localStorage';
import { randomNumber } from './utils/random';

const migrateLocalStorage = () => {
   const productNames = [
      'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',
      'Apple iPhone 11',
      'iPhone 11 Kırmızı Kılıf',
      'Apple Telefon',
   ];
   const productBrands = ['Samsung', 'Nokia', 'Apple', 'LG', 'Huawei', 'Xiaomi', 'General Mobile'];
   const productColors = ['Lacivert', 'Sarı', 'Siyah', 'Beyaz'];

   const products: Product[] = [];
   for (let i = 0; i < 36; i++) {
      const price = randomNumber(200, 999);
      const oldPrice = randomNumber(999, 1500);
      const discountRate = Math.round(100 - (price * 100) / oldPrice);

      products.push({
         id: i,
         name: productNames[randomNumber(0, productNames.length)],
         price,
         oldPrice,
         discountRate,
         availableStock: 1,
         meta: {
            brands: [productBrands[randomNumber(0, productBrands.length)]],
            colors: [productColors[randomNumber(0, productColors.length)]],
         },
      } as Product);
   }

   setProductsToLocalStorage(products);
};

export { migrateLocalStorage };
