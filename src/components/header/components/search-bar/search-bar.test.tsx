import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SearchBar from './search-bar';

describe('<SearchBar />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <SearchBar onSearch={() => {}} />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('search-input')).not.toBeNull();
   });

   it('should call onSearch function when user typing', () => {
      // Arrange
      const expectedSearchText = 'search text';
      const handleSearch = jest.fn();
      const component = <SearchBar onSearch={handleSearch} />;
      const { getByTestId } = render(component);
      const input = getByTestId('search-input');

      // Act
      fireEvent.change(input, { target: { value: expectedSearchText } });

      // Assert
      expect(input).not.toBeNull();
      expect(handleSearch.mock.calls.length).toBe(1);
      expect(handleSearch.mock.calls[0][0]).toBe(expectedSearchText);
   });
});
