import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import UserActivity from '../components/Users/userActivity'
export default function Home() {
  
  

  return (
    <div>
        <Topnav/>
        <Sidenav/>
        <UserActivity />
      
    </div>
  );
}
