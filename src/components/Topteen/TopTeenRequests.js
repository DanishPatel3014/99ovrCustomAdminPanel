import React, { useEffect , useState} from "react";
import{Table,Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap";
import { MoreVertical, Edit, Trash } from "react-feather";
import axios from 'axios'

import animationPic from '../../assets/images/avtar/animation-pic.jpg'
  
  export default function Tables() {
   
   

    const [animationlist, setanimationlist] = useState([])


  useEffect(() => {
        triggeringFunction();
    }, [])

    const triggeringFunction = async () => {
      console.log(localStorage.getItem('userToken'));
      let getData = await axios.get(`https://thewebtestlink.xyz/api/admin/getTop10Requests`, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`} });
      setanimationlist(getData.data)
     

    }
    

    
  

    const openAddAnimationModal = () => {
      document.getElementById('addNewCard').classList.add('show');
      
    }
  
    return (
      <div>
        <button id='munnababa' style={{display:'none'}} onClick={()=>{triggeringFunction()}}></button>
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
                        <h4 className="card-title">Animation Details</h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                          </div>
                          <div className="col-md-3">
                            <div className="eid-btn">
                            <button type="button" className="btn btn-outline-primary" onClick={()=>{openAddAnimationModal()}}>
                            <i className="fal fa-plus"></i>
                                            <span> Add Animation</span>
                                        </button>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="table-responsive">
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
                            </tr>
                          </thead>
                          <tbody>
                          {
                            animationlist.map((v,i)=>{
                                console.log(v.postid)
                              return(
                                <tr key={i}>
                              <td>
                                
                                <span className="align-middle fw-bold">
                                  {++i}
                                </span>
                              </td>
                              <td>{v.postid.user.userName}</td>
                              <td><div className="aniimg"><img src={v.postid.user.profilePicture?v.postid.user.profilePicture:animationPic} alt=""/></div></td>
                              <td>{v.postid.description}</td>
                              <td><video width="150" height="150" controls><source src={"https://thewebtestlink.xyz/"+v.postid.path} type="video/mp4"/></video></td>
                              <td><div className="aniimg"><img src={v.postid.game.imagePath?v.postid.game.imagePath:animationPic} alt=""/></div></td>
                              <td>{v.postid.game.gameName}</td>
                              
                              
                              <td>{v.postid.comments}</td>
                              <td>{v.postid.likes}</td>
                       
                            </tr>
                              )
                            })
                          }
                           
                          </tbody>
                        </Table>
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
  