import { render } from '@testing-library/react';
import React from 'react';
import DisabledButton from './disabled-button';

describe('<DisabledButton />', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <DisabledButton />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('disabled-button')).not.toBeNull();
   });
});
