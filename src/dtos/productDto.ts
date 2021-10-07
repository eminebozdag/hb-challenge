interface ProductDto {
   id: number;
   name: string;
   price: number;
   oldPrice: number;
   discountRate: number;
   availableStock: number;
   meta: {
      brands: Array<MetaDto>;
      colors: Array<MetaDto>;
   };
   image: string;
}

interface MetaDto {
   key: string;
   value: string;
}

export type { MetaDto };
export default ProductDto;
