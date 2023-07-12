import { Card, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import MiniteButton from '../../atoms/MiniteButton'
import bitcoinwallet from '../../../../public/assets/bitcoinwallet.png'
import delivery from '../../../../public/assets/delivery.png'
import rupeecoin from '../../../../public/assets/rupeecoin.png'
import Typography from '../../atoms/MiniteTypography'
import { ordersummary } from '../../../utils/constants'

interface OrderSummaryProps {
  width: number
  height: number
  onClick: () => void
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  width,
  height,
  onClick
}) => {
  return (
    <Card sx={{ height: { height }, width: { width }, padding: 5 }}>
     <Stack spacing={10} direction={'column'} >

      <Stack spacing={5} direction={'column'} alignItems={'center'}>
        <Typography variant='body1'>{ordersummary.selllabel}</Typography>
        <Typography variant='h2'>{ordersummary.sellvalue}</Typography>
        <Typography variant='body1'>{ordersummary.btc}</Typography>
      </Stack>

      <Card sx={{ height: 200, width: 200 }}>
        <Stack spacing={10} direction={'column'} marginLeft={5}>
          <Stack spacing={2} direction={'row'}>
            <MuiIcon url={bitcoinwallet} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
              {ordersummary.paylabel}
            </Typography>
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <MuiIcon url={delivery} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
              {ordersummary.deliverylabel}
            </Typography>
          </Stack>
          <Stack spacing={2} direction={'row'}>
            <MuiIcon url={rupeecoin} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
              {ordersummary.depositlabel}
            </Typography>
          </Stack>
        </Stack>
      </Card>

      <Stack spacing={5} direction={'column'} alignItems={'left'}>
        <Typography variant='body1'>{ordersummary.soldvalue}</Typography>
        <Typography variant='body1'>{ordersummary.transactionfee}</Typography>
        <Typography variant='h2'>{ordersummary.total}</Typography>
        
      </Stack>
          <Stack alignItems={'center'}>
          <MiniteButton onClick={onClick} variant={'contained'} size={'medium'}>
              <Typography variant='body1' color={'white'}>
                {ordersummary.sellnow}
              </Typography>
            </MiniteButton>
            </Stack>
      </Stack>
    </Card>
  )
}

export default OrderSummary
