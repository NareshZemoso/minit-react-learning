import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { makeStyles } from '@mui/material'
import MiniteTypography from '../MiniteTypography'


interface MiniteSquareboxProps {
  text: string,
  varient:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'body1'|'body2'|'body3'|'subtitle1'|'subtitle2'|'caption'|'captionBold',
  textColor:string,
  onclickText?:() => void
}



const MiniteSquarebox: React.FC<MiniteSquareboxProps> = ({
  text,
  varient,
  onclickText,
  textColor
}) => {

  


  return (
    <div >
      <span onClick={onclickText} >
        <MiniteTypography variant={varient} color={textColor}  >
          {text}
        </MiniteTypography>
      </span>
    </div>
  )
}

export default MiniteSquarebox
