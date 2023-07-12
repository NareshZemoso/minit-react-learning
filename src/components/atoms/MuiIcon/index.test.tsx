import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MuiIcon from '.';  
import '@testing-library/jest-dom';




describe('MuiIcon Component', () => {
  it('renders the icon image correctly', () => {
    const avatarSrc = '/public/assets/avatar.png';
    const handleClick = jest.fn();
    const { getByRole } = render(<MuiIcon  onClick={handleClick} height={32} width={32} url={avatarSrc} />);
    const imageElement = getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });

  it('calls the onClick callback correctly', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<MuiIcon  onClick={handleClick} height={32} width={32} url={'./public/assets/avatar.png'} />);
    const imageElement = getByRole('img');
    expect(imageElement).toBeInTheDocument();
    
  });

 
});
