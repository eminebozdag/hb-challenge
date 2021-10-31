import { render } from '@testing-library/react';
import React from 'react';
import Logo from './logo';

describe('<Logo />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <Logo onClick={Function} />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('logo')).not.toBeNull();
   });
});
