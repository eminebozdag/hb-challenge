import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SelectBox from './select-box';

describe('<SelectBox/>', () => {
   it('should be find select box in the component', () => {
      //Arrange
      const component = <SelectBox defaultText={''} items={[]} onChange={() => {}} />;

      //Act
      const { getByTestId } = render(component);

      //Assert
      expect(getByTestId('select-box')).not.toBeNull();
   });

   it('should call onChange callback when selected an item', () => {
      //Arrange
      const mockOnChange = jest.fn();
      const expectedItem = {
         text: 'Item',
         value: 'value',
      };
      const component = <SelectBox defaultText="Sıralama" items={[expectedItem]} onChange={mockOnChange} />;
      const { getByTestId } = render(component);
      const select = getByTestId('select-box');

      //Act
      fireEvent.change(select, { target: { value: 'value' } });

      //Assert
      expect(getByTestId('select-box')).not.toBeNull();
      expect(mockOnChange.mock.calls.length).toBe(1);
      expect(mockOnChange.mock.calls[0][0]).toBe(expectedItem);
   });
});
