import { Card, Stack } from '@mui/material'
import React from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import Typography from '../../atoms/MiniteTypography'

interface PortpolioMenuProps {
  height?: number
  width?: number
  currencyType: string
  amount: string
  url: string
  code: string
  increment: string
}

const PortpolioMenu: React.FC<PortpolioMenuProps> = ({
  height,
  width,
  currencyType,
  amount,
  url,
  code,
  increment
}) => {
  function handleNeedHelp (): void {
    console.log('Clicked')
    alert('Clicked')
  }

  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: { width },
        alignItems: 'left',
       
      }}
      onClick={handleNeedHelp}
    >
      <Stack spacing={40} direction={'row'} alignItems={'center'}>
        <Stack spacing={4} alignItems={'center'} direction={'row'} margin={2}>
          <MuiIcon url={url} height={42} width={42} />
          <Stack
            spacing={1}
            alignItems={'center'}
            direction={'column'}
            margin={2}
          >
            <Typography variant='body1'>
              {currencyType}
            </Typography>
            <Typography variant='body1'>{code}</Typography>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          alignItems={'left'}
          direction={'column'}
          marginLeft={2}
        >
          <Typography variant='body1'>{amount}</Typography>
          <Typography variant='body1'>{increment}</Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default PortpolioMenu
