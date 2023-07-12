import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MiniteIconButton from '.';
import dashboard from '../../../../public/assets/dashboard.png';
import '@testing-library/jest-dom';


describe('IconButton Component', () => {
  it('renders the icon button correctly', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<MiniteIconButton icon={'A'} onClick={handleClick} height={32} width={32} />);
    const iconButtonElement = getByRole('button');
    expect(iconButtonElement).toBeInTheDocument();
  });

  it('calls the onClick callback correctly', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<MiniteIconButton icon={'A'} onClick={handleClick} height={32} width={32} />);
    const iconButtonElement = getByRole('button');
    fireEvent.click(iconButtonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

 
});
