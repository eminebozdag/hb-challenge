import { render } from '@testing-library/react';
import React from 'react';
import ProductHover from './product-hover';

jest.mock('./components/add-cart-button/add-cart-button', () => jest.fn().mockReturnValue(<div data-testid="add-cart-button" />));
jest.mock('./components/disabled-button/disabled-button', () => jest.fn().mockReturnValue(<div data-testid="disabled-button" />));

describe('<ProductHover/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <ProductHover />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('product-hover')).not.toBeNull();
   });

   it('should render successfully when type is available', () => {
      // Arrange
      const component = <ProductHover type="AVAILABLE" />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('add-cart-button')).not.toBeNull();
   });

   it('should render successfully when type is not available', () => {
      // Arrange
      const component = <ProductHover type="NOT_AVAILABLE" />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('disabled-button')).not.toBeNull();
   });
});
