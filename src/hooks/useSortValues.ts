import { useMemo } from 'react';
import SortType from '../enum/sortType';

interface SortValue {
   key: SortType;
   value: string;
}

const useSortValues = (): SortValue[] => {
   return useMemo(
      () =>
         [
            {
               key: SortType.LowerPrice,
               value: 'En Düşük Fiyat',
            },
            {
               key: SortType.HigherPrice,
               value: 'En Yüksek Fiyat',
            },
            {
               key: SortType.Newest,
               value: 'En Yeniler (A>Z)',
            },
            {
               key: SortType.Oldest,
               value: 'En Yeniler (Z>A)',
            },
         ] as SortValue[],
      [],
   );
};

export type { SortValue };
export default useSortValues;
