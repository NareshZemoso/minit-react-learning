

import React from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';



interface DropdownProps {
  onChange: () => void;
  propfile: string;
  
}

const Dropdown: React.FC<DropdownProps> = ({ onChange,propfile}) => {
  return (
   
    <FormControl >
    <InputLabel id="dropdownId"></InputLabel>
    <Select
      labelId="dropdownId"
      id="dropdown"
      value={propfile}      
      onChange={onChange}
      size='small'
    >
      <MenuItem value='profile1'>Profile1</MenuItem>
      <MenuItem value='profile2'>Profile2</MenuItem>
      <MenuItem value='profile3'>Profile3</MenuItem>
    </Select>
  </FormControl>
  
   
  );
};

export default Dropdown;