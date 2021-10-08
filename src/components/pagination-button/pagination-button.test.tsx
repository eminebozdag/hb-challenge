import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../store/combine';
import PaginationButton from './pagination-button';

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

describe('<PaginationButton/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = (
         <Provider store={mockStore}>
            <PaginationButton text={''} />
         </Provider>
      );

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('pagination-button-value')).not.toBeNull();
   });
});
