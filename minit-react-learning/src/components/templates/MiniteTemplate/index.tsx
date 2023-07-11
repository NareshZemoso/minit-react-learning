import React from 'react'
import { Grid } from '@mui/material'

interface MiniteTemplateProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
  navbar: React.ReactNode;
  templateColor?:string;
}



const MiniteTemplate: React.FC<MiniteTemplateProps> = ({
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
