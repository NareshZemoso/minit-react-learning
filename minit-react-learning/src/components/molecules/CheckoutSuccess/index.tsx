import { Card, Stack } from '@mui/material';
import React from 'react';
import MuiIcon from '../../atoms/MuiIcon'; 
import MiniteButton from '../../atoms/MiniteButton';
import success from '../../../../public/assets/success.png';
import MiniteTypography from '../../atoms/MiniteTypography';
import {checkoutsuccess} from '../../../utils/constants'

interface CheckoutSuccessProps{
    height:number;
    width:number;   
    sellcrypto:() => void;
    gotoUsd:() => void;
}
const handleNeedHelp = () => {
    console.log("Need help");
    alert('Need help');
  };

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ( {height,width,sellcrypto,gotoUsd}) => {


  return (
    <Card variant="outlined" sx={{ height:{height},width:{width} ,alignItems:'center',borderRadius:0 ,padding:5}} >    
     
     <Stack spacing={1} alignItems={'center'} direction={'column'}>  
    <MuiIcon url={success} height={64} width={64}/>
   
    <span style={{display:'flex',flexDirection:'row'}}>
        {checkoutsuccess.btc}
    </span>
    <span style={{display:'flex',flexDirection:'row'}}>
        {checkoutsuccess.sellinfo}
    </span>

    <Stack spacing={4} alignContent={'center'} direction={'row'}> 
    <MiniteButton onClick={sellcrypto} variant={'outlined'} size={'medium'} >
      <MiniteTypography variant='body1' children={checkoutsuccess.sellcrypto}/>
      </MiniteButton>
    <MiniteButton onClick={gotoUsd} variant={'contained'} size={'medium'} >
    <MiniteTypography variant='body1' children={checkoutsuccess.gotousd}color={'white'}/>
      </MiniteButton>
    </Stack> 
    </Stack>
  </Card>
  );
};

export default CheckoutSuccess

