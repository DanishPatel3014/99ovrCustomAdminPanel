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
import AddGameModal from "./AddGameModal";
import animationPic from "../../assets/images/avtar/animation-pic.jpg";
import { Spinner } from "reactstrap";
import { Button } from "reactstrap";
import ReactPaginate from "react-paginate";
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

export default function GetAssets() {
  
  const [Assetlist, setAssetlist] = useState([]);
  const [PageCount, setPageCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);

  useEffect((currentPage) => {
    triggeringFunction(currentPage);
  }, []);

  const triggeringFunction = async (currentPage) => {
   
    let getData = await axios.get(`https://thewebtestlink.xyz/api/admin/getGames?page=${currentPage}&limit=10`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    });
    setPageCount(Math.ceil(getData.data.totallength/10))
    window.scrollTo(0, 0)

    setAssetlist(getData.data.result)
    setTimeout(() => {
        console.log(getData.data)
    }, 2000);
  };
 
  const deletedata = async (Gameid) => {
    await axios.put(
      `https://thewebtestlink.xyz/api/admin/deleteGame/${Gameid}`,
      null,
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
    setupdateGamestate(v._id);
    setGamefield(v.gameName);
    setGameimgstate(v.imagePath);
    setpopularRadio(v.popular)
  };


  const closeUpdateAnimationModal = () => {
    document.getElementById("updateNewCard").classList.remove("show");
  };

  const [updateGamestate, setupdateGamestate] = useState("");
  const [Gameimgstate, setGameimgstate] = useState("");
  const [Gamefield, setGamefield] = useState("");
  const [PopularRadio, setpopularRadio] = useState(1)

  const handelClick = async () => {
    let getInput = Gamefield;
    if (getInput || PopularRadio || Gameimgstate) {

      let data = new FormData(document.getElementById('gameForm'))
      data.set('popular',PopularRadio)
      data.set('gameName',Gamefield)
      data.set('imagePath',Gameimgstate)
      // var data = new FormData(document.getElementById("assetFormUpdate"));
      await axios.put(
        `https://thewebtestlink.xyz/api/admin/editGame/${updateGamestate}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      // console.log(request)
      setGamefield("");
      setGameimgstate("");
      // var data = new FormData();
      data.append("image", Gameimgstate);
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
                            <h4 className="card-title">Game Details</h4>
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
                              <span> Add Game</span>
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
                              <th>ID</th>
                              <th>Game Name</th>
                              <th>Image</th>
                              <th>Popular</th>
                              <th>Created Date</th>
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
                                      {currentPage === 1 ? (i + 1) : ((i + (10 * currentPage))+1)}
                                    </span>
                                  </td> 
                                  <td>{v.gameName}</td>
                                  <td> 
                                    <div className="aniimg">
                                      <ReactFancyBox
                                          thumbnail={v.imagePath ? v.imagePath : animationPic}
                                          image={v.imagePath ? v.imagePath : animationPic}/>
                                    </div>
                                  </td>
                                  <td>{v.popular == true ? 'true' : 'false' }</td>
                                  <td>{v.createdDate}</td>
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
      <AddGameModal />

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
                  Edit Game{" "}
                </h1>

                <form id="gameForm" className="row gy-1 gx-2 mt-75">
                  <div className="col-12">
                    <label className="form-label" htmlFor="modalAddCardNumber">
                      Game Name
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        name="gameName"
                        onChange={(e) => {
                          setGamefield(e.target.value);
                        }}
                        value={Gamefield}
                        className="form-control add-credit-card-mask"
                        type="text"
                        placeholder="Enter Game Name..."
                      />
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <label className="form-label" htmlFor="customFile">
                      Default file input example
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setGameimgstate(e.target.files[0])}
                      className="form-control"
                      id="customFile"
                      name="imagePath"
                      accept="image/*"
                    />
                  </div>

                  <div className="col-12">

                      <ul>
                          <li>
                              <label htmlFor="popularRadio">Popular</label>
                              <input onClick={(e)=>{
                                      setpopularRadio(e.target.value)
                                      console.log(e.target.value)
                                  }} name="popular" value={true} type='radio' id='popularRadio' />
                          </li>
                          <li>
                              <label htmlFor="NonpopularRadio">Non Popular</label>
                              <input onClick={(e)=>{
                                      setpopularRadio(e.target.value)
                                      console.log(e.target.value)
                                  }} name="popular" value={false} type='radio' id='NonpopularRadio' />
                          </li>
                      </ul>

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
