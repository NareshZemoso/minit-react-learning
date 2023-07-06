import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import CheckoutSuccess from '../../molecules/CheckoutSuccess'
import { Box, Drawer, Grid, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import Mainbar from '../../organisms/Mainbar'
import MiniteTemplate from '../../templates/MiniteTemplate'

interface SuccessPageProps {
  header: React.ReactNode
  children: React.ReactNode
  navbar: React.ReactNode
  footer:React.ReactNode
}


const SuccessPage: React.FC<SuccessPageProps> = ({
  header,
  navbar,
  children,
  footer,
}) => {
  return (

    <MiniteTemplate header={header} footer={footer} navbar={navbar}>
      <Mainbar height={500} width={1476} bgclor='#fafcff'>
            <Stack alignItems={'center'} marginTop={30}>
              <CheckoutSuccess height={250} width={396} text={''} url={''} />
            </Stack>
          </Mainbar>
    </MiniteTemplate>

    
  )
}

export default SuccessPage
