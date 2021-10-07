import { render } from '@testing-library/react';
import React from 'react';
import RemoveBasketItemModal from './remove-basket-item-modal';

describe('<RemoveBasketItemModal />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <RemoveBasketItemModal />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('modal')).not.toBeNull();
   });
});
