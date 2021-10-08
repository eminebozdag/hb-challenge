import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../store/combine';
import Product from './product';

jest.mock('../product-hover/product-hover', () => jest.fn().mockReturnValue(<div data-testid="product-with-hover"></div>));

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

describe('<Product/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <Product product={mockProduct} />
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('product-without-hover')).not.toBeNull();
   });

   it('should render successfully with hover', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <Product product={mockProduct} />
         </Provider>
      );

      // Act
      const { getByTestId, container } = render(component);
      fireEvent.mouseOver(getByTestId('product'));

      // Assert
      expect(getByTestId('product-with-hover')).not.toBeNull();
      expect(container.querySelector('.product__image')).toBeNull();
   });
});
