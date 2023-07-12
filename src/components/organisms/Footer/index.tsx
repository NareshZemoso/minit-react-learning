import React from 'react'
import SelectInput from '../../molecules/Selectinput'
import Button from '../../atoms/MiniteButton'
import { Stack } from '@mui/material'
import { Card, Link } from '@mui/material'
import MiniteTypography from '../../atoms/MiniteTypography'
import {footer} from '../../../utils/constants'

interface SelectOption {
  value: string
  label: string
  
}

const options: SelectOption[] = [
  { value: 'Engilsh', label: 'English' },
  { value: 'Telugu', label: 'Telugu' },
  { value: 'French', label: 'French' }
]

const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}
interface FooterProps {
  height: number
  width: number
  bgcolor: string
}

const Footer: React.FC<FooterProps> = ({ height, width, bgcolor }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: {width},
        alignItems: 'center',
        borderRadius: 0,
        textAlign: 'left',
        bgcolor:{bgcolor}
      }}
    >
      <Stack direction={'row'} spacing={150} alignItems={'center'} padding={2}>
        <Stack direction={'row'} spacing={2}>
          <MiniteTypography variant='h6'>
            <Link href='#' variant='body2' underline='none'>
              {footer.dashboard}
             
            </Link>
          </MiniteTypography>
          <MiniteTypography variant='h6'>            
            <Link href='#' variant='body2' underline='none'>
              {footer.careers}
              
            </Link>
          </MiniteTypography>
          <MiniteTypography variant='h6'>           
            <Link href='#' variant='body2' underline='none'>
              {footer.legal}
             
            </Link>
          </MiniteTypography>
          <MiniteTypography variant='h6'>
            
            <Link  variant='body2' underline='none' color={'black'}>
              {footer.minite}
             
            </Link>
            </MiniteTypography>
        </Stack>

        <Stack direction={'row'} spacing={1}>
          <SelectInput options={options} />
          <Button
            onClick={handleNeedHelp}           
            variant={'outlined'}
            size={'large'}
          >
            <MiniteTypography variant='body1' children={footer.needhelp}/>
            </Button>
        </Stack>
      </Stack>
    </Card>
  )
}

export default Footer
