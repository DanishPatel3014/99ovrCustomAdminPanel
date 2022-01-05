import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import animationPic from '../../assets/images/avtar/animation-pic.jpg'
import FancyVideo from "react-videojs-fancybox";
import playicn from "../../assets/images/logo/play.png"

  
  export default function ApprovedTopTen() {
   
   

    const [topteenlist, settopteenlist] = useState([])


    useEffect(() => {
        triggeringFunction();
      }, []);
      

    const triggeringFunction = async () => {
        // console.log(localStorage.getItem("userToken"));
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/approveTop10Request`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        console.log(getData.data)
        // settopteenlist(getData.data);
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
                              <h4 className="card-title">Stream City Request</h4>
                            </div>
                          </div>
                          <div className="col-md-3">
                            {/* <div className="eid-btn">
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                              >
                                <i class="fal fa-check"></i>
                                <span> Approve Top 10 Requests</span>
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="streamcls table-responsive">
                        {topteenlist.length > 0 ? (
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>user name</th>
                                <th>game name</th>
                               
                                <th>Stream Picture</th>
                                
                                <th>platform</th>
                                <th>time Limit</th>
                                <th>time Slot</th>
                                <th>time Zone</th>
                                <th>stream Date</th>
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
                                    <td>{v.userid.userName}</td>
                                    <td>{v.game.gameName}</td>
                                   
                                    <td>
                                      <div className="aniimg">
                                        <img loading="lazy"
                                          src={
                                            v.thumbnail
                                              ? v.thumbnail
                                              : animationPic
                                          }
                                          alt=""
                                        />
                                      </div>
                                    </td>
                                   
                                    
                                    <td>{v.platform}</td>
                                    <td>{v.timeLimit}</td>
                                    <td>{v.timeSlot}</td>
                                    <td>{v.timeZone}</td>
                                    <td>{v.streamDate}</td>
                                   
                                   
                                    
                                   
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        ) : topteenlist.length ? (
                          <div className="spiner">
                            <p>No Approved Stream</p>
                          </div>
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
  