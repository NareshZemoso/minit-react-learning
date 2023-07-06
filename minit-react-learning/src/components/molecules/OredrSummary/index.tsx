import { Card, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import MiniteButton from '../../atoms/MiniteButton'
import bitcoinwallet from '../../../../public/assets/bitcoinwallet.png';
import delivery from '../../../../public/assets/delivery.png';
import rupeecoin from '../../../../public/assets/rupeecoin.png';
import Typography from '../../atoms/Typography';

interface OrderSummaryProps {  
  width: number;
  height: number;
  onClick:() =>void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  width,
  height,
  onClick
}) => {
  return (
    <Card
            sx={{ height: { height }, width: { width },padding:5}}
    >
        <Stack spacing={1} direction={'column'} alignItems={'center'} >
        <Typography variant='body1'>Your selling</Typography>
        <Typography variant='body1'>0.87787 BTC</Typography>
        <Typography variant='body1'>1 BTC = $ 787</Typography>
        </Stack>
    
      <Card  sx={{ height: 200, width: 200 }}>
        <Stack spacing={10} direction={'column'} marginLeft={5}>
          <Stack spacing={2} direction={'row'}>
            <MuiIcon url={bitcoinwallet} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
             paying through bitcoin wallet
            </Typography>
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <MuiIcon url={delivery} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
            delivery fees 0.001 BTC
            </Typography>
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <MuiIcon url={rupeecoin} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
            deposit to Rupee coin
            </Typography>
          </Stack>
        </Stack>
      </Card>

      <Stack spacing={1} direction={'column'} alignItems={'center'}>
        <Typography variant='body1'>Your selling</Typography>
        <Typography variant='body1'>0.87787 BTC</Typography>
        <Typography variant='body1'>1 BTC = $ 787</Typography>
        <MiniteButton onClick={onClick} variant={'contained'} size={'medium'} >
        <Typography variant='body1' color={'white'}>SELL NOW</Typography>
          </MiniteButton>
        </Stack>
    </Card>
  )
}

export default OrderSummary
