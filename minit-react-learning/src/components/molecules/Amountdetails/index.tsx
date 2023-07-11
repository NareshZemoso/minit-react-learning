import { Card, Stack } from '@mui/material'
import React, { useState } from 'react'
import MiniteButton from '../../atoms/MiniteButton'
import Typography from '../../atoms/MiniteTypography'
import MiniteSlider from '../../atoms/MiniteSlider'
import MiniteTypography from '../../atoms/MiniteTypography'
import {amountdetails} from '../../../utils/constants'

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
      <Typography variant='h3'>{amountdetails.amountdetails}</Typography>

      <Stack  direction={'column'}>
        <Card variant='outlined' sx={{ padding: 2, height: 74, width: 662,alignItems:'center' }}>
          <Stack spacing={100} direction={'row'} alignItems={'center'} margin={5}>
            <Typography variant='body1'> {amountdetails.amount}</Typography>
            <MiniteButton onClick={onClick} variant={'outlined'} size={'large'}>
              {amountdetails.sellmax}
            </MiniteButton>
          </Stack>
        </Card>
        <Stack spacing={0} direction={'row'} alignItems={'center'} alignContent={'center'}>
          <MiniteSlider
            sliderOrientation={'vertical'}
            sliderHeight={10}
            defaultValue={1}
             value={0}  />
          <MiniteTypography variant='body1' children={amountdetails.btc} />
        </Stack>
        <Card variant='outlined' sx={{ padding: 2, height: 74, width: 662,alignItems:'center' }}>
          <Stack spacing={100} direction={'row'} alignItems={'center'} margin={5}>
            <Typography variant='body1'>{amountdetails.dollers}</Typography>
            <Typography variant='body1'>{amountdetails.usdcoin}</Typography>
          </Stack>
        </Card>
      </Stack>
    </Card>
  )
}

export default AmountDetails
