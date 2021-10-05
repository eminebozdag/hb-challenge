import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Product from './product';

jest.mock('../product-hover/product-hover', () => jest.fn().mockReturnValue(<div data-testid="product-with-hover"></div>));

describe('<Product/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <Product />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('product-without-hover')).not.toBeNull();
   });

   it('should render successfully with hover', () => {
      // Arrange
      const component = <Product />;

      // Act
      const { getByTestId, container } = render(component);
      fireEvent.mouseOver(getByTestId('product'));

      // Assert
      expect(getByTestId('product-with-hover')).not.toBeNull();
      expect(container.querySelector('.product__image')).toBeNull();
   });
});
