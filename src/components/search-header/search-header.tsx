import React from 'react';
import './search-header.css';

interface Props {
   title: string;
}

const SearchHeader = ({ title }: Props) => {
   return (
      <div className="search-header">
         <h4>
            <b data-testid="search-header-title"></b>
         </h4>
         <p data-testid="search-header-detail">
            Aranan Kelime: <span>{title}</span>
         </p>
      </div>
   );
};

export default SearchHeader;
