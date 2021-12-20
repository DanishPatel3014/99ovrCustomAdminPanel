import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";

export default function UpdateAnimationModal(props) {

  const close = <button type="button" className="ms-1 btn-close"></button>;
  const closeUpdateAnimationModal = () => {
    document.getElementById("updateNewCard").classList.remove("show");
  };

  const [animationimgstate, setanimationimgstate] = useState("");
  const [animationfield, setanimationfield] = useState(props.animation);
  const [currentCategory, setCurrentCategory] = useState(props.category);

  console.log(props.category)

  const changeCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  const handelClick = async () => {
    let getInput = animationfield;
    if (getInput || currentCategory || animationimgstate) {
      var data = new FormData();
      data.append("image", animationimgstate);
      data.append("animation", getInput);
      data.append("category", currentCategory);
      console.log(data);
      let request = await axios.put(
        `https://thewebtestlink.xyz/api/admin/updateAnimation/${props._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      setanimationfield("");
      setanimationimgstate("");
      data.append("image", animationimgstate);
      document.getElementById("munnababa").click();
      document.getElementById("updateNewCard").classList.remove("show");
    }
  };


  

  return (
    <>
      <div
        class="modal fade"
        id="updateNewCard"
        tabindex="-1"
        aria-labelledby="addNewCardTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-transparent">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  closeUpdateAnimationModal();
                }}
              ></button>
            </div>
            <div class="modal-body px-sm-5 mx-50 pb-5">
              <h1 class="text-center mb-1" id="addNewCardTitle">
                Update Animation
              </h1>

              <form class="row gy-1 gx-2 mt-75">
                <div class="col-12">
                  <label class="form-label" for="modalAddCardNumber">
                    Animation name
                  </label>
                  <div class="input-group input-group-merge">
                    <input
                      onChange={(e) => {
                        setanimationfield(e.target.value);
                      }}
                      value={animationfield}
                      class="form-control add-credit-card-mask"
                      type="text"
                      placeholder="Enter Animation..."
                    />
                  </div>
                </div>
                <div class="col-12">
                  <label class="form-label" for="modalAddCardNumber">
                    Select Category
                  </label>
                  <div class="input-group input-group-merge">
                    <select
                      class="form-select"
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
                  <label class="form-label" for="customFile">
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

                <div class="col-12 text-center">
                  <Button
                    className="me-1"
                    color="primary"
                    onClick={handelClick}
                  >
                    Update
                  </Button>
                  <Button
                    color="secondary"
                    outline
                    onClick={closeUpdateAnimationModal}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
