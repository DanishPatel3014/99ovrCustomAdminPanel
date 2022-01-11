import React, { useEffect} from "react";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import ApprovedLeagues from '../components/Leagues/ApprovedLeagues'
export default function Home() {
  


  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <ApprovedLeagues/>
      
    </div>
  );
}
