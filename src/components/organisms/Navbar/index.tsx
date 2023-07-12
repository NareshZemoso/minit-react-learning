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
const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}
interface navbarp {
  icon:string;
  onClick:() => void;
  height:number;
  width:number;
}


const miniteIconButtonArray = [
  <MiniteIconButton
    icon={home}
    onClick={handleNeedHelp}
    height={32}
    width={32}
  />,
  <MiniteIconButton
    icon={dashboard}
    onClick={handleNeedHelp}
    height={20}
    width={20}
  />,
  <MiniteIconButton
    icon={portpolio}
    onClick={handleNeedHelp}
    height={20}
    width={20}
  />,
  <MiniteIconButton
    icon={trade}
    onClick={handleNeedHelp}
    height={20}
    width={20}
  />,
  <MiniteIconButton
    icon={logout}
    onClick={handleNeedHelp}
    height={20}
    width={20}
  />
]

const Navbar: React.FC<NavbarProps> = ({ height, width ,bgclor}) => {

  const navigate = useNavigate();

  const handleNeedHelp = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/');
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
         <div className='${index}'>{component}</div>
        ))}
      </Stack>
    </Card>
  )
}

export default Navbar
