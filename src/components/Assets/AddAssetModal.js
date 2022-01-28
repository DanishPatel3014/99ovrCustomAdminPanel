import React, { useState} from "react";
import { Button } from "reactstrap";
import axios from 'axios'





export default function AddAnimationModal() {
    // const close = <button type='button' className='ms-1 btn-close'></button>
    const closeAddAnimationModal = () => {
        document.getElementById('addNewCard').classList.remove('show');
        // console.log('removed')
      }
      const [animationimgstate, setanimationimgstate] = useState(null)
      const [description, setdescription] = useState('')
      const [animationcoin, setanimationcoin] = useState('')
      const [Assetfield, setAssetfield] = useState('')
      const [Tier, setTier] = useState('')
      const [currentCategory, setCurrentCategory] = useState('Tops')
      const changeCategory = (newCategory) => {
          setCurrentCategory(newCategory)

      }
  
      React.useEffect(() => {
            if(currentCategory === 'Jerseys'){
                setTier('All Jerseys')
            }
      }, [currentCategory])

      const handelClick = async () => {
          let getInput = Assetfield;
          if(animationimgstate === 'not_glb') {
              alert('Please select a GLB file first!');
              return;
          }

          if (getInput && currentCategory && animationimgstate && description && animationcoin && Tier) {
              
              var data = new FormData(document.getElementById("assetForm"));
            //   data.append('image',animationimgstate)
            //   data.append('animation',getInput)
            //   data.append('description',description)
            //   data.append('coins',animationcoin)
            //   data.append('category',currentCategory)
            //   data.append('tier',Tier)
            await axios.post(`https://thewebtestlink.xyz/api/admin/createAsset`, data, { headers: { Authorization:  `Bearer ${localStorage.getItem('userToken')}`}});
            // console.log(request)
             setAssetfield('')
             setanimationcoin('')
             setdescription('')
             setTier('')
             setanimationimgstate('')
             setCurrentCategory('')
            document.getElementById('munnababa').click();
            document.getElementById('addNewCard').classList.remove('show');
      }
    }
    function isGLB(file) {
        console.log(file);
        let fileName = file.name;
        let idxDot = fileName.lastIndexOf(".") + 1;
        let extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile === "glb") {
            setanimationimgstate(file);
            return true;
        } else {
            setanimationimgstate('not_glb');
            alert("Only glb files are allowed!");
            return false;
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
                               

                                <form id="assetForm" className="row gy-1 gx-2 mt-75">
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Asset name</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setAssetfield(e.target.value)}} value={Assetfield} className="form-control add-credit-card-mask" name="asset" type="text" placeholder="Enter Asset Name"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Add Description</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setdescription(e.target.value)}} value={description} className="form-control add-credit-card-mask" name="description" type="text" placeholder="Enter Description"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="modalAddCardNumber">Add Coins</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setanimationcoin(e.target.value)}} value={animationcoin} className="form-control add-credit-card-mask" name="coins" type="number" placeholder="Enter Coin"  />
                                           
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="Category">Select Category</label>
                                        <div className="input-group input-group-merge">
                                            <select className="form-select" name="category"  id="Category" onChange={(event) => changeCategory(event.target.value)} defaultValue={currentCategory}>
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
                                        {/* <label className="form-label" htmlFor="modalAddCardNumber">Tier</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={(e)=>{setTier(e.target.value)}} value={Tier} className="form-control add-credit-card-mask" type="text" name="tier" placeholder="Enter Tier"  />  
                                        </div> */}
                                        <label className="form-label" htmlFor="tier">Tier</label>
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
                                                <select className="form-select" name="tier"  id="tier"  onChange={(e)=>{setTier(e.target.value)}} defaultValue={'All Jerseys'}>
                                                    <option selected value="All Jerseys">All Jerseys</option>
                                                </select>
                                                {/* <div className="input-group input-group-merge">
                                                    <input onChange={(e)=>{setanimationcoin(e.target.value)}} value={animationcoin} className="form-control add-credit-card-mask" name="tier" id='tier' type="number" placeholder="Enter Coin"  />
                                                </div> */}
                                            </div>
                                        }
                                    </div>
                                    <div className="col-12">
                                    <label className="form-label" htmlFor="customFile">Upload GLB File</label>
                                     <input 
                                        type="file"
                                        name="image"
                                        onChange={(e)=> isGLB(e.target.files[0])}
                                        className="form-control" id="customFile" accept=".glb"/>
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
