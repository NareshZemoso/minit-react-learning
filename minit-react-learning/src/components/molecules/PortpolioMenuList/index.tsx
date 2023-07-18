import {
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import MuiIcon from '../../atoms/MuiIcon'
import bitcoin from '../../../../public/assets/bitcoin.png'

import list from '../../../../public/assets/list.png'
import PortpolioMenu from '../PortpolioMenu'
import MiniteTypography from '../../atoms/MiniteTypography'
import loadImage from '../../atoms/LoadImage'
import { useSelector } from 'react-redux'
import Currency from '../../../redux/States/Currency'

interface PortpolioMenuListProps {
  height?: number
  width?: number
  currencyType: string
  amount: string
  url: string
}

export interface Portfoliomenu {
  id: number
  currencyType: string
  amount: string
  url: string
  code: string
  increment: string
  sold: boolean
}

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

  const portfolioCurrencies:Currency[]=useSelector((state:any) => state.portFolioReducer.currencies);
  const [data, setData] = useState<Portfoliomenu[]>([])

  useEffect(() => {
    // Simulating an asynchronous data fetch
    const fetchData = async () => {
      try {
        console.log('Before Fetch')
        // Make an API call or perform any other data retrieval operation
        const response = await fetch('http://localhost:3000/portfoliomenu')
        const newData = await response.json()
        setData(newData) // Update the state with the new array of objects
        console.log('API Call is made')
        console.log('newData ' + newData)
        console.log('data ' + data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    //using Promise 
    const fecthData1 = () => {
      fetch('http://localhost:3000/portfoliomenu')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK')
          }
          return response.json()
        })
        .then(datap => {
          console.log(datap)
          setData(datap)
          const arrayString = JSON.stringify(datap)
          sessionStorage.setItem('data', arrayString)
        })
        .catch(error => {
          console.log('Error:', error)
        })
    }

    const data1 = sessionStorage.getItem('data')
    console.log('start  ' + data1)
    if (data1 !== null) {
     // setData(JSON.parse(data1))
      console.log('if data ' + data1)
    } else {
      //fetchData();
    //  fecthData1()
      console.log('else data ' + data)
    }
    // Call the async function to fetch data
  }, []) // Empty dependency array to run the effect only once

 

  return (
    <>
      <Stack direction={'column'} spacing={0}>
        <Card sx={{ height: 40, width: { width }, padding: 0, margin: 0 }}>
          <Stack
            direction={'row'}
            spacing={50}
            alignItems={'center'}
            padding={1}
            margin={1}
          >
            <MiniteTypography variant='h3'>My Portfolio</MiniteTypography>
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
            sx={{
              maxHeight: { height },
              width: { width },
              padding: 0,
              margin: 0
            }}
          >
            <Table>
              <TableHead>
                <TableRow></TableRow>
              </TableHead>
              <TableBody>
                {portfolioCurrencies.map((row:Currency) => (
                  <div>
                    {row.sold === false && (
                      <TableRow key={row.id}>
                        <TableCell padding='none'>
                          {
                            <PortpolioMenu
                              currencyType={row.currencyType}
                              amount={row.amount}
                              url={loadImage(row.url)}
                              code={row.code}
                              increment={row.increment}
                              height={58}
                              width={370}
                            />
                          }
                        </TableCell>
                      </TableRow>
                    )}
                  </div>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Card sx={{ height: 70, width: { width }, padding: 0, marginTop: 2 }}>
          <Stack
            direction={'row'}
            spacing={40}
            alignItems={'center'}
            padding={1}
            margin={5}
          >
            <MiniteTypography variant='body1'>Total balance</MiniteTypography>
            <MiniteTypography variant='body1'>$ 20000</MiniteTypography>
          </Stack>
        </Card>

        <Card sx={{ height: 313, width: { width }, padding: 1, marginTop: 5 }}>
          <Stack
            direction={'column'}
            spacing={2}
            alignItems={'left'}
            padding={1}
            margin={0}
          >
            <MiniteTypography variant='body1'>My wallets</MiniteTypography>

            <PortpolioMenu
              currencyType={'USD Coin'}
              amount={'$2000'}
              url={bitcoin}
              code='USD'
              increment={''}
            />
            <MiniteTypography variant='body1'>
              Recent tranactions
            </MiniteTypography>
          </Stack>
        </Card>
      </Stack>
    </>
  )
}

export default PortpolioMenuList
