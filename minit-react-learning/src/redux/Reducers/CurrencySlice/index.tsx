import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Currency from '../../States/Currency';


export interface CurrencyState{
    currencies:Currency[];
}


const initialState:CurrencyState={
    currencies:[],
}

const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    addCurrency(state=initialState, action:PayloadAction<Currency>) {
      state.currencies.push(
            action.payload
      )
    },
    removeCurrency(state, action:PayloadAction<Currency>) {
      return {
      ...state,
      currencies: state.currencies.filter(
        (currency) => currency.id !== action.payload.id
      ),
      }
       //state.currencies.filter(currency => currency.id !== action.payload.id)
     //filter
    },

    updateCurrency(state, action:PayloadAction<Currency>) {
      
      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency.id === action.payload.id ? action.payload : currency
        ),
      };
    },
  }
})

export const { addCurrency, removeCurrency,updateCurrency } = currencySlice.actions
export default currencySlice.reducer