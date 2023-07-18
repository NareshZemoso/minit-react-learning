import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface MiniteTypographyProps extends TypographyProps{
  varient:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'body1'|'body2'|'body3'|'subtitle1'|'subtitle2'|'caption'|'captionBold'
}

const MiniteTypography: React.FC<TypographyProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <Typography variant={variant} {...props} >
      {children}
    </Typography>
  )
}

export default MiniteTypography
