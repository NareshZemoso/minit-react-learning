import {
  Box,
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
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Currency from '../../../redux/States/Currency'
import MiniteTypography from '../../atoms/MiniteTypography'
import MuiIcon from '../../atoms/MuiIcon'
import loadImage from '../../atoms/LoadImage'
import PortpolioMenu from '../../molecules/PortpolioMenu'
import TimePeriodcard from '../../molecules/TimePeriodCard'
import { removeFromWatchList } from '../../../redux/Reducers/WatchListSlice'
import { addToWatchList } from '../../../redux/Reducers/WatchListSlice'
import MiniteIconButton from '../../atoms/MiniteIconButton'
import { addCurrency, updateCurrency } from '../../../redux/Reducers/CurrencySlice'

interface CurrencyDetailsProps {
  height: number
  width: number
}
const handleNeedHelp = () => {
  console.log('Need help')
  alert('Need help')
}

const CurrencyDetails: React.FC<CurrencyDetailsProps> = ({ height, width }) => {
  const [c, setC] = useState<Currency>()
  const currencyDetails = useSelector(
    (state: any) => state.currencyDetailsReducer.currencies
  )
  const [currencyListState, setCurrencyListState] = useState<Currency[]>([])
  const currenciesStore = useSelector(
    (state: any) => state.currencyReducer.currencies
  )

  var cList: Currency[] = []
  currenciesStore.map((c: Currency) => cList.push({ ...c }))

  var currencyD: Currency[] = []
  currencyDetails.map((c: Currency) => currencyD.push(c))
  var currency: Currency = currencyD[1]
  // setC(currency);
 
  const navigate = useNavigate()
  const handleNeedHelp = () => {
    // Navigate to the "/dashboard" route programmatically
    navigate('/dashboard')
  }

  //to add currency to watch list
  const dispatch=useDispatch();

   const  addCurrencyToWatchList= () =>{
    console.log('addCurrencyToWatchList')
    if(c){
      if(c.watch){
        dispatch(removeFromWatchList(c))
        const m={...c}
        m.watch=false;
        setC(m);
        dispatch(updateCurrency(m))
      }else{
        
        const m={...c}
        m.watch=true;
        setC(m)
        dispatch(addToWatchList(m));
        dispatch(updateCurrency(m))
      }
    }

  }

  useEffect(() => {
    function refreshCurrencyDetails () {
      currencyDetails.map((c: Currency) => currencyD.push(c))
      const currency = currencyD.pop();
      setC(currency)
    }
    refreshCurrencyDetails()
    return () => {
      // Cleanup code
    }
  }, [currencyDetails])
  
  
  return (
    <Stack spacing={5} direction={'column'} margin={3} padding={3}>
      <Card
        variant='outlined'
        className='watchlistbar'
        sx={{
          height: 106,
          width: 1239,
          alignItems: 'center',
          borderRadius: 0,
          textAlign: 'left'
        }}
      >
        <Stack
          direction={'row'}
          spacing={100}
          alignItems={'center'}
          marginTop={4}
          padding={2}
        >
          <Box sx={{ width: 531, height: 58 }}>
            <Stack
              spacing={5}
              alignContent={'center'}
              direction={'row'}
              alignItems={'center'}
              marginTop={0}
              marginLeft={3}
            >
              <MuiIcon
                url={loadImage(currency?.url)}
                height={56}
                width={56}
              ></MuiIcon>
              <Stack direction={'column'}>
                <MiniteTypography variant='h6' children={c?.currencyType} />
                <Stack direction={'row'}>
                <MiniteTypography variant='body1' children={c?.code} />  
                <MuiIcon
                url={loadImage('arrow')}
                height={24}
                width={24}
              ></MuiIcon>              
                <MiniteTypography variant='overline' children={c?.increment} />
                </Stack>
              </Stack>

              <Stack direction={'column'} spacing={2}>
                <MiniteTypography variant='caption' children={'Market Cap'} />
                <MiniteTypography variant='captionBold' children={c?.marketcapital} />
              </Stack>

              <Stack direction={'column'} spacing={2}>
                <MiniteTypography variant='caption' children='Vol 24H' />
                <MiniteTypography
                  variant='captionBold'
                  children={c?.circulatingsupply}
                />
              </Stack>

              <Stack direction={'column'} spacing={2}>
                <MiniteTypography
                  variant='caption'
                  children='Circulating Supply'
                />
                <MiniteTypography variant='captionBold' children={'18.0' + c?.code} />
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              width: 215,
              height: 42,
              border: '1px solid blue',
              marginRight: 2,
              borderRadius: 1,
              padding: 2
            }}
          >
           
              <div hidden={!c?.watch} >
              <Stack
              spacing={5}
              alignContent={'center'}
              direction={'row'}
              alignItems={'center'}
              marginTop={1}
            >
                <MiniteIconButton
                  icon={loadImage('fillstar')}
                  height={32}
                  width={32}
                  onClick={addCurrencyToWatchList}
                ></MiniteIconButton>
                 <MiniteTypography
                variant='body1'
                children={'ADDED TO WATCHLIST'}
                color={'#0052FF'}
              />
              </Stack>
              </div>
              <div hidden={c?.watch}>
              <Stack
              spacing={5}
              alignContent={'center'}
              direction={'row'}
              alignItems={'center'}
              marginTop={1}
            >
                <MiniteIconButton
                  icon={loadImage('emptystar')}
                  height={32}
                  width={32}
                  onClick={addCurrencyToWatchList}
                ></MiniteIconButton>
                 <MiniteTypography
                variant='body1'
                children={'ADD TO WATCHLIST'}
                color={'#0052FF'}
              />
               </Stack>
              </div>             
            
          </Box>
        </Stack>
      </Card>

      <Card
        variant='outlined'
        className='watchlistgraph'
        sx={{
          height: 416,
          width: 1239,
          alignItems: 'center',
          borderRadius: 0,
          textAlign: 'left'
        }}
      >

      <Stack direction='row' spacing={200} padding={3}>
       
      <Stack direction='column'>       
       <MiniteTypography variant='caption' children='Current value'/> 
       <MiniteTypography variant='h6' children={c?.amount}/> 

       <Stack direction={'row'}>
       <MuiIcon url={loadImage('arrow')} height={24} width={24}></MuiIcon>
       <MiniteTypography variant='overline' children={c?.increment}/> 
       </Stack >
       </Stack> 
      <TimePeriodcard textColor={'#7D7D89'} onclickText={function (): void {
            alert('Time');
          } }/>     
      
      </Stack>
      <Stack padding={5}>  
      <MuiIcon url={loadImage('cdetgraph')} height={268} width={1191}></MuiIcon>
      </Stack>  
      </Card>

    <Stack direction={'row'} spacing={2}> 
    <Stack>
      <Card
        variant='outlined'
        className='about'
        sx={{
          height: 312,
          width: 816,
          alignItems: 'center',
          borderRadius: 0,
          textAlign: 'left',
          bgcolor:'#FAFCFF'
        }}
      >
        <Box
          sx={{
            width: 816,
            height: 216,
            border: '1px',
            marginRight: 2,
            borderRadius: 0,
            padding: 2
          }}
        >
          <Stack
            spacing={2}
            alignContent={'left'}
            direction={'column'}
            alignItems={'left'}
            marginTop={2}
          >
            <MiniteTypography variant='h6' children={'About Bitcoin'} />
            <MiniteTypography
              variant='body2'
              children={
                'The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin.'
              }
            />
            <MiniteTypography variant='h6' children={'Resources'} />
            <Stack direction={'row'}>
              <MuiIcon url={loadImage('web')} height={32} width={32}></MuiIcon>
              <Link to={''}>Official Website</Link>
            </Stack>
            <Stack direction={'row'}>
              <MuiIcon
                url={loadImage('paper')}
                height={32}
                width={32}
              ></MuiIcon>
              <Link to={''}>White Paper</Link>
            </Stack>
          </Stack>
        </Box>
        </Card>
        </Stack>
      <Stack>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight:300,
            width: 400,
            padding: 1,
            margin: 0
          }}
        >
          <Table>
            <TableHead >
              <TableRow ><MiniteTypography variant='subtitle1' children='Price Correlation with' padding={2}/></TableRow>
            </TableHead>
            <TableBody>
              {cList.map((row: Currency) => (
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
      </Stack> 
    </Stack>
  )
}

export default CurrencyDetails
