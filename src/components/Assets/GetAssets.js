import React, { useEffect, useState } from "react";
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { MoreVertical, Edit, Trash} from "react-feather";
import axios from "axios";
import AddAssetModal from "./AddAssetModal";
// import animationPic from "../../assets/images/avtar/animation-pic.jpg";
import { Spinner } from "reactstrap";
import { Button } from "reactstrap";
import ReactPaginate from "react-paginate";
// import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

export default function GetAssets() {
  
  const [Assetlist, setAssetlist] = useState([]);
  const [PageCount, setPageCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    triggeringFunction(currentPage);
  }, [currentPage]);

  const triggeringFunction = async (currentPage) => {
//    
    let getData = await axios.get(`https://thewebtestlink.xyz/api/admin/getAssets?page=${currentPage}&limit=10`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    });
    setPageCount(Math.ceil(getData.data.totallength/10))
    console.log(getData.data)
    window.scrollTo(0, 0)
    console.log(getData.data)
    setAssetlist(getData.data.result);
  };
 
  const deletedata = async (animationid) => {
    await axios.delete(
      `https://thewebtestlink.xyz/api/admin/deleteAssets/${animationid}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    
    triggeringFunction(currentPage);
  };

  const localcat = ["Tops", "Shoes", "Jerseys", "Hats", "Bottoms",'Glasses'];

  const openAddAnimationModal = () => {
    document.getElementById("addNewCard").classList.add("show");
  };
  
  //=====UPDATE MODEL======//

  const openUpdateAnimationModal = (v) => {
    document.getElementById("updateNewCard").classList.add("show");
    setupdateanimationstate(v._id);
    setAssetfield(v.asset);
    setCurrentCategory(v.category);
    setanimationimgstate(v.image);
    setanimationcoin(v.coins)
    setdescription(v.description)
    setTier(v.tier)
  };


  const closeUpdateAnimationModal = () => {
    document.getElementById("updateNewCard").classList.remove("show");
  };

  const [updateanimationstate, setupdateanimationstate] = useState("");
  const [animationimgstate, setanimationimgstate] = useState("");
  const [Assetfield, setAssetfield] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [description, setdescription] = useState('')
  const [animationcoin, setanimationcoin] = useState('')
  const [Tier, setTier] = useState('')

  const changeCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  React.useEffect(() => {
    if(currentCategory === 'Jerseys'){
        setTier('All Jerseys')
    }
}, [currentCategory])

  const handelClick = async () => {
    let getInput = Assetfield;
    if (getInput || currentCategory || animationimgstate || description || animationcoin || Tier) {

      var data = new FormData();
      data.append("image", animationimgstate);
      data.append("asset", getInput);
      data.append("category", currentCategory);
      data.append('coins',animationcoin)
      data.append('description',description)
      data.append('tier',Tier)
      // var data = new FormData(document.getElementById("assetFormUpdate"));
      await axios.put(
        `https://thewebtestlink.xyz/api/admin/updateAssets/${updateanimationstate}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      // console.log(request)
      setAssetfield("");
      setanimationimgstate("");
      setanimationcoin('')
      setdescription('')
      setTier('')
      // var data = new FormData();
      data.append("image", animationimgstate);
      document.getElementById("munnababa").click();
      document.getElementById("updateNewCard").classList.remove("show");
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1); 
  }

  useEffect(() => {
    triggeringFunction(currentPage)
  }, [currentPage])

  return (
    <div>
      <button
        id="munnababa"
        style={{ display: "none" }}
        onClick={() => {
          triggeringFunction(currentPage);
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
                            <h4 className="card-title">Assets Details</h4>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="eid-btn">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              onClick={() => {
                                openAddAnimationModal();
                              }}
                            >
                              <i className="fal fa-plus"></i>
                              <span> Add Asset</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      {Assetlist.length > 0 ? (
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>id</th>
                              {/* <th>Animation Picture</th> */}
                              <th>Assets</th>
                              <th>Category</th>
                              <th>Tier</th>
                              <th>description</th>
                              <th>coins</th>
                              <th>Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {Assetlist.map((v, i) => {
                              // let listIndex = i+1; // 0,2
                              // if(currentPage !== 1) listIndex = (listIndex + 10);
                              return (
                                <tr key={i}>
                                  <td>
                                    <span className="align-middle fw-bold">
                                      {currentPage === 1 ? (i + 1) : ((i + (10 * (currentPage - 1)))+1)}
                                    </span>
                                  </td> 
                                  <td>{v.asset}</td>
                                  <td>
                                    <Badge
                                      pill
                                      color={
                                        localcat[0] === v.category
                                          ? "success"
                                          : localcat[1] === v.category
                                          ? "info"
                                          : localcat[2] === v.category
                                          ? "danger"
                                          : localcat[3] === v.category
                                          ? "primary"
                                          : localcat[4] === v.category
                                          ? "warning"
                                          : "black"
                                      }
                                      className="me-1"
                                    >
                                      {" "}
                                      {v.category}{" "}
                                    </Badge>
                                  </td>
                                  <td>{v.tier}</td>
                                  <td>{v.description}</td>
                                  <td>{v.coins}</td>
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
                                          onClick={() => {
                                            openUpdateAnimationModal(v);
                                          }}
                                        >
                                          <Edit className="me-50" size={15} />{" "}
                                          <span className="align-middle">
                                            Edit
                                          </span>
                                        </DropdownItem>
                                        <DropdownItem
                                          href="#"
                                          onClick={(d) => {
                                            d.preventDefault();
                                            deletedata(v._id);
                                          }}
                                        >
                                          <Trash className="me-50" size={15} />{" "}
                                          <span className="align-middle">
                                            Delete
                                          </span>
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
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
                    <ReactPaginate 
                      previousLabel={'<<'}
                      nextLabel={'>>'}
                      breakLabel={'...'}
                      pageCount={PageCount}
                      marginPagesDisplayed={3}
                      pageRangeDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination justify-content-center'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousClassName={'page-item'}
                      previousLinkClassName={'page-link'}
                      nextClassName={'page-item'}
                      nextLinkClassName={'page-link'}
                      breakClassName={'page-item'}
                      breakLinkClassName={'page-link'}
                      activeClassName={'active'}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <AddAssetModal />

      {/* =====UPDATE==MODEL===== */}
      <div>
        <div
          className="modal fade"
          id="updateNewCard"
          tabIndex="-1"
          aria-labelledby="addNewCardTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-transparent">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    closeUpdateAnimationModal();
                  }}
                ></button>
              </div>
              <div className="modal-body px-sm-5 mx-50 pb-5">
                <h1 className="text-center mb-1" id="addNewCardTitle">
                  {" "}
                  Update Asset{" "}
                </h1>

                <form id="assetFormUpdate" className="row gy-1 gx-2 mt-75">
                  <div className="col-12">
                    <label className="form-label" htmlFor="modalAddCardNumber">
                      Asset name
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        onChange={(e) => {
                          setAssetfield(e.target.value);
                        }}
                        value={Assetfield}
                        className="form-control add-credit-card-mask"
                        type="text"
                        placeholder="Enter Animation..."
                      />
                    </div>
                  </div>
                  <div className="col-12">
                      <label className="form-label" htmlFor="modalAddCardNumber">Add Description </label>
                      <div className="input-group input-group-merge">
                          <input onChange={(e)=>{setdescription(e.target.value)}} value={description} className="form-control add-credit-card-mask" type="text" placeholder="Enter Description"  />
                          
                      </div>
                  </div>
                  <div className="col-12">
                      <label className="form-label" htmlFor="modalAddCardNumber">Add Coin </label>
                      <div className="input-group input-group-merge">
                          <input onChange={(e)=>{setanimationcoin(e.target.value)}} value={animationcoin} className="form-control add-credit-card-mask" type="number" placeholder="Enter Coin"  />
                          
                      </div>
                  </div>
                  
                  <div className="col-12">
                    <label className="form-label" htmlFor="modalAddCardNumber">
                      Select Category
                    </label>
                    <div className="input-group input-group-merge">
                      <select
                        className="form-select"
                        id="Category"
                        onChange={(event) => changeCategory(event.target.value)}
                        defaultValue={currentCategory}
                      >
                        <option value="Tops">Tops</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Jerseys">Jerseys	</option>
                        <option value="Hats">Hats</option>
                        <option value="Bottoms">Bottoms</option>
                        <option value="Glasses">Glasses</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                      <label className="form-label" htmlFor="modalAddCardNumber">Tier</label>
                      {
                        currentCategory === 'Tops' ?
                        <div className="input-group input-group-merge">
                            <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={Tier}>
                                <option value="Average">Average</option>
                                <option value="Basic">Basic</option>
                                <option value="Elite">Elite</option>
                            </select>
                        </div>
                        :   currentCategory === 'Shoes' ?
                        <div className="input-group input-group-merge">
                            <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={Tier}>
                                <option value="Average">Average</option>
                                <option value="Basic">Basic</option>
                                <option value="Elite">Elite</option>
                            </select>
                        </div>
                        :   currentCategory === 'Hats' ?
                        <div className="input-group input-group-merge">
                            <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={Tier}>
                                <option value="Average">Average</option>
                                <option value="Basic">Basic</option>
                                <option value="Elite">Elite</option>
                            </select>
                        </div>
                        :   currentCategory === 'Bottoms' ?
                        <div className="input-group input-group-merge">
                            <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={Tier}>
                                <option value="Average">Average</option>
                                <option value="Basic">Basic</option>
                                <option value="Elite">Elite</option>
                            </select>
                        </div>
                        :   currentCategory === 'Glasses' ?
                        <div className="input-group input-group-merge">
                            <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={Tier}>
                                <option value="Average">Average</option>
                                <option value="Basic">Basic</option>
                            </select>
                        </div>
                        : 
                        <div className="input-group input-group-merge">
                            <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={Tier}>
                                <option value="All Jerseys">All Jerseys</option>
                            </select>
                        </div>
                    }
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="customFile">
                      Default file input example
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setanimationimgstate(e.target.files[0])}
                      className="form-control"
                      id="customFile"
                      accept="image/*"
                    />
                  </div>

                  <div className="col-12 text-center">
                    <Button
                      className="me-1"
                      color="primary"
                      onClick={handelClick}
                    >
                      {" "}
                      Update{" "}
                    </Button>
                    <Button
                      color="secondary"
                      outline
                      onClick={closeUpdateAnimationModal}
                    >
                      {" "}
                      Cancel{" "}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
