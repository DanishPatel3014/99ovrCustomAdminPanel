import React, { useEffect} from "react";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import ApprovedTournaments from '../components/Tournaments/ApprovedTournament'
export default function Home() {
  


  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <ApprovedTournaments/>
      
    </div>
  );
}
