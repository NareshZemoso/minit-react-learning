import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import { Stack } from '@mui/material'
import Mainbar from '../../organisms/Mainbar'
import MiniteTemplate from '../../templates/MiniteTemplate'
import TradeTab from '../../organisms/TradeTab'

interface tradePageProps {
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

const TradeDetailsPage: React.FC = () => {
  return (
    <MiniteTemplate
      header={trade.header}
      footer={trade.footer}
      navbar={trade.navbar}
    >
      <Mainbar height={1200} width={1286} bgclor='#fafcff'>
        <Stack alignItems={'center'}>
          <TradeTab></TradeTab>
        </Stack>
      </Mainbar>
    </MiniteTemplate>
  )
}

export default TradeDetailsPage
