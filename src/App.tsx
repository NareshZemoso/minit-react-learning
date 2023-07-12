import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import SellcheckoutPage from './components/pages/SellcheckoutPage';
import SuccessPage from './components/pages/SuccessPage';

function App() {

  return (
    <ThemeProvider theme={theme}>      
     <div className="App">
     <Router>
      <div>
        {/* Define your routes using the Switch and Route components */}
        <Routes>
          <Route path="/"  element={<Dashboard/>} />
          <Route path="sellCheckout" element={<SellcheckoutPage />} />
          <Route path="success"  element={<SuccessPage/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>     
     </div>    
     </ThemeProvider>
  )
}
export default App;
