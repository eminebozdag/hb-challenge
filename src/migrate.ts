import ProductDto from './dtos/productDto';
import { setProductsToLocalStorage } from './utils/localStorage';
import { randomInteger, randomNumber } from './utils/random';

const migrateLocalStorage = (): ProductDto[] => {
   const productNames = ['Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 ', 'Apple iPhone 11', 'iPhone 11 Kırmızı Kılıf', 'Apple Telefon'];
   const productBrands = ['Samsung', 'Nokia', 'Apple', 'LG', 'Huawei', 'Xiaomi', 'General Mobile'];
   const productColors = ['Lacivert', 'Sarı', 'Siyah', 'Beyaz'];
   const productImages = [''];

   const products: ProductDto[] = [];
   for (let i = 0; i < 36; i++) {
      const price = Math.round(randomNumber(200, 999) * 100) / 100;
      const oldPrice = Math.round(randomNumber(999, 1500) * 100) / 100;
      const discountRate = Math.abs(Math.round(100 - (price * 100) / oldPrice));

      products.push({
         id: i,
         name: productNames[randomInteger(0, productNames.length)],
         price,
         oldPrice,
         discountRate,
         availableStock: 1,
         meta: {
            brands: [productBrands[randomInteger(0, productBrands.length)]],
            colors: [productColors[randomInteger(0, productColors.length)]],
         },
         image: productImages[randomInteger(0, productImages.length)],
      } as ProductDto);
   }

   setProductsToLocalStorage(products);
   return products;
};

export { migrateLocalStorage };
