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
      const [description, setdescription] = useState('')
      const [animationcoin, setanimationcoin] = useState('')
      const [Assetfield, setAssetfield] = useState('')
      const [Tier, setTier] = useState('')
      const [currentCategory, setCurrentCategory] = React.useState('GREEN')
      const changeCategory = (newCategory) => {
          setCurrentCategory(newCategory)
      }
  
      const handelClick = async () => {
          let getInput = Assetfield;
          if (getInput && currentCategory && animationimgstate && description && animationcoin && Tier) {
              
              var data = new FormData();
              data.append('image',animationimgstate)
              data.append('animation',getInput)
              data.append('description',description)
              data.append('coins',animationcoin)
              data.append('category',currentCategory)
              data.append('TIER',Tier)
              console.log(animationimgstate)
            //   console.log(data)
              let request = await axios.post(`https://thewebtestlink.xyz/api/admin//createAsset`, data, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`}});
            // console.log(request)
             setAssetfield('')
             setanimationcoin('')
             setdescription('')
             setTier('')
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
                                <h1 className="text-center mb-1" id="addNewCardTitle">Add New Asset</h1>
                               

                                <form  className="row gy-1 gx-2 mt-75">
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Asset name</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setAssetfield(e.target.value)}} value={Assetfield} className="form-control add-credit-card-mask" type="text" placeholder="Enter Asset Name"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Add Description</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setdescription(e.target.value)}} value={description} className="form-control add-credit-card-mask" type="text" placeholder="Enter Description"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Add Coins</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setanimationcoin(e.target.value)}} value={animationcoin} className="form-control add-credit-card-mask" type="number" placeholder="Enter Coin"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Tier</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setTier(e.target.value)}} value={Tier} className="form-control add-credit-card-mask" type="text" placeholder="Enter Tier"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Select Category</label>
                                        <div className="input-group input-group-merge">
                                        <select className="form-select"  id="Category" onChange={(event) => changeCategory(event.target.value)} defaultValue={currentCategory}>
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
                                    <label className="form-label" htmlFor="customFile">Image</label>
                                     <input type="file" onChange={(e)=>setanimationimgstate(e.target.files[0])} className="form-control" id="customFile" accept="image/*"/>
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
