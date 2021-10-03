import Basket from './components/basket/basket';
import Logo from './components/logo/logo';
import SearchBar from './components/search-bar/search-bar';
import './header.css';

const Header = () => {
   return (
      <div className="header">
         <div className="header__logo">
            <Logo />
         </div>
         <div className="header__search-bar">
            <SearchBar />
         </div>
         <div className="header__basket">
            <Basket />
         </div>
      </div>
   );
};

export default Header;
