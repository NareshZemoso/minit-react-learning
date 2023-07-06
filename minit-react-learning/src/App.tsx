import React from 'react';
import './App.css';
import Footer from './components/organisms/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      
     <div className="App">
     
     </div>
    
     </ThemeProvider>
  )
}
export default App;
