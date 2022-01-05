import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import animationPic from '../../assets/images/avtar/animation-pic.jpg'
import FancyVideo from "react-videojs-fancybox";
import playicn from "../../assets/images/logo/play.png"

  
  export default function Tables() {
   
   

    const [topteenlist, settopteenlist] = useState([])


    useEffect(() => {
        triggeringFunction();
      }, []);
      

    const triggeringFunction = async () => {
        // console.log(localStorage.getItem("userToken"));
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/getTop10Requests`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        settopteenlist(getData.data);
      };
      

    
      const approveTopTen = async (topTenID) => {
        // console.log(streamID)
        axios.put(`https://thewebtestlink.xyz/api/admin/approveTop10Request/${topTenID}`,
          null,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        triggeringFunction();
    }
  

    
  
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
                              <h4 className="card-title">Top 10 Requests</h4>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="eid-btn">
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                              >
                                <i class="fal fa-check"></i>
                                <span> Approve Top 10 Requests</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        {topteenlist.length > 0 ? (
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>userName</th>
                                <th>profilePicture</th>
                                <th>description</th>
                                <th>video</th>
                                <th>game Picture</th>
                                <th>game Name</th>
                                <th>comments</th>
                                <th>likes</th>
                                <th>Approve</th>
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
                                    <td>{v.postid.user.userName}</td>
                                    <td>
                                      <div className="aniimg">
                                        <img
                                          src={
                                            v.postid.user.profilePicture
                                              ? v.postid.user.profilePicture
                                              : animationPic
                                          }
                                          alt=""
                                        />
                                      </div>
                                    </td>
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
      
                                    <td>{v.postid.comments}</td>
                                    <td>{v.postid.likes}</td>
                                    <td><button className="btn btn-success" onClick={()=>{approveTopTen(v._id)}}>Approve</button></td>
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
  