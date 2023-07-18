import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Currency from '../../States/Currency';


interface WatchListState{
    currencies:Currency[];
}


const initialState:WatchListState={
    currencies:[],
}

const watchlistSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addToWatchList(state=initialState, action:PayloadAction<Currency>) {
     
      
      state.currencies.push(
            action.payload
      )
    },
    removeFromWatchList(state, action:PayloadAction<Currency>) {
      return {
        ...state,
        currencies: state.currencies.filter(
          (currency) => currency.id !== action.payload.id
        ),
      };
    },

    updateWatchList(state, action:PayloadAction<Currency>) {
      
      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency.id === action.payload.id ? action.payload : currency
        ),
      };
    },
  }
})

export const { addToWatchList, removeFromWatchList,updateWatchList } = watchlistSlice.actions
export default watchlistSlice.reducer