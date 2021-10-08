/* eslint-disable import/first */
const mockGetProductsFromLocalStorage = jest.fn();
jest.mock('./utils/localStorage', () => {
   return {
      getProductsFromLocalStorage: mockGetProductsFromLocalStorage,
   };
});

import { render } from '@testing-library/react';
import React from 'react';
import App from './app';

jest.mock('react-redux', () => {
   return {
      useDispatch: jest.fn().mockReturnValue(jest.fn()),
      useSelector: jest.fn().mockReturnValue({ showRemoveFromBasketModal: false }),
   };
});

jest.mock('./migrate', () => {
   return {
      migrateLocalStorage: jest.fn(),
   };
});

jest.mock('./components/header/header', () => jest.fn().mockReturnValue(<div data-testid="header" />));
jest.mock('./pages/search-page/search-page', () => jest.fn().mockReturnValue(<div data-testid="search-page" />));

describe('<App />', () => {
   afterEach(() => {
      jest.clearAllMocks();
   });

   it('should render succesfully', () => {
      // Arrange
      const component = <App />;

      // Act
      const { getByTestId } = render(component);
      const app = getByTestId('app');

      // Assert
      expect(app).not.toBeNull();
   });

   it('should render succesfully with product from local storage', () => {
      // Arrange
      const component = <App />;
      mockGetProductsFromLocalStorage.mockReturnValue([{} as any]);

      // Act
      const { getByTestId } = render(component);
      const app = getByTestId('app');

      // Assert
      expect(app).not.toBeNull();
   });
});
