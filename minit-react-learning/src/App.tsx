import React from 'react';
import './App.css';
import Footer from './components/organisms/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Footer height={100} width={1236}/>
     </div>
     </ThemeProvider>
  )
}
export default App;
