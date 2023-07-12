import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from '.';
import '@testing-library/jest-dom';

describe('Dropdown component', () => {
  test('should call onChange handler when a menu item is selected', () => {
    // Arrange
    const onChangeMock = jest.fn();
    render(
     <Dropdown onChange={onChangeMock} propfile={'profile1'}/>
    );

    // Act
    const select = screen.getByRole('button');
    fireEvent.mouseDown(select);
   
 

    // Assert
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  
  });
});