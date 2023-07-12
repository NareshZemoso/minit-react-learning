import React from 'react';
import { getByAltText, render, screen } from '@testing-library/react';
import MiniteSquarebox from './index';
import '@testing-library/jest-dom';

describe('box', () => {
  it('renders the box the provided ', () => {
    const avatarSrc = '/public/assets/avatar.png';
    const alt = 'box';
    const { getByText } =render(<MiniteSquarebox text={alt} variant={'h1'} textColor={'black'} />);
    const imageElement = getByText(alt);
    expect(imageElement).toBeInTheDocument();
   
    
  });

 
});