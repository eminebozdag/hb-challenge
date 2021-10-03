import React from 'react';
import './app.css';
import Header from './components/header/header';
import SearchPage from './pages/search-page/search-page';

const App = () => {
   return (
      <div className="app">
         <Header />
         <SearchPage />
      </div>
   );
};

export default App;
