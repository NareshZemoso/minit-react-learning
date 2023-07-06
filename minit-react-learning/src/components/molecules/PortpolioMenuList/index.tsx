import {
  Card,
  Chip,
  MenuList,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import React, { useState } from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import bitcoin from '../../../../public/assets/bitcoin.png'
import graph1 from '../../../../public/assets/graph1.png'
import pen from '../../../../public/assets/pen.png'
import plusgrid from '../../../../public/assets/plusgrid.png'
import list from '../../../../public/assets/list.png'
import Typography from '../../atoms/Typography'
import MiniteIconButton from '../../atoms/MiniteButton'
import MiniteButton from '../../atoms/MiniteButton'
import PortpolioMenu from '../PortpolioMenu'
import MiniteTypography from '../../atoms/Typography'

interface PortpolioMenuListProps {
  height?: number
  width?: number
  currencyType: string
  amount: string
  url: string
}

const rows = [
  {
    id: 1,
    currencyType: 'Bitcoin',
    amount: '$ 25',
    url: bitcoin,
    code: 'BTC',
    increment: '+ 0.007 %'
  },
  {
    id: 2,
    currencyType: 'Bitcoin',
    amount: '$ 25',
    url: bitcoin,
    code: 'BTC',
    increment: '+ 0.007 %'
  },
  {
    id: 3,
    currencyType: 'Bitcoin',
    amount: '$ 25',
    url: bitcoin,
    code: 'BTC',
    increment: '+ 0.007 %'
  },
  {
    id: 4,
    currencyType: 'Bitcoin',
    amount: '$ 25',
    url: bitcoin,
    code: 'BTC',
    increment: '+ 0.007 %'
  },
  {
    id: 5,
    currencyType: 'Bitcoin',
    amount: '$ 25',
    url: bitcoin,
    code: 'BTC',
    increment: '+ 0.007 %'
  },
  {
    id: 6,
    currencyType: 'Bitcoin',
    amount: '$ 25',
    url: bitcoin,
    code: 'BTC',
    increment: '+ 0.007 %'
  }
]

function handleNeedHelp (): void {
  console.log('Clicked')
  alert('Clicked')
}

const PortpolioMenuList: React.FC<PortpolioMenuListProps> = ({
  height,
  width,
  currencyType,
  amount,
  url
}) => {
  return (
    <>
    <Stack direction={'column'} spacing={0}>
    <Card sx={{ height: 40, width: { width },padding:0,margin:0}}>
        <Stack direction={'row'} spacing={50} alignItems={'center'} padding={1} margin={1}>
        <MiniteTypography variant='h3' >
            My Portfolio
        </MiniteTypography>
        <MuiIcon
              url={list}
              height={24}
              width={24}
              onClick={handleNeedHelp}
            />
        </Stack>
    </Card>
    <Stack>
    <TableContainer
      component={Paper}
      sx={{ maxHeight: { height }, width: { width },padding:0,margin:0}}
    >
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell padding='none'>
                <PortpolioMenu
                  currencyType={row.currencyType}
                  amount={row.amount}
                  url={row.url}
                  code={row.code}
                  increment={row.increment}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    <Card sx={{ height: 70, width: { width },padding:0,marginTop:2}}>
        <Stack direction={'row'} spacing={40} alignItems={'center'} padding={1} margin={5}>
        <MiniteTypography variant='body1' >
            Total balance
        </MiniteTypography>
        <MiniteTypography variant='body1' >
           $ 20000
        </MiniteTypography>
        </Stack>
    </Card>

    <Card sx={{ height: 313, width: { width },padding:1,marginTop:5}}>
        <Stack direction={'column'} spacing={2} alignItems={'left'} padding={1} margin={0}>
        <MiniteTypography variant='body1' >
            My wallets
        </MiniteTypography>
       
        <PortpolioMenu
                  currencyType={'USD Coin'}
                  amount={'$2000'}
                  url={bitcoin}
                  code='USD'
                  increment={''}
                />
         <MiniteTypography variant='body1' >
           Recent tranactions
        </MiniteTypography>        
        </Stack>
    </Card>
    </Stack>
    </>
  )
}

export default PortpolioMenuList
