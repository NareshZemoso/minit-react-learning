import { Card, Stack } from '@mui/material'
import React, { useState } from 'react'
import MiniteSquarebox from '../../atoms/MiniteSquarebox'

interface TimePeriodcardProps {
  textColor:string;
  height?: number;
  width?: number ; 
  onclickText:() => void;
  
}

const TimePeriodcard: React.FC<TimePeriodcardProps> = ({
  height=52,
  width=304,
  onclickText,
  textColor,
 
}) => {


  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: { width },
        alignItems: 'center',
        borderRadius: 0
      }}
      
    >
      <Stack spacing={5} direction={'row'} alignItems={'center'} padding={3}>
      <MiniteSquarebox text={'1H'} varient={'caption'} textColor={textColor} onclickText={onclickText}/>
      <MiniteSquarebox text={'24H'} varient={'caption'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'1W'} varient={'caption'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'1M'} varient={'caption'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'1Y'} varient={'caption'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'ALL'} varient={'caption'} onclickText={onclickText} textColor={textColor}/>
      </Stack>
    </Card>
  )
}

export default TimePeriodcard
