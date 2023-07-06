
import React, { useState } from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import Typography from '../../atoms/Typography'
import { Card, Stack } from '@mui/material'

interface DepositToProps {
  iconUrl: string;
  height: number;
  width: number;
}

const DepositTo: React.FC<DepositToProps> = ({
  iconUrl,
  height,
  width,
}) => {
  return (
    <Card
      variant='outlined'
      sx={{ height:{height},width:{width} ,alignItems:'center',padding:5,borderRadius:0,textAlign:'left'}}
    >
      <Typography variant='h3'>Deposit to</Typography>
      <Card variant='outlined' sx={{ }}>
        <Stack spacing={100} direction={'row'}>
          <Stack spacing={2} direction={'row'} padding={4} alignItems={'center'}>
            <MuiIcon url={iconUrl} height={32} width={32} />
            <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
             USD Coin Cash
            </Typography>
          </Stack>
          <Stack padding={4} alignItems={'center'}><Typography variant='body1'>default</Typography></Stack>
          
        </Stack>
      </Card>
    </Card>
  )
}

export default DepositTo
