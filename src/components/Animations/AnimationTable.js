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
import AddAnimationModal from "./AddAnimationModal";
import animationPic from "../../assets/images/avtar/animation-pic.jpg";
import { Spinner } from "reactstrap";
import { Button } from "reactstrap";

export default function Tables() {
  const [animationlist, setanimationlist] = useState([]);

  useEffect(() => {
    triggeringFunction();
  }, []);

  const triggeringFunction = async () => {
    console.log(localStorage.getItem("userToken"));
    let getData = await axios.get(`https://thewebtestlink.xyz/api/animation`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
    });
    setanimationlist(getData.data);
  };
  const deletedata = async (animationid) => {
    await axios.delete(
      `https://thewebtestlink.xyz/api/admin/deleteAnimation/${animationid}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    triggeringFunction();
  };

  const localcat = ["GREEN", "BLUE", "RED", "PURPLE", "GOLD"];

  const openAddAnimationModal = () => {
    document.getElementById("addNewCard").classList.add("show");
  };
  
  //=====UPDATE MODEL======//
  const openUpdateAnimationModal = (v) => {
    document.getElementById("updateNewCard").classList.add("show");
    setupdateanimationstate(v._id);
    setanimationfield(v.animation);
    setCurrentCategory(v.category);
    setanimationimgstate(v.image);
  };


  // const close = <button type="button" className="ms-1 btn-close"></button>;
  const closeUpdateAnimationModal = () => {
    document.getElementById("updateNewCard").classList.remove("show");
  };
  const [updateanimationstate, setupdateanimationstate] = useState("");
  const [animationimgstate, setanimationimgstate] = useState("");
  const [animationfield, setanimationfield] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  const changeCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  // const AppendNameFiled = (e) => {
  //   console.log(e.target.value);
  //   setanimationfield(e.target.value);
  //   var data = new FormData();
  //   data.append("animation", animationfield);
  // };
  // const AppendCatField = (e) => {
  //   changeCategory(e.target.value);
  //   var data = new FormData();
  //   data.append("category", currentCategory);
  // };
  // const AppendImgField = (e) => {
  //   setanimationimgstate(e.target.files[0]);
  //   var data = new FormData();
  //   data.append("image", animationimgstate);
  // };

  const handelClick = async () => {
    let getInput = animationfield;
    if (getInput || currentCategory || animationimgstate) {

      var data = new FormData();
      data.append("image", animationimgstate);
      data.append("animation", getInput);
      data.append("category", currentCategory);

      // let newdata = {
      //   animation: animationfield,
      //   category: currentCategory,
      //   image: animationimgstate,
      // };

      console.log(data);

      let request = await axios.put(
        `https://thewebtestlink.xyz/api/admin/updateAnimation/${updateanimationstate}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(request)
      setanimationfield("");
      setanimationimgstate("");
      var data = new FormData();
      data.append("image", animationimgstate);
      document.getElementById("munnababa").click();
      document.getElementById("updateNewCard").classList.remove("show");
    }
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
                            <h4 className="card-title">Animation Details</h4>
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
                              <span> Add Animation</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      {animationlist.length > 0 ? (
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
                            {animationlist.map((v, i) => {
                              return (
                                <tr key={i}>
                                  <td>
                                    <span className="align-middle fw-bold">
                                      {++i}
                                    </span>
                                  </td>
                                  <td>
                                    <div className="aniimg">
                                      <img
                                        src={v.image ? v.image : animationPic}
                                        alt=""
                                      />
                                    </div>
                                  </td>
                                  <td>{v.animation}</td>

                                  <td>
                                    <Badge
                                      pill
                                      color={
                                        localcat[0] == v.category
                                          ? "success"
                                          : localcat[1] == v.category
                                          ? "info"
                                          : localcat[2] == v.category
                                          ? "danger"
                                          : localcat[3] == v.category
                                          ? "primary"
                                          : "warning"
                                      }
                                      className="me-1"
                                    >
                                      {" "}
                                      {v.category}{" "}
                                    </Badge>
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <AddAnimationModal />

      {/* =====UPDATE==MODEL===== */}
      <div>
        <div
          className="modal fade"
          id="updateNewCard"
          tabindex="-1"
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
                  Update Animation{" "}
                </h1>

                <form className="row gy-1 gx-2 mt-75">
                  <div className="col-12">
                    <label className="form-label" for="modalAddCardNumber">
                      Animation name
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        onChange={(e) => {
                          setanimationfield(e.target.value);
                        }}
                        value={animationfield}
                        className="form-control add-credit-card-mask"
                        type="text"
                        placeholder="Enter Animation..."
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label" for="modalAddCardNumber">
                      Select Category
                    </label>
                    <div className="input-group input-group-merge">
                      <select
                        className="form-select"
                        id="Category"
                        onChange={(event) => changeCategory(event.target.value)}
                        defaultValue={"GREEN"}
                      >
                        <option value="GREEN">GREEN</option>
                        <option value="BLUE">BLUE</option>
                        <option value="RED">RED</option>
                        <option value="PURPLE">PURPLE</option>
                        <option value="GOLDEN">GOLDEN</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label" for="customFile">
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

const SpinnerGrowColors = () => {
  return (
    <React.Fragment>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="light" />
      <Spinner type="grow" color="dark" />
    </React.Fragment>
  );
};
