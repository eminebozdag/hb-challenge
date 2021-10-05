import { render } from '@testing-library/react';
import React from 'react';
import SearchBar from './search-bar';

describe('<SearchBar />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <SearchBar />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('search-input')).not.toBeNull();
   });
});
