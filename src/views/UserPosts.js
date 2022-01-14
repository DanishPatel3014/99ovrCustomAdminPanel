import Topnav from "../components/Navigations/Topnav";
import Sidenav from "../components/Navigations/Sidenav";
import UserPosts from '../components/Users/userPosts'
export default function Home() {
  
  

  return (
    <div>
        <Topnav/>
        <Sidenav/>
        <UserPosts />
      
    </div>
  );
}
