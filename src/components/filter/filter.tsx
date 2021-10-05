import React from 'react';
import './filter.css';

const Filter = () => {
   return (
      <div data-testid="filter" className="filter">
         <h5>
            <b>Renk</b>
         </h5>
         <p>Lacivert (5)</p>
         <p>Siyah (3)</p>
         <p>Kırmızı (1)</p>
      </div>
   );
};

export default Filter;
