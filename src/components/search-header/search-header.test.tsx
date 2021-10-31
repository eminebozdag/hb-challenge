import { render } from '@testing-library/react';
import React from 'react';
import SearchHeader from './search-header';

describe('<SearchHeader/>', () => {
   it('Should be find search title and detail', () => {
      //Arrange
      const component = <SearchHeader title={''} />;

      //Act
      const { getByTestId } = render(component);

      //Assert
      expect(getByTestId('search-header-title')).not.toBeNull();
      expect(getByTestId('search-header-detail')).not.toBeNull();
   });
});
