import Basket from './components/basket/basket';
import Logo from './components/logo/logo';
import SearchBar from './components/search-bar/search-bar';
import './header.css';

const Header = () => {
   const handleSearch = (text: string) => {
      if (text && text.trimStart().trimEnd().length >= 2) {
         console.log('text', text);
      }
   };

   return (
      <div className="header">
         <div className="header__logo">
            <Logo />
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
