import { Card, Stack } from '@mui/material'
import React, { ReactElement, ReactNode } from 'react'
import dashboard from '../../../../public/assets/dashboard.png'
import home from '../../../../public/assets/home.png'
import portpolio from '../../../../public/assets/portpolio.png'
import trade from '../../../../public/assets/trade.png'
import notification from '../../../../public/assets/notification.png'
import logout from '../../../../public/assets/logout.png'
import MiniteIconButton from '../../atoms/MiniteIconButton'

interface MainbarProps {
  children: React.ReactNode
  height: number
  width: number
  bgclor?:string
}
const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}

const Maibar: React.FC<MainbarProps> = ({ height, width, children ,bgclor}) => {
  return (
    <Card
      variant='outlined'     
      sx={{
        height: {height},
        width:{width},
        alignItems: 'center',
        borderRadius: 0,
        textAlign: 'left',
        bgcolor:bgclor
      }}
    >
      {children}
    </Card>
  )
}

export default Maibar
