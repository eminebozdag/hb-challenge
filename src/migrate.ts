import ProductDto from './dtos/productDto';
import { setProductsToLocalStorage } from './utils/localStorage';
import { randomInteger, randomNumber } from './utils/random';

const migrateLocalStorage = (): ProductDto[] => {
   const productNames = ['Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 ', 'Apple iPhone 11', 'iPhone 11 Kırmızı Kılıf', 'Apple Telefon'];
   const productBrands = ['Samsung', 'Nokia', 'Apple', 'LG', 'Huawei', 'Xiaomi', 'General Mobile'];
   const productColors = ['Lacivert', 'Sarı', 'Siyah', 'Beyaz'];
   const productImages = [
      's/49/280-413/10986386817074.jpg',
      's/49/400-592/10986386358322.jpg',
      's/66/400-592/110000007422602.jpg',
      's/66/400-592/110000007422584.jpg',
      's/76/400-592/110000018213472.jpg',
   ];

   const products: ProductDto[] = [];
   for (let i = 0; i < 36; i++) {
      const price = Math.round(randomNumber(200, 999) * 100) / 100;
      const oldPrice = Math.round(randomNumber(999, 1500) * 100) / 100;
      const discountRate = Math.abs(Math.round(100 - (price * 100) / oldPrice));

      products.push({
         id: i,
         name: productNames[randomInteger(0, productNames.length - 1)],
         price,
         oldPrice,
         discountRate,
         availableStock: 1,
         meta: {
            brands: [productBrands[randomInteger(0, productBrands.length - 1)]],
            colors: [productColors[randomInteger(0, productColors.length - 1)]],
         },
         image: `https://productimages.hepsiburada.net/${productImages[randomInteger(0, productImages.length - 1)]}`,
      } as ProductDto);
   }

   setProductsToLocalStorage(products);
   return products;
};

export { migrateLocalStorage };
