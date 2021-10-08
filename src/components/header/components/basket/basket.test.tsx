import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../../../store/combine';
import Basket from './basket';

jest.mock('./components/basket-item/basket-item', () => jest.fn().mockReturnValue(<div />));

const mockStore = createStore(reducers, {
   basketStore: {
      items: [],
   },
});

describe('<Basket />', () => {
   it('should render successfully without hover', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <Basket />
         </Provider>
      );

      // Act
      const { getByTestId, container } = render(component);

      // Assert
      expect(getByTestId('basket__detail-without-hover')).not.toBeNull();
      expect(container.querySelector('basket__detail-with-hover')).toBeNull();
   });

   it('should render successfully with hover', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <Basket />
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);
      fireEvent.mouseOver(getByTestId('basket'));

      // Assert
      expect(getByTestId('basket-button-count')).not.toBeNull();
      expect(getByTestId('basket__detail-without-hover')).not.toBeNull();
      expect(getByTestId('basket__detail-with-hover')).not.toBeNull();
   });
});
