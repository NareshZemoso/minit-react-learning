import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Currency from '../../States/Currency';


export interface CurrencyDetailsState{
    currencies:Currency[];
}


const initialState:CurrencyDetailsState={
    currencies:[]
}

const currencyDetailsSlice = createSlice({
  name: 'currencydetails',
  initialState,
  reducers: {
    addCurrencyDetails(state=initialState, action:PayloadAction<Currency>) {
      
      
      
     // const newState = { ...state };      
      // Update the currency at index zero
     // if(newState.currencies.length>0){
     //   newState.currencies[0] = action.payload;
     // }else{
     //   newState.currencies.push(action.payload);
    //  }
      state.currencies.push(action.payload);
    
    },
    removeCurrencyDetails(state, action:PayloadAction<Currency>) {
      return {
      ...state,
      currencies: state.currencies.filter(
        (currency) => currency.id !== action.payload.id
      ),
      }
       //state.currencies.filter(currency => currency.id !== action.payload.id)
     //filter
    },

    updateCurrencyDetails(state, action:PayloadAction<Currency>) {
      
      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency.id === action.payload.id ? action.payload : currency
        ),
      };
    },
  }
})

export const { addCurrencyDetails,removeCurrencyDetails,updateCurrencyDetails } = currencyDetailsSlice.actions
export default currencyDetailsSlice.reducer