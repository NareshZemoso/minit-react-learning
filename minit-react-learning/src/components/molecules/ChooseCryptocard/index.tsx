import { Card } from '@mui/material';
import React from 'react';
import CryptoCardMenu from '../CryptoCardMenu';
import Typography from '../../atoms/MiniteTypography';
import Currency from '../../../redux/States/Currency';
import loadImage from '../../atoms/LoadImage';
import { useSelector } from 'react-redux';


interface ChooseCryptocardProps{
    height:number;
    width:number;
    text:string;   
    chooseCrypto:(p:Currency) => void;
  
}


const ChooseCryptocard: React.FC<ChooseCryptocardProps> = ( {height,width,text,chooseCrypto}) => {
  
  var currenciesStore=useSelector((state:any) => state.currencyReducer.currencies);
  var tableData1: any[] = []; 
  var temp: any[] = []; 
  currenciesStore.map((item:Currency) => temp.push({...item}));
  
 
  let start = 0;
  let end = 4;
  while (start < temp.length) {
    const sliced = temp.slice(start, end);
    console.log(sliced);
    tableData1.push(sliced)
    
    // Update start and end indexes for the next iteration
    start += 4;
    end += 4;
  }

  return (
    <Card variant="outlined" sx={{ height:{height},width:{width} ,alignItems:'center',borderRadius:0,textAlign:'left',padding:5}} >    
      
    <Typography variant="h3" >
      {text}
    </Typography>
    <table>
      <tbody>
        {tableData1.map((row:any, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item: Currency, columnIndex: React.Key | null | undefined) => (
              <td key={columnIndex}>
              
              <CryptoCardMenu height={150} width={150} currencyType={item.currencyType} amount={item.amount} url={loadImage(item.url)} handleClick={()=>chooseCrypto(item)}/>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
  );
};

export default ChooseCryptocard

