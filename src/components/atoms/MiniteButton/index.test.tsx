import { render, fireEvent } from '@testing-library/react';
import MiniteButton from '.';
import '@testing-library/jest-dom';

describe('Button component', () => {
  test('should call onClick handler when the button is clicked', () => {
    // Arrange
    const onClickMock = jest.fn();
    const { getByText } = render(<MiniteButton onClick={onClickMock} variant={'outlined'} size={'small'} >Click me</MiniteButton>);

    // Act
    const button = getByText('Click me');
    fireEvent.click(button);

    // Assert
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
