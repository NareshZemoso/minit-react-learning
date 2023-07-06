import { Card, Stack } from '@mui/material'
import React from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import Typography from '../../atoms/Typography'
import portpoliograph2 from '../../../../public/assets/portpoliograph2.png'

interface MyportfolioValueProps {
  height?: number
  width?: number
  currencyType: string
  amount: string
  url: string
}

const MyportfolioValue: React.FC<MyportfolioValueProps> = ({
  height,
  width,
  currencyType,
  amount,
  url
}) => {
  function handleNeedHelp (): void {
    console.log('Clicked')
    alert('Clicked')
  }

  return (
    <>
      <Stack direction={'column'} spacing={5} alignItems={'center'}>
        <Card
          variant='outlined'
          sx={{
            height: 462,
            width: { width },
            alignItems: 'center',
            borderRadius: 0,
            padding: 2,
            justifyContent:'center'
          }}
        >
          <Typography variant='body1' alignItems={'start'}>
            My portfolio value
          </Typography>

          <Card
            variant='outlined'
            sx={{
              height: 90,
              width: 792,
              alignItems: 'center',
              borderRadius: 0,
              margin: 3,
              padding: 2
            }}
          >
            <Stack direction={'column'} spacing={2}>
              <Typography variant='body1' alignItems={'start'}>
                Total investment
              </Typography>
              <Typography variant='body1' alignItems={'start'}>
                $ 76766.000
              </Typography>
            </Stack>
          </Card>
          <Stack alignItems={'center'} marginTop={10}>
          <MuiIcon url={portpoliograph2} height={223} width={297} />
          </Stack>  
        </Card>
      </Stack>
    </>
  )
}

export default MyportfolioValue
