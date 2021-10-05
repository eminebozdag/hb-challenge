import { render } from '@testing-library/react';
import React from 'react';
import SelectBox from './select-box';

describe('<SelectBox/>', () => {
   it('should be find select box in the component', () => {
      //Arrange
      const component = <SelectBox />;

      //Act
      const { getByTestId } = render(component);

      //Assert
      expect(getByTestId('select-box')).not.toBeNull();
   });
});
