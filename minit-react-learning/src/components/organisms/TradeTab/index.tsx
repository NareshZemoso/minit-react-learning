import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import loadImage from '../../atoms/LoadImage'
import MiniteTypography from '../../atoms/MiniteTypography'
import CurrencyMenu from '../../molecules/CurrencyMenu'
import Currency from '../../../redux/States/Currency'
import {
  addToWatchList,
  removeFromWatchList
} from '../../../redux/Reducers/WatchListSlice'
import {
  updateCurrency} from '../../../redux/Reducers/CurrencySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCurrencyDetails, removeCurrencyDetails } from '../../../redux/Reducers/CurrencyDetailSlice'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel (props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps (index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const TradeTab: React.FC = () => {
  const [value, setValue] = useState(0)

  const [currency, setCurrency] = useState<Currency>()

  const [watchListState, setWatchListState] = useState<Currency[]>([])
  const [currencyListState, setCurrencyListState] = useState<Currency[]>([])
  const dispatch = useDispatch()
  const watchListStore = useSelector(
    (state: any) => state.watchListReducer.currencies
  )
  const currenciesStore = useSelector(
    (state: any) => state.currencyReducer.currencies
  )

  //Currency list
  var cList: Currency[] = []
  currenciesStore.map((c: Currency) => cList.push({ ...c }))
  console.log('cList  ' + cList)

  //Watch list
  var wList: Currency[] = []
  watchListStore.map((c: Currency) => wList.push({ ...c }))
 

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const navigate=useNavigate();
  function handleWatch (row: Currency): void {
    if(currency !== undefined){
    const oldCurrency:Currency={...currency};
    dispatch(removeCurrencyDetails(oldCurrency))
       }
    setCurrency(row)
    dispatch(addCurrencyDetails(row))
    alert('Moving to Currency details');
    navigate('/currencyDetails');
  }

  function handleWatchList (row: Currency) {
    alert(row.watch)
    if (row.watch) {
      console.log(row.watch)
      const upadted: Currency = {...row};
      upadted.watch=false;
      
      dispatch(removeFromWatchList(upadted))
      //dispatch(removeCurrency(row))
      dispatch(updateCurrency(upadted))
    } else {
      const upadted: Currency = {...row}
      upadted.watch=true;
      dispatch(addToWatchList(upadted))
      //dispatch(removeCurrency(row))
      dispatch(updateCurrency(upadted))
    }
  }

    const watch :Currency[]=[];
 // function updateWatchList1(){
    cList.map((c:Currency)=> 
    {if(c.watch){
      watch.push(c);     
     }});
 // }

// dispatch(addToWatchList(watch));

  useEffect(() => {
    function updateWatchListstate () {
      wList = []
      watchListStore.map((c: Currency) => wList.push(c))
      setWatchListState(wList)
     
    }

    function updateCurrencyListstate () {
      cList = []
      currenciesStore.map((c: Currency) => cList.push(c))
      setCurrencyListState(cList)
    }

   

   // updateWatchList1();
    updateCurrencyListstate()
    updateWatchListstate()
    return () => {
      // Cleanup code
    }
  }, [watchListStore, currenciesStore])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs'
        >
          <Tab label='All Assets' {...a11yProps(0)} />
          <Tab label='Watch List' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableCell padding={'normal'} width={220}>
                  <MiniteTypography variant='h6' children='Name' />
                </TableCell>
                <TableCell padding='normal' width={250}>
                  <MiniteTypography variant='h6' children='Price' />
                </TableCell>
                <TableCell padding='normal' width={250}>
                  <MiniteTypography variant='h6' children='Change' />
                </TableCell>
                <TableCell padding='normal' width={230}>
                  <MiniteTypography variant='h6' children='Market Cap' />
                </TableCell>
                <TableCell padding='normal'>
                  <MiniteTypography variant='h6' children='Watch' />
                </TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyListState.map((row: Currency) => (
              <div>
                {
                  <TableRow key={row.id}>
                    <TableCell padding='none'>
                      {
                        <CurrencyMenu
                          height={74}
                          width={1250}
                          currencyType={row.currencyType}
                          price={row.amount}
                          url={loadImage(row.url)}
                          handleClick={() => handleWatch(row)}
                          code={row.code}
                          change={row.increment}
                          marketcap={row.marketcapital}
                          watch={row.watch}
                          handleWatchList={() => handleWatchList(row)}
                        />
                      }
                    </TableCell>
                  </TableRow>
                }
              </div>
            ))}
          </TableBody>
        </Table>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
              <TableCell padding={'normal'} width={220}>
                  <MiniteTypography variant='h6' children='Name' />
                </TableCell>
                <TableCell padding='normal' width={250}>
                  <MiniteTypography variant='h6' children='Price' />
                </TableCell>
                <TableCell padding='normal' width={250}>
                  <MiniteTypography variant='h6' children='Change' />
                </TableCell>
                <TableCell padding='normal' width={230}>
                  <MiniteTypography variant='h6' children='Market Cap' />
                </TableCell>
                <TableCell padding='normal'>
                  <MiniteTypography variant='h6' children='Watch' />
                </TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {watchListState.map((row: Currency) => (
              <div>
                {
                  <TableRow key={row.id}>
                    <TableCell padding='none'>
                      {
                        <CurrencyMenu
                          height={74}
                          width={1250}
                          currencyType={row.currencyType}
                          price={row.amount}
                          url={loadImage(row.url)}
                          handleClick={() => handleWatch(row)}
                          code={row.code}
                          change={row.increment}
                          marketcap={row.marketcapital}
                          watch={row.watch}
                          handleWatchList={() => handleWatchList(row)}
                        />
                      }
                    </TableCell>
                  </TableRow>
                }
              </div>
            ))}
          </TableBody>
        </Table>
      </CustomTabPanel>
    </Box>
  )
}

export default TradeTab
