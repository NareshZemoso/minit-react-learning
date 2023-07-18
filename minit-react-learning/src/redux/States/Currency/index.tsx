import { ADD_CURRENCY, REMOVE_CURRENCY, UPDATE_CURRENCY } from "../../constants";

export  default interface Currency{
    id:number;
    amount:string;
    currencyType:string;
    code:string;
    url:string;
    sold:boolean;
    increment:string;
    price:string;
    marketcapital:string;
    watch:boolean;
    circulatingsupply:string
}

export interface CurrencyArray{
    currencies:Currency[];
}

