import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import { Stack } from '@mui/material'
import Mainbar from '../../organisms/Mainbar'
import ChooseCryptocard from '../../molecules/ChooseCryptocard'
import AmountDetails from '../../molecules/Amountdetails'
import TotalBalance from '../../molecules/TotalBalance'
import bitcoin from '../../../../public/assets/bitcoin.png'
import DepositTo from '../../molecules/DepositTo'
import usdcoin from '../../../../public/assets/usdcoin.png'
import OrderSummary from '../../molecules/OredrSummary'
import MiniteTemplate from '../../templates/MiniteTemplate'
import { useNavigate } from 'react-router-dom'



interface SellcheckoutPageProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  mainbar?: React.ReactNode
  navabar?: React.ReactNode
  bgcolor?:string
}
const sellCheckout={
  header:<Header height={82} width={1286} headertext='Checkout' bgclor='#fafcff' />,
  footer:<Footer height={82} width={1286} bgcolor='#fafcff'/>,
  navbar: <Navbar height={800} width={80} bgclor='#fafcff'/>,
  bgcolor:'#fafcff'
 }

const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}

const SellcheckoutPage: React.FC<SellcheckoutPageProps> = ({
  header=sellCheckout.header,
  footer=sellCheckout.footer,
  navabar=sellCheckout.navbar,
  mainbar,
  bgcolor=sellCheckout.bgcolor,
}) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/success');
  };

  return (
    <div>
      <MiniteTemplate
        header={header}
        footer={footer}
        navbar={navabar}
        templateColor={''}
      >
        <Mainbar height={1200} width={1286}  bgclor={bgcolor}>
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
          <OrderSummary width={528} height={646} onClick={handleButtonClick} />
          </Stack>
        </Mainbar>
      </MiniteTemplate>
    </div>
  )
}

export default SellcheckoutPage
