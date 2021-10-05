import { render } from '@testing-library/react';
import React from 'react';
import Basket from './basket';

describe('<Basket />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <Basket />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('basket-count')).not.toBeNull();
   });
});
