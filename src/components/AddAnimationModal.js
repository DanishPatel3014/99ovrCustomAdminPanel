import React, { useState} from "react";
import { Button } from "reactstrap";
import axios from 'axios'
import { Toast, ToastBody, ToastHeader} from 'reactstrap'




export default function AddAnimationModal() {
    const close = <button type='button' className='ms-1 btn-close'></button>
    const closeAddAnimationModal = () => {
        document.getElementById('addNewCard').classList.remove('show');
        console.log('removed')
      }
      const [animationimgstate, setanimationimgstate] = useState('')
      const [animationfield, setanimationfield] = useState('')
      const [currentCategory, setCurrentCategory] = React.useState('GREEN')
      const changeCategory = (newCategory) => {
          setCurrentCategory(newCategory)
      }
  
      const handelClick = async () => {
          let getInput = animationfield;
          if (getInput && currentCategory&&animationimgstate) {
              // let data = {
              //     animation: getInput,
              //     category: currentCategory,
              //     image: animationimgstate
              // }
              var data = new FormData();
              data.append('image',animationimgstate)
              data.append('animation',getInput)
              data.append('category',currentCategory)
              console.log(data)
              let request = await axios.post(`https://thewebtestlink.xyz/api/admin/createAnimation`, data, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`}});
              console.log(request)
             setanimationfield('')
              document.getElementById('munnababa').click();
                if (request.data.message) {
                    <Toast>
                    <ToastHeader close={close} icon='primary'>
                      Vuexy
                    </ToastHeader>
                    <ToastBody>This is a toast with a primary icon — check it out!</ToastBody>
                  </Toast>
                } else if (request.data.animation) {
                    <Toast>
                    <ToastHeader close={close} icon='primary'>
                      Vuexy
                    </ToastHeader>
                    <ToastBody>This is a toast with a primary icon — check it out!</ToastBody>
                  </Toast>
                } else {
                    <Toast>
                    <ToastHeader close={close} icon='primary'>
                      Vuexy
                    </ToastHeader>
                    <ToastBody>This is a toast with a primary icon — check it out!</ToastBody>
                  </Toast>
                }
            } else {
                <Toast>
                <ToastHeader close={close} icon='primary'>
                  Vuexy
                </ToastHeader>
                <ToastBody>This is a toast with a primary icon — check it out!</ToastBody>
              </Toast>
            }
            document.getElementById('addNewCard').classList.remove('show');
      }

    return (
        <>
                <div class="modal fade" id="addNewCard" tabindex="-1" aria-labelledby="addNewCardTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-transparent">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{closeAddAnimationModal()}}></button>
                            </div>
                            <div class="modal-body px-sm-5 mx-50 pb-5">
                                <h1 class="text-center mb-1" id="addNewCardTitle">Add New Animation</h1>
                               

                                <form  class="row gy-1 gx-2 mt-75">
                                    <div class="col-12">
                                        <label class="form-label" for="modalAddCardNumber">Animation name</label>
                                        <div class="input-group input-group-merge">
                                            <input onChange={(e)=>{setanimationfield(e.target.value)}} value={animationfield} class="form-control add-credit-card-mask" type="text" placeholder="Enter Animation Name"  />
                                           
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label" for="modalAddCardNumber">Select Category</label>
                                        <div class="input-group input-group-merge">
                                        <select class="form-select"  id="Category" onChange={(event) => changeCategory(event.target.value)} defaultValue={currentCategory}>
                                        <option value="GREEN">GREEN</option>
                                <option value="BLUE">BLUE</option>
                                <option value="RED">RED</option>
                                <option value="PURPLE">PURPLE</option>
                                <option value="GOLDEN">GOLDEN</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    <label class="form-label" for="customFile">Default file input example</label>
<input type="file" onChange={(e)=>setanimationimgstate(e.target.files[0])} className="form-control" id="customFile" accept="image/*"/>
                                    </div>

                                 

                                   

                                    <div class="col-12 text-center">
                                    
                                    <Button className='me-1' color='primary'   onClick={handelClick}>Submit</Button>
                                        <Button  color='secondary'outline onClick={closeAddAnimationModal}>
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
