interface ProductDto {
   id: number;
   name: string;
   price: number;
   oldPrice: number;
   discountRate: number;
   availableStock: number;
   meta: {
      brands: Array<string>;
      colors: Array<string>;
   };
   image: string;
}

export default ProductDto;
