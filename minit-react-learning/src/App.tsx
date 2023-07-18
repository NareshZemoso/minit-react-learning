import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import SellcheckoutPage from './components/pages/SellcheckoutPage';
import SuccessPage from './components/pages/SuccessPage';
import Login from './components/pages/Login';
import CurrencyDetailsPage from './components/pages/CurrencyDetailsPage';
import TradeDetailsPage from './components/pages/TradeDetailsPage';
import Currency from './redux/States/Currency';
import { useSelector,useDispatch } from 'react-redux';
import { addCurrency,removeCurrency,updateCurrency } from './redux/Reducers/CurrencySlice';
import { addToPortfolio } from './redux/Reducers/PortfolioSlice';

function App() {

  

  const dispatch=useDispatch();

  const [currencies, setCurrencies] = useState<Currency[]>([])

  useEffect(() => {
    
    //using Promise 
    const fetchCurency = () => {
      fetch('http://localhost:3000/currencies')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK')
          }
          return response.json()
        })
        .then(datap => {
          console.log(datap)
          setCurrencies(datap)
         // const arrayString = JSON.stringify(datap)
          //sessionStorage.setItem('data', arrayString)
          datap.map((c: Currency) => dispatch(addCurrency(c)));
          datap.map((c:Currency) => dispatch(addToPortfolio(c)));
                     
        })
        .catch(error => {
          console.log('Error:', error)
        })
    }

  
    console.log('start  ' + currencies)
    if (currencies !== null && currencies.length >0) {
     // setCurrencies(currencies)
      console.log('if data ' + currencies)
    } else {
      //fetchData();
      fetchCurency()
      console.log('else data ' + currencies)
    }
    // Call the async function to fetch data
  }, []) // Empty dependency array to run the effect only once

   
  return (

    <ThemeProvider theme={theme}>      
     <div className="App">
    
     <Router>
      <div>
        {/* Define your routes using the Routes and Route components */}
        <Routes>
          <Route path="/"  element={<Login clientid={''}/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
          <Route path="/sellCheckout" element={<SellcheckoutPage />} />
          <Route path="/success"  element={<SuccessPage/>} />
          <Route path="/tradeDetails"  element={<TradeDetailsPage/>} />
          <Route path="/currencyDetails"  element={<CurrencyDetailsPage/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>     
     </div>    
     </ThemeProvider>
  )
}
export default App;
