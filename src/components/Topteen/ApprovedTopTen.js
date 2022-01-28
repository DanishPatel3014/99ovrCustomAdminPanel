import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import animationPic from '../../assets/images/avtar/animation-pic.jpg'
import FancyVideo from "react-videojs-fancybox";
import playicn from "../../assets/images/logo/play.png"
  
  export default function ApprovedTopTen() {
   
   

    const [topteenlist, settopteenlist] = useState([])
    const [approveddate, setapproveddate] = useState([]);
    const [ShowData, setShowData] = useState(false);


    useEffect(() => {
        triggeringFunction();
      }, []);
      
    useEffect(() => {
      if(approveddate.length == undefined){
        setShowData(true)
      }
    }, [approveddate]);
    
      

    const triggeringFunction = async () => {
        
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/getTop10RequestsApproved`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
       
        settopteenlist(getData.data);
      };

      const topapproveddate = async (topapprovedid) => {
        let dateData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/getApprovedTop10ByDate/${topapprovedid}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setapproveddate(dateData.data);
        console.log(dateData.data);
        
      
        
      };
    
    
  
    return (
        <div>
        <button
          id="munnababa"
          style={{ display: "none" }}
          onClick={() => {
            triggeringFunction();
          }}
        ></button>
        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
            <div className="content-header row"></div>
            <div className="content-body">
              <section id="dashboard-ecommerce">
                <div className="row" id="table-hover-row">
                  <div className="col-12">
                    <div className="card">
                      <div className="crd-wrp">
                        <div className="row align-items-center">
                          <div className="col-md-9">
                            <div className="card-header">
                              <h4 className="card-title">Approved Top 10 By Date</h4>
                            </div>
                          </div>
                          <div className="col-md-3">
                         <div className="selectdate">
                         <div class="mb-1">
                                        <label class="form-label" for="selectLarge">Select Date</label>
                                        <select class="form-select form-select-lg" id="selectLarge" onChange={(d) => {
                                            d.preventDefault();
                                            topapproveddate(d.target.value)
                                          }}>
                                          {
                                            topteenlist.length > 0 ?
                                              topteenlist.map((v,i)=>{
                                                return(
                                                <option value={v.createdDate}>{v.createdDate}</option>
                                                )
                                              })
                                              :
                                              <option>loading</option>
                                          }
                                       
                                            
                                           
                                        </select>
                                    </div>
                         </div>
                          </div>
                        </div>
                      </div>
                      <div className="streamcls table-responsive">

                        {
                          ShowData ? 

                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Profile Picture</th>
                                <th>Description</th>
                                <th>Video</th>
                                <th>game Picture</th>
                                <th>game Name</th>
                              
                               
                               
                              </tr>
                            </thead>
                            <tbody>
                            {approveddate.post.map((v, i) => {
                              return (
                                <tr key={i}>
                                  {/* <td>{approveddate.createdDate?approveddate.createdDate:'Select Date'}</td>  */}
                                  
                                  <td>{v.postid.user.userName}</td>
                                  <td><div className="aniimg"><img src={v.postid.user.profilePicture?v.postid.user.profilePicture:animationPic} alt=""/></div></td>
                                  <td>{v.postid.description}</td>
                                  <td className="playin">
                                      <FancyVideo
                                        source={
                                          "https://thewebtestlink.xyz/" +
                                          v.postid.path
                                        }
                                        poster={playicn}
                                        id={"sintel"}
                                      />
                                    </td>
                                    <td>
                                      <div className="aniimg">
                                        <img
                                          src={
                                            v.postid.game.imagePath
                                              ? v.postid.game.imagePath
                                              : animationPic
                                          }
                                          alt=""
                                        />
                                      </div>
                                    </td>
                                    <td>{v.postid.game.gameName}</td>
                                    
                                    
                                </tr>
                              );
                            })}
                            </tbody>
                          </Table>
                          :
                          <div></div>
                        }


                
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  