import { Card, Chip, Link, Stack } from '@mui/material'
import React from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import bitcoin from '../../../../public/assets/bitcoin.png'
import graph1 from '../../../../public/assets/graph1.png'
import pen from '../../../../public/assets/pen.png'
import plusgrid from '../../../../public/assets/plusgrid.png'
import list from '../../../../public/assets/list.png'
import Typography from '../../atoms/MiniteTypography'
import { useNavigate } from 'react-router-dom'

interface WatchListProps {
  height?: number
  width?: number
  currencyType: string
  amount: string
  url: string
}

const WatchList: React.FC<WatchListProps> = ({
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
  const navigate = useNavigate()

  return (
    <>
      <Stack direction={'column'} spacing={0}>
        <Card
          variant='outlined'
          sx={{
            height: 50,
            width: { width },
            alignItems: 'center',
            borderRadius: 0,
            padding:2
          }}
        >
          <Stack spacing={100} direction={'row'}>
            <Stack
              spacing={4}
              alignItems={'center'}
              direction={'row'}
              margin={2}
            >
              <Typography variant='body1'>Watchlist</Typography>
             
              <Link
                  component="button"
                  variant="body1"
                  onClick={() => {
                    console.info("I'm a button.");
                    navigate('/tradeDetails');
                  }}
                >
                  <Typography variant='body1'>Discover assets</Typography>
                </Link>
            </Stack>
            <Stack
              spacing={4}
              alignItems={'center'}
              direction={'row'}
              margin={2}
            >
              <Typography variant='body1'>View watchlist</Typography>
              <MuiIcon
                url={pen}
                height={24}
                width={24}
                onClick={handleNeedHelp}
              />
              <MuiIcon
                url={plusgrid}
                height={24}
                width={24}
                onClick={handleNeedHelp}
              />
              <MuiIcon
                url={list}
                height={24}
                width={24}
                onClick={handleNeedHelp}
              />
            </Stack>
          </Stack>
        </Card>

        <Card
          variant='outlined'
          sx={{
            height: { height },
            width: { width },
            alignItems: 'center',
            borderRadius: 0,
            padding:2

          }}
          onClick={handleNeedHelp}
        >
          <Stack spacing={4} alignItems={'center'} direction={'row'} margin={2}>
            <MuiIcon url={bitcoin} height={42} width={42} />
            <Stack
              spacing={1}
              alignItems={'center'}
              direction={'column'}
              margin={2}
            >
              <Typography variant='body1' fontSize='xl' sx={{ mb: 0.5 }}>
                {currencyType}
              </Typography>
              <Typography variant='body1'>{amount}</Typography>

              <Chip variant='filled' color='info' size='small' label={'24 h'} />
            </Stack>
            <MuiIcon url={graph1} height={100} width={700} />
          </Stack>
        </Card>

       
      </Stack>
    </>
  )
}

export default WatchList
