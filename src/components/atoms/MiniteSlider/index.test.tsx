import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MiniteSlider from '.'
import '@testing-library/jest-dom';

describe('Slider Component', () => {
  it('renders the slider correctly', () => {
    const { getByRole } = render(<MiniteSlider sliderOrientation={'vertical'} value={1} />);
    const sliderElement = getByRole('slider');
    expect(sliderElement).toBeInTheDocument();
  });

  it('sets the initial value correctly', () => {
    const initialValue = 50;
    const { getByRole } = render(<MiniteSlider defaultValue={initialValue} sliderOrientation={'vertical'} value={0} />);
    const sliderElement = getByRole('slider');
    expect(sliderElement).toHaveAttribute('aria-valuenow', initialValue.toString());
  });

});
