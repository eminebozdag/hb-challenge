import { render } from '@testing-library/react';
import React from 'react';
import SearchBar from './search-bar';

describe('<SearchBar />', () => {
   it('should render successfully', () => {
      // Arrange

      // Act
      const { getByTestId, container } = render(<SearchBar />);

      // Assert
      expect(getByTestId('search-input')).toBeDefined();
      expect(container.innerHTML).toMatchSnapshot();
   });
});
