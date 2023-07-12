import React from 'react';
import { render } from '@testing-library/react';
import MiniteTypography from '.'
import '@testing-library/jest-dom';

describe('Typography Component', () => {
  it('renders the text correctly', () => {
    const text = 'Hello, World!';
    const { getByText } = render(<MiniteTypography>{text}</MiniteTypography>);
    const renderedText = getByText(text);
    expect(renderedText).toBeInTheDocument();
  });

  it('applies the specified variant', () => {
    const text = 'Hello, World!';
    const variant = 'h1';
    const { container } = render(<MiniteTypography variant={variant}>{text}</MiniteTypography>);
    const typographyElement = container.firstChild;
    expect(typographyElement).toHaveClass(`MuiTypography-${variant}`);
  });

  it('applies additional CSS classes', () => {
    const text = 'Hello, World!';
    const className = 'custom-class';
    const { container } = render(<MiniteTypography className={className}>{text}</MiniteTypography>);
    const typographyElement = container.firstChild;
    expect(typographyElement).toHaveClass(className);
  });
});
