import React, { useEffect , useState} from "react";
import{Table,Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap";
import { MoreVertical, Edit, Trash } from "react-feather";
import axios from 'axios'
import AddAnimationModal from "./AddAnimationModal";
  
  export default function Tables() {
   
   
    const [datastate, setdatastate] = useState('')
    const [animationlist, setanimationlist] = useState([])


  useEffect(async () => {
  
    console.log(localStorage.getItem('userToken'));
        let getData = await axios.get(`https://thewebtestlink.xyz/api/animation`, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`} });
        if(getData.data != animationlist){
          setanimationlist(getData.data)
        }
     
        
    }, [animationlist])

    const localcat = [
      'GREEN',
      'BLUE',
      'RED', 
      'PURPLE',
      'GOLD',
    ]

    const openAddAnimationModal = () => {
      document.getElementById('addNewCard').classList.add('show');
      
    }
  
    return (
      <div>
        <div class="app-content content ">
          <div class="content-overlay"></div>
          <div class="header-navbar-shadow"></div>
          <div class="content-wrapper container-xxl p-0">
            <div class="content-header row"></div>
            <div class="content-body">
              <section id="dashboard-ecommerce">
                <div class="row" id="table-hover-row">
                  <div class="col-12">
                    <div class="card">
                      <div className="crd-wrp">
                        <div className="row align-items-center">
                          <div className="col-md-9">
                          <div class="card-header">
                        <h4 class="card-title">Animation Details</h4>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                          </div>
                          <div className="col-md-3">
                            <div className="eid-btn">
                            <button type="button" class="btn btn-outline-primary" onClick={()=>{openAddAnimationModal()}}>
                            <i class="fal fa-plus"></i>
                                            <span> Add Animation</span>
                                        </button>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div class="table-responsive">
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>Animation Name</th>
                              <th>Category</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            animationlist.map((v,i)=>{
                              return(
                                <tr key={i}>
                              <td>
                                
                                <span className="align-middle fw-bold">
                                  {++i}
                                </span>
                              </td>
                              <td>{v.animation}</td>
  
                              <td>
                             {/* "light-danger" */}
                                <Badge pill color={
                                  localcat[0] == v.category ? 'success' : 
                                  localcat[1] == v.category ? 'info' :
                                  localcat[2] == v.category ? 'danger' :
                                  localcat[3] == v.category ? 'primary' :
                                  'warning'
                                } 
                                className="me-1" > {v.category} </Badge>
                              </td>
                              <td>
                                <UncontrolledDropdown>
                                  <DropdownToggle
                                    className="icon-btn hide-arrow"
                                    color="transparent"
                                    size="sm"
                                    caret
                                  >
                                    <MoreVertical size={15} />
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Edit className="me-50" size={15} />{" "}
                                      <span className="align-middle">Edit</span>
                                    </DropdownItem>
                                    <DropdownItem
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Trash className="me-50" size={15} />{" "}
                                      <span className="align-middle">Delete</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
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
        <AddAnimationModal />
      </div>
    );
  }
  