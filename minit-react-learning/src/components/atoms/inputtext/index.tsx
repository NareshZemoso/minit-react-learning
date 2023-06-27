import React, { ChangeEvent } from 'react';

interface TextFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputText: React.FC<TextFieldProps> = ({ value, onChange, placeholder = '', className = '' }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputText;
