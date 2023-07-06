import { Card, Stack } from '@mui/material';
import React, { useState } from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 
import Typography from '../../atoms/Typography';


interface TotalBalanceProps{
    iconUrl:string;
    height:number;
    width:number;
}

const TotalBalance: React.FC<TotalBalanceProps> = ({iconUrl,height,width} ) => {


  return (
    <Card variant="outlined" sx={{height:height, width:width,padding:5}}>
      
    <Typography variant="h3">Total Balance</Typography>
    <Card variant="outlined" sx={{padding:3,alignItems:'center'}} >
    <Stack spacing={100} direction={'row'} alignItems={'center'}>
    <Stack spacing={2} direction={'row'} alignItems={'center'}>
    <MuiIcon url={iconUrl} height={32} width={32}/>
    <Typography variant="body1" fontSize="xl" sx={{ mb: 0.5,alignItems:'center' }}>
      Bitcoin
    </Typography>
    </Stack>
    <Typography variant="body1">
      100 BTC
    </Typography>
    </Stack>
    </Card>
  </Card>
  );
};

export default TotalBalance

