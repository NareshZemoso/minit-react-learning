import { Card } from '@mui/material';
import React, { useState } from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 
import CryptoCardMenu from '../CryptoCardMenu';
import { stat } from 'fs';
import bitcoin from '../../../../public/assets/bitcoin.png';
import etherium from '../../../../public/assets/etherium.png';
import  binance from '../../../../public/assets/binance.png';
import  tether from '../../../../public/assets/tether.png';
import  cardano from '../../../../public/assets/cardano.png';
import  xrp from '../../../../public/assets/xrp.png';
import  dogecoin from '../../../../public/assets/dogecoin.png';
import  palkdot from '../../../../public/assets/palkadot.png';
import Typography from '../../atoms/Typography';

interface CryptoCard{
    height:number;
    width:number;
    text:string;   
    
}

const componentsArray = [
    <CryptoCardMenu height={150} width={150} currencyType={'Bitcoin'} amount={'$ 10000'} url={bitcoin}/>,
    <CryptoCardMenu height={150} width={150} currencyType={'Etherium'} amount={'$ 10000'} url={etherium}/>,
    <CryptoCardMenu height={150} width={150} currencyType={'Binance'} amount={'$ 10000'} url={binance}/>,
    <CryptoCardMenu height={150} width={150} currencyType={'Teather'} amount={'$ 10000'} url={tether}/>,
];

const ChooseCryptocard: React.FC<CryptoCard> = ( {height,width,text}) => {


 
  return (
    <Card variant="outlined" sx={{ height:{height},width:{width} ,alignItems:'center',borderRadius:0,textAlign:'left',padding:5}} >    
      
    <Typography variant="h3" alignContent={'flex-start'} fontSize="xl" sx={{ mb: 0.5 }}>
      {text}
    </Typography>
    <span style={{display:'flex',flexDirection:'row'}}>
    {componentsArray.map((component,index) => (<div>{component}</div>))}
    </span>
    <span style={{display:'flex',flexDirection:'row'}}>
    <CryptoCardMenu height={150} width={150} currencyType={'Cardano'} amount={'$ 10000'} url={cardano}/>
    <CryptoCardMenu height={150} width={150} currencyType={'xrp'} amount={'$ 10000'} url={xrp}/>
    <CryptoCardMenu height={150} width={150} currencyType={'Dogecoin'} amount={'$ 10000'} url={dogecoin}/>
    <CryptoCardMenu height={150} width={150} currencyType={'Palkdot'} amount={'$ 10000'} url={palkdot}/>
    </span>
  </Card>
  );
};

export default ChooseCryptocard

