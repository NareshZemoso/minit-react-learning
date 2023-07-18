import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Currency from '../../States/Currency';


interface PortFolioState{
    currencies:Currency[];
}


const initialState:PortFolioState={
    currencies:[],
}

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addToPortfolio(state=initialState, action: PayloadAction<Currency>) {
      state.currencies.push(
            action.payload
      )
    },
    removeFromPortFolio(state, action:PayloadAction<Currency>) {
      return {
        ...state,
        currencies: state.currencies.filter(
          (currency) => currency.id !== action.payload.id
        ),
      };
    },

    updatePortfolio(state, action:PayloadAction<Currency>) {
      
      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency.id === action.payload.id ? action.payload : currency
        ),
      };
    },
  }
})

export const { addToPortfolio, removeFromPortFolio,updatePortfolio } = portfolioSlice.actions
export default portfolioSlice.reducer