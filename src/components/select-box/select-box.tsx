import React from 'react';
import './select-box.css';

const SelectBox = () => {
   return (
      <select data-testid="select-box" className="select-box">
         <option value="-1">Sıralama</option>
         <option value="1">En Düşük Fiyat</option>
         <option value="2">En Yüksek Fiyat</option>
         <option value="2">En Yeniler (A-Z)</option>
         <option value="2">En Yeniler (Z-A)</option>
      </select>
   );
};

export default SelectBox;
