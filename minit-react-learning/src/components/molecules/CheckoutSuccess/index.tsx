import { Card, Stack } from '@mui/material';
import React, { useState } from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 
import CryptoCardMenu from '../CryptoCardMenu';
import MiniteButton from '../../atoms/MiniteButton';
import success from '../../../../public/assets/success.png';
import Typography from '../../atoms/Typography';
import MiniteTypography from '../../atoms/Typography';

interface CheckoutSuccessProps{
    height:number;
    width:number;
    text:string;
    url:string;
}
const handleNeedHelp = () => {
    console.log("Need help");
    alert('Need help');
  };

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ( {height,width,text,url}) => {


  return (
    <Card variant="outlined" sx={{ height:{height},width:{width} ,alignItems:'center',borderRadius:0}} >    
     
     <Stack spacing={1} alignItems={'center'} direction={'column'}>  
    <MuiIcon url={success} height={64} width={64}/>
    <Typography variant="body1" alignContent={'flex-start'} fontSize="xl" sx={{ mb: 0.5 }}>
      {text}
    </Typography>
    <span style={{display:'flex',flexDirection:'row'}}>
    1000 BTC
    </span>
    <span style={{display:'flex',flexDirection:'row'}}>
    Sell is completed please check your balance in Rupee coin
    </span>

    <Stack spacing={4} alignContent={'center'} direction={'row'}> 
    <MiniteButton onClick={handleNeedHelp} variant={'outlined'} size={'medium'} >
      <MiniteTypography variant='body1' children='SELL CRYPTO'/>
      </MiniteButton>
    <MiniteButton onClick={handleNeedHelp} variant={'contained'} size={'medium'} >
    <MiniteTypography variant='body1' children='GO TO USD'color={'white'}/>
      </MiniteButton>
    </Stack> 
    </Stack>
  </Card>
  );
};

export default CheckoutSuccess

