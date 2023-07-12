import {ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import theme from '../src/theme'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
   
    <ThemeProvider theme={theme}>
      
      <Story />
    
    </ThemeProvider>
   
  ),
];
