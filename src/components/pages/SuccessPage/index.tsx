import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import CheckoutSuccess from '../../molecules/CheckoutSuccess'
import { Box, Drawer, Grid, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import Mainbar from '../../organisms/Mainbar'
import MiniteTemplate from '../../templates/MiniteTemplate'
import { Link, useNavigate } from 'react-router-dom'



const handleSellButtonClick = () => {
 alert('Hi Success')
};

interface SuccessPageProps {
  header?: React.ReactNode
  children?: React.ReactNode
  navbar?: React.ReactNode
  footer?:React.ReactNode
}

const success={
  header:<Header height={82} width={1286} headertext='Success' bgclor='#fafcff' onClick={handleSellButtonClick}/>,
  footer:<Footer height={82} width={1286} bgcolor='#fafcff'/>,
  navbar: <Navbar height={600} width={80} bgclor='#fafcff'/>,
 }

const SuccessPage: React.FC<SuccessPageProps> = ({
  header=success.header,
  navbar=success.navbar,
  children,
  footer=success.footer,
}) => {

  const navigate = useNavigate();

  const gotoUsd = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/');
  };
  const sellCrypto = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/sellCheckout');
  };
  return (

    <MiniteTemplate header={header} footer={footer} navbar={navbar}>
      <Mainbar height={500} width={1286} bgclor='#fafcff'>
            <Stack alignItems={'center'} marginTop={30}>
              <CheckoutSuccess height={250} width={396} sellcrypto={sellCrypto} gotoUsd={gotoUsd} />
              
            </Stack>
          </Mainbar>
    </MiniteTemplate>

    
  )
}

export default SuccessPage
