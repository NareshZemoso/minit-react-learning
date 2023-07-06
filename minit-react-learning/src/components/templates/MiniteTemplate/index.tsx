import React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import Header from '../../organisms/Header'
import CheckoutSuccess from '../../molecules/CheckoutSuccess'
import { Box, Drawer, Grid, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import Mainbar from '../../organisms/Mainbar'
import { yellow } from '@mui/material/colors'

interface SuccessPageProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
  navbar: React.ReactNode;
  templateColor?:string;
}



const MiniteTemplate: React.FC<SuccessPageProps> = ({
  header,
  footer,
  navbar,
  children,
  templateColor,
}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ backgroundColor:templateColor }}>
      <Grid item style={{ backgroundColor:templateColor }}>
        {navbar}
      </Grid>

      <Grid
        item
        direction={'column'}
        rowSpacing={4}
        xs={12}
        md={4}
        columnSpacing={{ xs: 1 }}
      >
        <Grid item>{header}</Grid>
        <Grid item >{children}</Grid>
        <Grid item>{footer}</Grid>
      </Grid>
    </Grid>
  )
}

export default MiniteTemplate
