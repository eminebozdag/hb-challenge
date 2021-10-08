/* eslint-disable import/first */
const mockPush = jest.fn();
jest.mock('react-router-dom', () => {
   return {
      useLocation: jest.fn().mockReturnValue({ search: '' }),
      useHistory: jest.fn().mockReturnValue({
         push: mockPush,
      }),
   };
});

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Header from './header';

jest.mock('./components/basket/basket', () => jest.fn().mockReturnValue(<div />));
jest.mock('./components/logo/logo', () => jest.fn().mockReturnValue(<div />));

describe('<Header/>', () => {
   afterEach(() => {
      jest.clearAllMocks();
   });

   it('should render successfully', () => {
      // Arrange
      const component = <Header />;

      // Act
      const { container } = render(component);

      // Assert
      expect(container.querySelector('.header__logo')).not.toBeNull();
      expect(container.querySelector('.header__search-bar')).not.toBeNull();
      expect(container.querySelector('.header__basket')).not.toBeNull();
   });

   it('should call history.push() when onSearch triggered', () => {
      // Arrange
      const expectedSearchText = 'my search text';
      const component = <Header />;
      const { getByTestId } = render(component);
      const input = getByTestId('search-input');
      const query = new URLSearchParams();
      query.set('q', expectedSearchText);

      // Act
      fireEvent.change(input, { target: { value: expectedSearchText } });

      // Assert
      expect(mockPush.mock.calls.length).toBe(1);
      expect(mockPush.mock.calls[0][0]).toBe(`/ara?${query.toString()}`);
   });

   it('should call history.push() when onSearch triggered and search text character count lower than 2', () => {
      // Arrange
      const expectedSearchText = 'm';
      const component = <Header />;
      const { getByTestId } = render(component);
      const input = getByTestId('search-input');

      // Act
      fireEvent.change(input, { target: { value: expectedSearchText } });

      // Assert
      expect(mockPush.mock.calls.length).toBe(1);
      expect(mockPush.mock.calls[0][0]).toBe(`/ara?`);
   });
});
