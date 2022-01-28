import React, { useState} from "react";
import { Button } from "reactstrap";
import axios from 'axios'





export default function AddAnimationModal() {
    // const close = <button type='button' className='ms-1 btn-close'></button>
    const closeAddAnimationModal = () => {
        document.getElementById('addNewCard').classList.remove('show');
        // console.log('removed')
      }
      const [animationimgstate, setanimationimgstate] = useState('')
      const [GameNamefield, setGameNamefield] = useState('')
      const [PopularRadio, setpopularRadio] = useState(1)
  
      const handelClick = async () => {
          let getInput = GameNamefield;
          if (getInput && animationimgstate && PopularRadio) {
              let data = new FormData(document.getElementById('gameForm'))
              data.set('popular',PopularRadio)

              await axios.post(`https://thewebtestlink.xyz/api/admin/addGame`, data, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`}});
            // console.log(request)
            setGameNamefield('')
            setanimationimgstate('')
            setpopularRadio('')
            document.getElementById('munnababa').click();
            document.getElementById('addNewCard').classList.remove('show');
      }
    }

    return (
        <>
                <div className="modal fade" id="addNewCard" tabIndex="-1" aria-labelledby="addNewCardTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-transparent">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{closeAddAnimationModal()}}></button>
                            </div>
                            <div className="modal-body px-sm-5 mx-50 pb-5">
                                <h1 className="text-center mb-1" id="addNewCardTitle">Add New Game</h1>
                               

                                <form id='gameForm' className="row gy-1 gx-2 mt-75">
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Game Name</label>
                                        <div className="input-group input-group-merge">
                                            <input name="gameName" onChange={(e)=>{setGameNamefield(e.target.value)}} value={GameNamefield} className="form-control add-credit-card-mask" type="text" placeholder="Enter Animation Name"  />
                                           
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label" htmlFor="customFile">Upload File</label>
                                        <input name="imagePath" type="file" onChange={(e)=>setanimationimgstate(e.target.files[0])} className="form-control" id="customFile" accept="image/*"/>
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
