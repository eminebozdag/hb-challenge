import { render } from '@testing-library/react';
import React from 'react';
import Filter from './filter';

describe('<Filter/>', () => {
   it('should render successfully', () => {
      // Arrange
      const component = <Filter title={''} values={[]} onSelected={() => {}} />;

      // Act
      const { getByTestId } = render(component);

      // Assert
      expect(getByTestId('filter')).not.toBeNull();
   });
});
