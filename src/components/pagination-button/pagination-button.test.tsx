import { render } from '@testing-library/react';
import React from 'react';
import PaginationButton from './pagination-button';

describe('<PaginationButton/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <PaginationButton />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('pagination-button-value')).not.toBeNull();
   });
});
