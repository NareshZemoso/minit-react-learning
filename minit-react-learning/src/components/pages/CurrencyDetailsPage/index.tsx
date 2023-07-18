import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import { Stack } from '@mui/material'
import Mainbar from '../../organisms/Mainbar'
import MiniteTemplate from '../../templates/MiniteTemplate'
import { useNavigate } from 'react-router-dom'
import CurrencyDetails from '../../organisms/CurrencyDetails'

const handleSellButtonClick = () => {
  alert('Hi Trade')
}

interface currencyDetailsPageProps {
  header?: React.ReactNode
  children?: React.ReactNode
  navbar?: React.ReactNode
  footer?: React.ReactNode
}

const trade = {
  header: (
    <Header
      height={82}
      width={1286}
      headertext='Trade'
      bgclor='#fafcff'     
    />
  ),
  footer: <Footer height={82} width={1286} bgcolor='#fafcff' />,
  navbar: <Navbar height={600} width={80} bgclor='#fafcff' />
}

const CurrencyDetailsPage: React.FC<currencyDetailsPageProps> = ({
  header = trade.header,
  navbar = trade.navbar,
  children,
  footer = trade.footer
}) => {
  const navigate = useNavigate()

  const gotoUsd = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/dashboard')
  }
  const sellCrypto = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/sellCheckout')
  }
  return (
    <MiniteTemplate header={header} footer={footer} navbar={navbar}>
      <Mainbar height={1000} width={1286} bgclor='#fafcff'>
        <Stack alignItems={'center'} marginTop={1}>
          <CurrencyDetails height={1000} width={1280}  />
        </Stack>
      </Mainbar>
    </MiniteTemplate>
  )
}

export default CurrencyDetailsPage
