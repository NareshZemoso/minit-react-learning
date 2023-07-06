import { Card, Stack } from '@mui/material'
import React from 'react'
import MiniteButton from '../../atoms/MiniteButton'
import MiniteAvatar from '../../atoms/MiniteAvatar'
import avatar from '../../../../public/assets/avatar.png'
import Dropdown from '../../atoms/Dropdown'
import MiniteTypography from '../../atoms/Typography'
import theme from '../../../theme'

interface CryptoCard {
  height: number
  width: number
  headertext:string
  bgclor:string
}
const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}

const Header: React.FC<CryptoCard> = ({ height, width,headertext,bgclor }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: { width },
        alignItems: 'center',
        borderRadius: 0,
        textAlign: 'left',
        bgcolor:{bgclor}
      }}
    >
      <Stack spacing={250} direction={'row'} marginLeft={5} alignItems={'center'} marginTop={3}>
        <Stack alignContent={'start'}>
          <MiniteTypography variant='h3' padding={1}>
            {headertext}
          </MiniteTypography>
        </Stack>

        <Stack spacing={1} alignContent={'center'} direction={'row'}>
          <MiniteButton
            fgColor='secondary'
            onClick={handleNeedHelp}
            variant={'contained'}
            size={'large'}
          >
            <MiniteTypography variant='body1' color={'white'}>
              SELL
            </MiniteTypography>
          </MiniteButton>
          <MiniteButton
            fgColor='primary'
            onClick={handleNeedHelp}
            variant={'contained'}
            size={'large'}
          >
            <MiniteTypography variant='body1' color={'white'}>
              BUY
            </MiniteTypography>
          </MiniteButton>
          <MiniteAvatar imageUrl={avatar} size={32} />
          <Dropdown onChange={handleNeedHelp} propfile='' />
        </Stack>
      </Stack>
    </Card>
  )
}

export default Header
