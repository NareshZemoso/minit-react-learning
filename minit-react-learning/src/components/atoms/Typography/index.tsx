import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body', className = '', children }) => {
  const renderTypography = () => {
    switch (variant) {
      case 'h1':
        return <h1 className={className}>{children}</h1>;
      case 'h2':
        return <h2 className={className}>{children}</h2>;
      case 'h3':
        return <h3 className={className}>{children}</h3>;
      case 'h4':
        return <h4 className={className}>{children}</h4>;
      case 'h5':
        return <h5 className={className}>{children}</h5>;
      case 'h6':
        return <h6 className={className}>{children}</h6>;
      case 'caption':
        return <span className={className}>{children}</span>;
      default:
        return <p className={className}>{children}</p>;
    }
  };

  return renderTypography();
};

export default Typography;
