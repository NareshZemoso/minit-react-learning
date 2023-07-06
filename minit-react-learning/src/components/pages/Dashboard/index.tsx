import React from "react";
import Footer from "../../organisms/Footer";
import MiniteTemplate from "../../templates/MiniteTemplate";
import Mainbar from "../../organisms/Mainbar";
import WatchList from "../../molecules/WatchList";
import PortpolioMenuList from "../../molecules/PortpolioMenuList";
import { Stack } from "@mui/material";
import MyportfolioValue from "../../molecules/MyportfolioValue";

interface DashboardProps{
  header:React.ReactNode;
  footer:React.ReactNode;
  navabar:React.ReactNode;
  mainbar:React.ReactNode;
  dashboardcolor?:string;

}
const Dashboard: React.FC<DashboardProps> = ({header,footer,navabar,mainbar,dashboardcolor}) => {
    return (
      <div>
        <MiniteTemplate header={header} footer={footer}  navbar={navabar} templateColor={dashboardcolor}>
       <Mainbar  height={1000} width={1476} bgclor={"#fafcff"}>
        <Stack direction={'row'} spacing={5} margin={2}>
        <Stack direction={'column'} spacing={5} margin={5}>
        <WatchList currencyType={"Bitcoin"} amount={"$ 200"} url={""} height={174} width={840}/>
        <MyportfolioValue currencyType={""} amount={""} url={""} height={462} width={840}></MyportfolioValue>
        </Stack>
        <PortpolioMenuList currencyType={""} amount={""} url={""} height={244} width={370}/>
        </Stack>
       </Mainbar>
       </MiniteTemplate>
      </div>
    );
  };

export default Dashboard;
