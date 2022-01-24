import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import Leagues from "../components/Leagues/Leaguestable"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

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
     <Leagues/>
      
    </div>
  );
}
