import React from 'react'
import SelectInput from '../../molecules/Selectinput'
import Button from '../../atoms/MiniteButton'
import { Stack } from '@mui/material'
import { Card, Link } from '@mui/material'
import MiniteTypography from '../../atoms/Typography'

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
}

const Footer: React.FC<FooterProps> = ({ height, width }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        height: { height },
        width: {width},
        alignItems: 'center',
        borderRadius: 0,
        textAlign: 'left',
        bgcolor:'#e6fffa'
      }}
    >
      <Stack direction={'row'} spacing={160} alignItems={'center'} padding={2}>
        <Stack direction={'row'} spacing={2}>
          <MiniteTypography variant='h6'>
            <Link href='#' variant='body2' underline='none'>
              {'Dashboard'}
             
            </Link>
          </MiniteTypography>
          <MiniteTypography variant='h6'>            
            <Link href='#' variant='body2' underline='none'>
              {'Careers'}
              
            </Link>
          </MiniteTypography>
          <MiniteTypography variant='h6'>           
            <Link href='#' variant='body2' underline='none'>
              {'Legal && Privacy'}
             
            </Link>
          </MiniteTypography>
          <MiniteTypography variant='h6'>
            
            <Link  variant='body2' underline='none' color={'black'}>
              {'@ 2021 Minite'}
             
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
            <MiniteTypography variant='body1' children='NEED HELP'/>
            </Button>
        </Stack>
      </Stack>
    </Card>
  )
}

export default Footer
