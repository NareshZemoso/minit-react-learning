import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import CheckoutSuccess from '../../molecules/CheckoutSuccess'
import { Box, Drawer, Grid, Stack } from '@mui/material'
import theme from '../../../theme'
import Mainbar from '../../organisms/Mainbar'
import ChooseCryptocard from '../../molecules/ChooseCryptocard'
import AmountDetails from '../../molecules/Amountdetails'
import TotalBalance from '../../molecules/TotalBalance'
import bitcoin from '../../../../public/assets/bitcoin.png'
import DepositTo from '../../molecules/DepositTo'
import usdcoin from '../../../../public/assets/usdcoin.png'
import OrderSummary from '../../molecules/OredrSummary'
import MiniteTemplate from '../../templates/MiniteTemplate'

interface SellcheckoutPageProps {
  header: React.ReactNode
  footer: React.ReactNode
  mainbar: React.ReactNode
  navabar: React.ReactNode
  bgcolor:string
}

const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}

const SellcheckoutPage: React.FC<SellcheckoutPageProps> = ({
  header,
  footer,
  navabar,
  mainbar,
  bgcolor
}) => {
  return (
    <div>
      <MiniteTemplate
        header={header}
        footer={footer}
        navbar={navabar}
        templateColor={''}
      >
        <Mainbar height={1200} width={1476}  bgclor={bgcolor}>
        <Stack direction={'row'} spacing={10} marginTop={3}>
          <Stack direction={'column'} spacing={2} margin={5}>           
              <ChooseCryptocard
                height={400}
                width={710}
                text={'Choose Crypto'}
              />             
            
            <TotalBalance iconUrl={bitcoin} width={710} height={100} />
            <AmountDetails width={710} height={318} onClick={handleNeedHelp} />
            <DepositTo iconUrl={usdcoin} height={100} width={710} />
          </Stack>
          <OrderSummary width={528} height={646} onClick={handleNeedHelp} />
          </Stack>
        </Mainbar>
      </MiniteTemplate>
    </div>
  )
}

export default SellcheckoutPage
