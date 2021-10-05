import { render } from '@testing-library/react';
import React from 'react';
import Header from './header';

jest.mock('./components/basket/basket', () => jest.fn().mockReturnValue(<div />));
jest.mock('./components/logo/logo', () => jest.fn().mockReturnValue(<div />));
jest.mock('./components/search-bar/search-bar', () => jest.fn().mockReturnValue(<div />));

describe('<Header/>', () => {
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
});
