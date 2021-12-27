import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import Tournaments from "../components/Tournaments/Tournamentstable"
export default function Home() {
  
  

  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <Tournaments/>
      
    </div>
  );
}
