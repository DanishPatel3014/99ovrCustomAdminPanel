import React, { useEffect} from "react";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import StreamCity from "../components/StreamCity/StreamCityTable"
export default function Home() {
  


  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <StreamCity/>
      
    </div>
  );
}
