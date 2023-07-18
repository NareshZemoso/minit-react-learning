import { Box, Card, Hidden, Stack } from '@mui/material'
import React from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import Typography from '../../atoms/MiniteTypography'
import MiniteIconButton from '../../atoms/MiniteIconButton'
import loadImage from '../../atoms/LoadImage'

interface CurrencyMenuProps {
  height?: number
  width?: number
  currencyType: string
  code: string
  price: string
  change: string
  marketcap: string
  watch: boolean
  url: string
  handleClick: () => void
  handleWatchList: () => void
}

const CurrencyMenu: React.FC<CurrencyMenuProps> = ({
  height,
  width,
  currencyType,
  code,
  price,
  change,
  marketcap,
  watch,
  url,
  handleClick,
  handleWatchList
}) => {
  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: { width },
        alignItems: 'start',
        borderRadius: 0
      }}
    >
      <Stack spacing={30} alignItems={'start'} direction={'row'} margin={2}>
        <Box height={42} width={300}>
          <Stack direction={'row'} spacing={2} margin={2}>
            <MuiIcon url={url} height={42} width={42} onClick={handleClick} />
            <Stack direction={'column'} spacing={1}>
              <Typography variant='body1'>{currencyType}</Typography>
              <Typography variant='body1'>{code}</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box height={42} width={200}>
          <Typography variant='body1'>{price}</Typography>
        </Box>
        <Box height={42} width={300}>
          <Typography variant='body1'>{change}</Typography>
        </Box>
        <Box height={42} width={200}>
          <Typography variant='body1'>{marketcap}</Typography>
        </Box>
        <Box height={42} width={0}>
          <Typography variant='body1'>{watch}</Typography>
        </Box>
        <Box height={42} width={200}>
          <div hidden={watch}>
            <MiniteIconButton
              icon={loadImage('emptystar')}
              onClick={handleWatchList}
              height={20}
              width={20}
            />
          </div>
          <div hidden={!watch}>
            <MiniteIconButton
              icon={loadImage('fillstar')}
              onClick={handleWatchList}
              height={32}
              width={32}
            />
          </div>
        </Box>
      </Stack>
    </Card>
  )
}

export default CurrencyMenu
