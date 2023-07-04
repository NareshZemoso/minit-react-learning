import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

const MiniteTypography: React.FC<TypographyProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}

export default MiniteTypography
