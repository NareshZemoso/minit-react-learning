import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { makeStyles } from '@mui/material'


interface MiniteSquareboxProps {
  text: string,
  variant:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
  textColor:string,
  onclickText?:() => void
}



const MiniteSquarebox: React.FC<MiniteSquareboxProps> = ({
  text,
  variant,
  onclickText,
  textColor
}) => {

  


  return (
    <div >
      <span onClick={onclickText} >
        <Typography variant={variant} color={textColor}  >
          {text}
        </Typography>
      </span>
    </div>
  )
}

export default MiniteSquarebox
