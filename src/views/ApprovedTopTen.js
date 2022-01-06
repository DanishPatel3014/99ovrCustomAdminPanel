import React, { useEffect} from "react";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import ApprovedTopTen from '../components/Topteen/ApprovedTopTen'
export default function Home() {
  


  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <ApprovedTopTen/>
      
    </div>
  );
}
