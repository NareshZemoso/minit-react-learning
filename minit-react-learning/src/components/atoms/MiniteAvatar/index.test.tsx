import React from 'react';
import { getByAltText, render, screen } from '@testing-library/react';
import MiniteAvatar from './index';
import '@testing-library/jest-dom';

describe('Avatar', () => {
  it('renders the avatar image with the provided src', () => {
    const avatarSrc = '/public/assets/avatar.png';
    const alt = 'Avatar';
    const { getByAltText } =render(<MiniteAvatar imageUrl={avatarSrc} altText={alt} />);
    const imageElement = getByAltText(alt);
    expect(imageElement).toBeInTheDocument();
   
    
  });

 
});