import React from 'react'
import Footer from '../../organisms/Footer'
import MiniteTemplate from '../../templates/MiniteTemplate'
import Mainbar from '../../organisms/Mainbar'
import WatchList from '../../molecules/WatchList'
import PortpolioMenuList from '../../molecules/PortpolioMenuList'
import { Stack } from '@mui/material'
import MyportfolioValue from '../../molecules/MyportfolioValue'
import Header from '../../organisms/Header'
import Navbar from '../../organisms/Navbar'
import { useNavigate } from 'react-router-dom'



function handleSellButtonClick(): void {
 alert('handleSellButtonClick');
}

interface DashboardProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  navbar?: React.ReactNode
  mainbar?: React.ReactNode
  dashboardcolor?: string
} 

const dashboard={
 header:<Header height={82} width={1286} headertext='Dashboard' bgclor='#fafcff' onClick={handleSellButtonClick}/>,
 footer:<Footer height={82} width={1286} bgcolor='#fafcff'/>,
 navbar: <Navbar height={800} width={80} bgclor='#fafcff'/>,
}


const Dashboard: React.FC<DashboardProps> = ({
  header,
  footer,
  navbar, 
  dashboardcolor
}) => {

  return (
    <div>
      <MiniteTemplate
        header={(header == null)?dashboard.header:header }
        footer={(header == null)?dashboard.footer:footer }
        navbar={(header == null)?dashboard.navbar:navbar }
        templateColor={(header == null)?'#ffffff':dashboardcolor}

      >      
        <Mainbar height={1000} width={1286} bgclor='#fafcff'>
          <Stack direction={'row'} spacing={2} margin={2}>
            <Stack direction={'column'} spacing={5} margin={3}>
              <WatchList
                currencyType={'Bitcoin'}
                amount={'$ 200'}
                url={''}
                height={174}
                width={840}
              />
              <MyportfolioValue
                currencyType={''}
                amount={''}
                url={''}
                height={462}
                width={840}
              ></MyportfolioValue>
            </Stack>
            <PortpolioMenuList
              currencyType={''}
              amount={''}
              url={''}
              height={244}
              width={370}
            />
          </Stack>
        </Mainbar>
      </MiniteTemplate>
    </div>
  )
}

export default Dashboard

