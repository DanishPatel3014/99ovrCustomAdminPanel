import React, { useEffect} from "react";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import ApprovedStreamCity from '../components/StreamCity/ApprovedStreamCityTable'
export default function Home() {
  


  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <ApprovedStreamCity/>
      
    </div>
  );
}
