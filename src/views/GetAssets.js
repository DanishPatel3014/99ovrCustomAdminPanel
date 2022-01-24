import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import GetAssets from '../components/Assets/GetAssets'
export default function Home() {
    
  const navigate = useNavigate();

  useEffect(() => {
    
    if (localStorage.getItem("user")) {
    } else {
      console.log("siri not available");
      navigate("/login");
    }
  }, []);

  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <GetAssets/>
      
    </div>
  );
}
