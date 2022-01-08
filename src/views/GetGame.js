import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import GetGame from '../components/Game/GetGame'
export default function Home() {


  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <GetGame/>
      
    </div>
  );
}
