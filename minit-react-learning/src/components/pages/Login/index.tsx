import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'



interface LoginProps {
  clientid:string
}

const Login: React.FC<LoginProps> = ({clientid}) =>{
   
    function handleCallbackResponse(response:any){
        console.log('Encoded JWT Token '+response.credential,
        gotoDashboard()
     );
 }
 const navigate = useNavigate();

 const gotoDashboard = () => {
   // Navigate to the "/dashboard" route programmatically
   navigate('/dashboard');
 };


useEffect(() =>{
 /* global google */
google.accounts.id.initialize({
 //client_id:"581874807677-34gvn4rrbdtcsgiko28uqemdb8ggijcl.apps.googleusercontent.com",
 client_id:'581874807677-34gvn4rrbdtcsgiko28uqemdb8ggijcl.apps.googleusercontent.com',

 callback:handleCallbackResponse
});

google.accounts.id.renderButton(
 document.getElementById("signInDiv"),
 {
   theme:"outline",size:"large",align:'center'
 }
);


}

,[]);
   
    return (<>
        <Stack alignItems={'center'} height={200} width={400} margin={50}>
        <div id='signInDiv'></div>
        </Stack>
        </>
    );
}

export default Login
