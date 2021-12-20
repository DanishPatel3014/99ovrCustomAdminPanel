import React, { useEffect , useState} from "react";
import{Table,Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap";
import { MoreVertical, Edit, Trash, Delete } from "react-feather";
import axios from 'axios'
import AddAnimationModal from "./AddAnimationModal";
import animationPic from '../assets/images/avtar/animation-pic.jpg'
import { Spinner } from 'reactstrap'
  
  export default function Tables() {
   
   
 
    const [animationlist, setanimationlist] = useState([])


  useEffect(() => {
        triggeringFunction();
    }, [])

    const triggeringFunction = async () => {
      console.log(localStorage.getItem('userToken'));
      let getData = await axios.get(`https://thewebtestlink.xyz/api/animation`, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`} });
      setanimationlist(getData.data)

    }
    const deletedata = async (animationid)=>{
await axios.delete(`https://thewebtestlink.xyz/api/admin/deleteAnimation/${animationid}`, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`} })
triggeringFunction();
    }

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
        <button id='munnababa' style={{display:'none'}} onClick={()=>{triggeringFunction()}}></button>
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
                      
                      
                      {
                            animationlist.length>0
                            ?
                       
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>Animation Picture</th>
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
    <td><div className="aniimg"><img src={v.image?v.image:animationPic} alt=""/></div></td>
    <td>{v.animation}</td>
    
    <td>
  
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
            href="#"
            onClick={(d)=>{
              d.preventDefault()
           deletedata(v._id)
            }}
          >
            <Trash className="me-50" size={15} />{" "}
            <span className="align-middle" >Delete</span>
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
:
<div className="spiner">
<Spinner type='grow' color='primary' />
        <Spinner type='grow' color='secondary' />
        <Spinner type='grow' color='success' />
  
</div>
                          }
                        
                       
                        
                      
                        
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
  
  const SpinnerGrowColors = () => {
    return (
      <React.Fragment>
        <Spinner type='grow' color='primary' />
        <Spinner type='grow' color='secondary' />
        <Spinner type='grow' color='success' />
        <Spinner type='grow' color='danger' />
        <Spinner type='grow' color='warning' />
        <Spinner type='grow' color='info' />
        <Spinner type='grow' color='light' />
        <Spinner type='grow' color='dark' />
      </React.Fragment>
    )
  }
