import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import AnimationTable from "../components/AnimationTable"
export default function Home() {
  
  const navigate = useNavigate();

  useEffect(() => {
    
    if (localStorage.getItem("user")) {
    } else {
      console.log("siri not available");
      navigate("/login");
    }
  }, []);

  // const navigate= useNavigate();

  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <AnimationTable/>
      
    </div>
  );
}
