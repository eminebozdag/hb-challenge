import React, { useEffect } from 'react';
import './app.css';
import Header from './components/header/header';
import { migrateLocalStorage } from './migrate';
import SearchPage from './pages/search-page/search-page';
import { getProductsFromLocalStorage } from './utils/localStorage';

const App = () => {
   useEffect(() => {
      const initialProducts = getProductsFromLocalStorage();
      if (initialProducts) {
         return;
      }

      migrateLocalStorage();
   }, []);

   return (
      <div className="app">
         <Header />
         <SearchPage />
      </div>
   );
};

export default App;
