import { render } from '@testing-library/react';
import React from 'react';
import AddCartButton from './add-cart-button';

describe('<AddCartButton/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <AddCartButton />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('add-cart-button')).not.toBeNull();
   });
});
