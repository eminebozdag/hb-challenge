import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import RemoveBasketItemModal from './components/header/components/basket/components/remove-basket-item-modal/remove-basket-item-modal';
import Header from './components/header/header';
import { migrateLocalStorage } from './migrate';
import SearchPage from './pages/search-page/search-page';
import { setProducts } from './store/actions/productActions';
import { getProductsFromLocalStorage } from './utils/localStorage';

const App = () => {
   const dispatch = useDispatch();
   const { showRemoveFromBasketModal } = useSelector((state: any) => state.globalStore);

   useEffect(() => {
      const initialProducts = getProductsFromLocalStorage();
      if (initialProducts && initialProducts.length > 0) {
         dispatch(setProducts(initialProducts));
         return;
      }

      const products = migrateLocalStorage();
      dispatch(setProducts(products));
   }, []);

   return (
      <div data-testid="app" className="app">
         <BrowserRouter>
            <Header />
            <Switch>
               <Route path="/ara">
                  <SearchPage />
               </Route>
               <Route path="/">
                  <SearchPage />
               </Route>
            </Switch>
         </BrowserRouter>

         {showRemoveFromBasketModal && <RemoveBasketItemModal />}
      </div>
   );
};

export default App;
