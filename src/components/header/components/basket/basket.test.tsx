import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Basket from './basket';

jest.mock('./components/basket-item/basket-item', () => jest.fn().mockReturnValue(<div />));

describe('<Basket />', () => {
   it('should render successfully without hover', () => {
      // Arrange
      const component = <Basket />;

      // Act
      const { getByTestId, container } = render(component);

      // Assert
      expect(getByTestId('basket__detail-without-hover')).not.toBeNull();
      expect(container.querySelector('basket__detail-with-hover')).toBeNull();
   });

   it('should render successfully with hover', () => {
      // Arrange
      const component = <Basket />;

      // Act
      const { getByTestId } = render(component);
      fireEvent.mouseOver(getByTestId('basket'));

      // Assert
      expect(getByTestId('basket-button-count')).not.toBeNull();
      expect(getByTestId('basket__detail-without-hover')).not.toBeNull();
      expect(getByTestId('basket__detail-with-hover')).not.toBeNull();
   });
});
