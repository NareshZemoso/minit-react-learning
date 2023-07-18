import { configureStore ,applyMiddleware} from '@reduxjs/toolkit';
import currencySlice from '../Reducers/CurrencySlice';
import portFolioSlice from '../Reducers/PortfolioSlice';
import watchListSlice from '../Reducers/WatchListSlice';
import currencyDetailsSlice from '../Reducers/CurrencyDetailSlice';
import thunk from 'redux-thunk';



// Automatically adds the thunk middleware and the Redux DevTools extension
 const minitestore = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
   
   currencyReducer:currencySlice,
   portFolioReducer:portFolioSlice,
   watchListReducer:watchListSlice,
   currencyDetailsReducer:currencyDetailsSlice,
  
  }
})

export default minitestore;