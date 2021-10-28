import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Basket from './components/basket/basket';
import Logo from './components/logo/logo';
import SearchBar from './components/search-bar/search-bar';
import './header.css';

const Header = () => {
   const [query, setQuery] = useState<URLSearchParams>();
   const { search } = useLocation();
   const history = useHistory();

   useEffect(() => {
      setQuery(new URLSearchParams(search));
   }, [search]);

   const refreshHome = () => {
      query?.delete('q');
      query?.delete('renk');
      query?.delete('marka');
      query?.delete('siralama');
      history.push(`/ara?${query?.toString()}`);
   };

   const handleSearch = (text: string) => {
      if (text && text.trimStart().trimEnd().length >= 2) {
         query?.set('q', text);
         history.push(`/ara?${query?.toString()}`);
      } else {
         query?.delete('q');
         history.push(`/ara?${query?.toString()}`);
      }
   };

   return (
      <div className="header">
         <div className="header__logo">
            <Logo onClick={refreshHome} />
         </div>
         <div className="header__search-bar">
            <SearchBar onSearch={handleSearch} />
         </div>
         <div className="header__basket">
            <Basket />
         </div>
      </div>
   );
};

export default Header;
