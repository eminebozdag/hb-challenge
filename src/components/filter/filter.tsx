import React from 'react';
import './filter.css';

interface Props {
   title: string;
   values: FilterValue[];
   selectedKey?: string;
   onSelected(key: string): void;
}

interface FilterValue {
   key: string;
   value: string;
}

const Filter = ({ title, values, selectedKey, onSelected }: Props) => {
   return (
      <div data-testid="filter" className="filter">
         <h5>
            <b>{title}</b>
         </h5>
         {values.map((val: FilterValue) => {
            return (
               <p key={val.key} onClick={() => onSelected(val.key)}>
                  {val.value}
               </p>
            );
         })}
      </div>
   );
};

export type { FilterValue };
export default Filter;
