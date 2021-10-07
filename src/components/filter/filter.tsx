import React from 'react';
import './filter.css';

interface Props {
   title: string;
   values: FilterValue[];
   selectedKeys?: string[];
   onSelected(key: string): void;
}

interface FilterValue {
   key: string;
   value: string;
}

const Filter = ({ title, values, selectedKeys, onSelected }: Props) => {
   return (
      <div data-testid="filter" className="filter">
         <h5>
            <b>{title}</b>
         </h5>
         {values.map((val: FilterValue) => {
            return (
               <p key={val.key} className={selectedKeys?.includes(val.key) ? 'selected' : ''} onClick={() => onSelected(val.key)}>
                  {val.value}
               </p>
            );
         })}
      </div>
   );
};

export type { FilterValue };
export default Filter;
