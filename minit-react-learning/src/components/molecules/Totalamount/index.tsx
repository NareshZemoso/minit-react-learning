import { Card, Typography } from '@mui/joy';
import React, { useState } from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 

interface TotalamountProps{
    maxWidth:number;
    iconUrl:string;
    cardWidth:number;
    cardHeight:number;
}

const Totalamount: React.FC<TotalamountProps> = ( ) => {


  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
    
    <MuiIcon url='../../../static/bitcoin.png'/>
    <Typography level="h1">Total Balance</Typography>
    <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
      Bitcoin
    </Typography>
    <Typography level="body1">
      100 $
    </Typography>
  </Card>
  );
};

export default Totalamount

