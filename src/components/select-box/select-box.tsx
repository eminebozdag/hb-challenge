import React from 'react';
import SortType from '../../enum/sortType';
import './select-box.css';

interface Props {
   defaultText: string;
   items: SelectItem[];
   selectedValue?: string;
   onChange(item: SelectItem): void;
}
interface SelectItem {
   text: string;
   value: string;
}

const SelectBox = ({ defaultText, items, selectedValue, onChange }: Props) => {
   return (
      <select
         data-testid="select-box"
         className={'select-box' + (['-1', SortType.Default].findIndex((e) => e === selectedValue) < 0 ? ' selected' : '')}
         defaultValue="-1"
         onChange={(e: any) => {
            onChange(items.find((i) => i.value === e.target.value)!);
         }}
      >
         <option value="-1">{defaultText}</option>
         {items.map((item: SelectItem) => (
            <option key={item.value} selected={item.value === selectedValue} value={item.value}>
               {item.text}
            </option>
         ))}
      </select>
   );
};

export type { SelectItem };
export default SelectBox;
