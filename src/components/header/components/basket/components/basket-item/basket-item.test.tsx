import { render } from '@testing-library/react';
import React from 'react';
import BasketItem from './basket-item';

describe('<BasketItem />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <BasketItem item={{} as any} onDelete={() => {}} />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('basket-item')).not.toBeNull();
   });
});
