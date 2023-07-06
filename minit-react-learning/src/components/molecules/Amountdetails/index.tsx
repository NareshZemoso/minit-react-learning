import { Card, Stack } from '@mui/material'
import React, { useState } from 'react'
import MiniteButton from '../../atoms/MiniteButton'
import Typography from '../../atoms/Typography'
import MiniteSlider from '../../atoms/MiniteSlider'
import MiniteTypography from '../../atoms/Typography'

interface AmountDetailsProps {
  width: number
  height: number
  onClick: () => void
}
const handleChange=() =>{
  alert('Slider chnaged');
};

const AmountDetails: React.FC<AmountDetailsProps> = ({
  width,
  height,
  onClick
}) => {
  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: { width },
        alignItems: 'center',
        borderRadius: 0,
        textAlign: 'left',
        padding: 5
      }}
    >
      <Typography variant='h3'>Amount details</Typography>

      <Stack  direction={'column'}>
        <Card variant='outlined' sx={{ padding: 2, height: 74, width: 662,alignItems:'center' }}>
          <Stack spacing={100} direction={'row'} alignItems={'center'} margin={5}>
            <Typography variant='body1'> 0.100</Typography>
            <MiniteButton onClick={onClick} variant={'outlined'} size={'large'}>
              sell max
            </MiniteButton>
          </Stack>
        </Card>
        <Stack spacing={0} direction={'row'} alignItems={'center'} alignContent={'center'}>
          <MiniteSlider
            sliderOrientation={'vertical'}
            sliderHeight={100}
            sliderWidth={1} value={0}  />
          <MiniteTypography variant='body1' children='BTC = $ 378.89' />
        </Stack>
        <Card variant='outlined' sx={{ padding: 2, height: 74, width: 662,alignItems:'center' }}>
          <Stack spacing={100} direction={'row'} alignItems={'center'} margin={5}>
            <Typography variant='body1'>$ 100</Typography>
            <Typography variant='body1'>USD Coin (Cash)</Typography>
          </Stack>
        </Card>
      </Stack>
    </Card>
  )
}

export default AmountDetails
