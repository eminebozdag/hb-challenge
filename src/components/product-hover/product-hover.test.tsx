import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../store/combine';
import ProductHover from './product-hover';

jest.mock('./components/add-cart-button/add-cart-button', () => jest.fn().mockReturnValue(<div data-testid="add-cart-button" />));
jest.mock('./components/disabled-button/disabled-button', () => jest.fn().mockReturnValue(<div data-testid="disabled-button" />));

const mockProduct = {
   id: 0,
   name: 'Apple Telefon',
   price: 778.37,
   oldPrice: 1196.99,
   discountRate: 35,
   availableStock: 1,
   meta: {
      brands: [
         {
            key: 'brand_xiaomi',
            value: 'Xiaomi',
         },
      ],
      colors: [
         {
            key: 'color_sarı',
            value: 'Sarı',
         },
      ],
   },
   image: 'https://productimages.hepsiburada.net/s/49/400-592/10986386358322.jpg',
};

const mockStore = createStore(reducers, {
   productStore: {
      items: [],
      defaultItems: [],
   },
   basketStore: {
      items: [],
   },
   globalStore: {},
} as any);

describe('<ProductHover/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <ProductHover product={mockProduct} />;
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('product-hover')).not.toBeNull();
   });

   it('should render successfully when type is available', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <ProductHover type="AVAILABLE" product={mockProduct} />;
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('add-cart-button')).not.toBeNull();
   });

   it('should render successfully when type is not available', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <ProductHover type="NOT_AVAILABLE" product={mockProduct} />;
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('disabled-button')).not.toBeNull();
   });
});
