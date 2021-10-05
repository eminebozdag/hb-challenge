import React from 'react';
import './select-box.css';

const SelectBox = () => {
   return (
      <select data-testid="select-box" className="select-box">
         <option value="-1">Sıralama</option>
         <option value="1">Option 1</option>
         <option value="2">Option 2</option>
      </select>
   );
};

export default SelectBox;
