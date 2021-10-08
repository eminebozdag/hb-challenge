import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../../../../../store/combine';
import RemoveBasketItemModal from './remove-basket-item-modal';

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

describe('<RemoveBasketItemModal />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <RemoveBasketItemModal />
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('modal')).not.toBeNull();
   });
});
