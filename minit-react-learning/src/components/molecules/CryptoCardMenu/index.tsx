import { Card, Stack } from '@mui/material';
import React, { useState } from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 
import bitcoin from '../../../../public/assets/bitcoin.png';
import Typography from '../../atoms/Typography';
import MiniteIconButton from '../../atoms/MiniteButton';
import MiniteButton from '../../atoms/MiniteButton';

interface CryptoCardMenuProps{
    height?:number;
    width?:number;
    currencyType:string;
    amount:string;
    url:string;
}

const CryptoCardMenu: React.FC<CryptoCardMenuProps> = ( {height,width,currencyType,amount,url}) => {


  function handleNeedHelp(): void {
   console.log('Clicked');
   alert('Clicked');
  }

  return (
    
<Card variant="outlined" sx={{ height:{height},width:{width} ,alignItems:'center',borderRadius:0}} onClick={handleNeedHelp}>    
    <Stack spacing={4} alignItems={'center'} direction={'column'} margin={2}>
    <MuiIcon url={url} height={42} width={42} />   
    <Typography variant='body1' fontSize="xl" sx={{ mb: 0.5 }}>
      {currencyType}
    </Typography>
    <Typography variant="body1">
     {amount}
    </Typography>
    </Stack>
  </Card>
  
  );
};

export default CryptoCardMenu

