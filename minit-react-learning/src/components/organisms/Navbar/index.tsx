import { Card, Stack } from '@mui/material'
import React from 'react'
import dashboard from '../../../../public/assets/dashboard.png'
import home from '../../../../public/assets/home.png'
import portpolio from '../../../../public/assets/portpolio.png'
import trade from '../../../../public/assets/trade.png'
import notification from '../../../../public/assets/notification.png'
import logout from '../../../../public/assets/logout.png'
import MiniteIconButton from '../../atoms/MiniteIconButton'
import { Link, NavLink, useNavigate } from 'react-router-dom'


interface NavbarProps {
  height: number
  width: number
  miniteIconButtonArray?: [],
  bgclor:string
}


const miniteIconButtonArray = [
  {
    icon:home,
    height:32,
    width:32,
    id:'home',
  },
  {
    icon:dashboard,
    height:20,
    width:20,
    id:'dashboard',
  },
  
  {
    icon:portpolio,
    height:20,
    width:20,
    id:'portpolio',
  },
  
  {
    icon:trade,
    height:20,
    width:20,
    id:'trade',
  },
  
  {
    icon:logout,
    height:20,
    width:20,
    id:'logout',
  },
]

const Navbar: React.FC<NavbarProps> = ({ height, width ,bgclor}) => {

  const navigate = useNavigate();

  const handleNeedHelp = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/dashboard');
  };
  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: { width },
        alignItems: 'center',
        borderRadius: 0,
        textAlign: 'left',
        bgcolor: {bgclor},
        
      }}
    >
      <Stack
        spacing={10}
        alignContent={'center'}
        direction={'column'}
        alignItems={'center'}
        marginTop={5}
      >
        {miniteIconButtonArray.map((component, index) => (
         <div className='${index}'>

         <MiniteIconButton
         icon={component.icon}
         onClick={handleNeedHelp}
         height={component.height}
         width={component.width}
         key={component.id}
       />
       </div>
        ))}
      </Stack>
    </Card>
  )
}

export default Navbar
