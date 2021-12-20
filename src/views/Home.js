import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import dashlogo from "../assets/images/logo/dash-logo.png"
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
    <div className="app-content content">
    <div className="content-wrapper container-xxl p-0">
    <section id="dashboard-ecommerce">
                    <div class="row">
                     
                    
                        
                        <div class="col-xl-12 col-md-12 col-12">
                            <div class="card card-statistics">
                               <div className="dashpic">
                                 <img src={dashlogo} alt="dashlogo"/>
                                 <div className="wel">
                                   <h1>Welcome to 99 <span>O</span>V<span>R</span></h1>
                                 </div>
                               </div>
                            </div>
                        </div>
                        
                    </div>

                   
                </section>
                </div>
    </div>
      
    </div>
  );
}
