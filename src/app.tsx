import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './app.css';
import Header from './components/header/header';
import { migrateLocalStorage } from './migrate';
import SearchPage from './pages/search-page/search-page';
import { setProducts } from './store/actions/productActions';
import { getProductsFromLocalStorage } from './utils/localStorage';

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const initialProducts = getProductsFromLocalStorage();
      if (initialProducts) {
         dispatch(setProducts(initialProducts));
         return;
      }

      const products = migrateLocalStorage();
      dispatch(setProducts(products));
   }, []);

   return (
      <div className="app">
         <Header />
         <SearchPage />
      </div>
   );
};

export default App;
