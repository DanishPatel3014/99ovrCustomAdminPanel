import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import animationPic from '../../assets/images/avtar/animation-pic.jpg'
import{Badge,} from "reactstrap";
  
  export default function Tables() {
   
   

    const [topteenlist, settopteenlist] = useState([])


    useEffect(() => {
        triggeringFunction();
      }, []);
      

    const triggeringFunction = async () => {
        // console.log(localStorage.getItem("userToken"));
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/getPendingTournaments`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        settopteenlist(getData.data);
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
                              <h4 className="card-title">Turnament Requests</h4>
                            </div>
                          </div>
                          <div className="col-md-3">
                           
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        {topteenlist.length > 0 ? (
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>user Name</th>
                                <th>profile Picture</th>
                                <th>plat form</th>
                                <th>game Name</th>
                                <th>player Type</th>
                                <th>noOf Player</th>
                                <th>tournament Name</th>
                                <th>tournament Type</th>
                                <th>tournament Detail</th>
                                <th>tournament Status</th>
                                
                               
                              </tr>
                            </thead>
                            <tbody>
                              {topteenlist.map((v, i) => {
                               
                                return (
                                  <tr key={i}>
                                    <td>
                                      <span className="align-middle fw-bold">
                                        {++i}
                                      </span>
                                    </td>
                                    <td>{v.createdBy.userName}</td>
                                    <td>
                                      <div className="aniimg">
                                        <img
                                          src={
                                            v.createdBy.profilePicture
                                              ? v.createdBy.profilePicture
                                              : animationPic
                                          }
                                          alt=""
                                        />
                                      </div>
                                    </td>
                                    <td>{v.platform.platform}</td>
                                    <td>{v.game.gameName}</td>
                                    <td>{v.playerType}</td>
                                    <td>{v.noOfPlayer}</td>
                                    <td>{v.tournamentName}</td>
                                    <td>{v.tournamentType}</td>
                                    <td className="turna-det">{v.tournamentDetail}</td>
                                    <td>
                                    <Badge
                                      pill
                                      color='danger'
                                      className="me-1"
                                    >
                                     
                                      {v.tournamentStatus}
                                    </Badge>
                                  </td>

                                    
                                
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        ) : (
                          <div className="spiner">
                            <Spinner type="grow" color="primary" />
                            <Spinner type="grow" color="secondary" />
                            <Spinner type="grow" color="success" />
                          </div>
                        )}
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
  