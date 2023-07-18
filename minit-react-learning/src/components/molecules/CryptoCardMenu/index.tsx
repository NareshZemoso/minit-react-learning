import { Card, Stack } from '@mui/material';
import React from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 
import Typography from '../../atoms/MiniteTypography';
import { Portfoliomenu } from '../PortpolioMenuList';

interface CryptoCardMenuProps{
    height?:number;
    width?:number;
    currencyType:string;
    amount:string;
    url:string;
    handleClick: () => void;
}

const CryptoCardMenu: React.FC<CryptoCardMenuProps> = ( {height,width,currencyType,amount,url,handleClick}) => {


  function handleNeedHelp(): void {
   console.log('Clicked');
   alert('Clicked');
  }

  return (
    
<Card variant="outlined" sx={{ height:{height},width:{width} ,alignItems:'center',borderRadius:0, padding:2}} onClick={handleClick}>    
    <Stack spacing={3} alignItems={'center'} direction={'column'} margin={2}>
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

