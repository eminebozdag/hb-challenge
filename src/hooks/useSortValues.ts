import { useMemo } from 'react';

const useSortValues = () => {
   return useMemo(
      () => [
         {
            key: 'lower_price',
            value: 'En Düşük Fiyat',
         },
         {
            key: 'higher_price',
            value: 'En Yüksek Fiyat',
         },
         {
            key: 'newest',
            value: 'En Yeniler (A>Z)',
         },
         {
            key: 'oldest',
            value: 'En Yeniler (Z>A)',
         },
      ],
      [],
   );
};

export default useSortValues;
