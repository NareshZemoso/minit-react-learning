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
      <MiniteSquarebox text={'1H'} variant={'h6'} textColor={textColor} onclickText={onclickText}/>
      <MiniteSquarebox text={'24H'} variant={'h6'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'1W'} variant={'h6'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'1M'} variant={'h6'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'1Y'} variant={'h6'} onclickText={onclickText} textColor={textColor}/>
      <MiniteSquarebox text={'ALL'} variant={'h6'} onclickText={onclickText} textColor={textColor}/>
      </Stack>
    </Card>
  )
}

export default TimePeriodcard
