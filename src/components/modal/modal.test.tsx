import { render } from '@testing-library/react';
import React from 'react';
import Modal from './modal';

describe('<Modal />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <Modal />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('modal')).not.toBeNull();
   });
});
