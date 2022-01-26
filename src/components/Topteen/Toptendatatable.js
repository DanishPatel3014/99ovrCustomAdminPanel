// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import axios from "axios";
import{Row,Col,Card,Input,Label,CardTitle,CardHeader,} from "reactstrap";
import FancyVideo from "react-videojs-fancybox";
import animationPic from '../../assets/images/avtar/animation-pic.jpg'
import playicn from "../../assets/images/logo/play.png"
import e from "cors";

let CheckBoxCounter = 0;
var tenids = [];
let top10 = {
  'top10':[]
};

const pleaseCheckTheCheckBox = (Checking, checkID, name) => {
  console.log(name)

   if(Checking === true){
    ++CheckBoxCounter;
    tenids.push(checkID);

    if(CheckBoxCounter === 10){

      let number = document.getElementsByClassName('myCheckbox').length;
      let numberTag = document.getElementsByClassName('myCheckbox');
      for(var i = 0; i < number; ++i) {
        if(numberTag[i].checked === false) {
          numberTag[i].style.display = 'none';
        }
      }

      document.getElementById(checkID).disabled = false;

      let selectedDivToShow = document.getElementsByClassName('selectMain').length;
      let selectedTagToShow = document.getElementsByClassName('selectMain');
      for(var i = 0; i < selectedDivToShow; ++i) {
        if(selectedTagToShow[i].disabled === false) {
          selectedTagToShow[i].style.display = 'block';
        }
      }

      let selectedDiv = document.getElementsByClassName('selectMain').length;
      let selectedTag = document.getElementsByClassName('selectMain');
      for(var i = 0; i < selectedDiv; ++i) {
        if(selectedTag[i].disabled === true) {
          selectedTag[i].style.display = 'none';
        }
      }

      // document.getElementById('openModalBtn').disabled = false;
    }
    document.getElementById(checkID).disabled = false;
    console.log(tenids)
  }else{
    --CheckBoxCounter

    var currentIndex = tenids.indexOf(checkID)
    tenids = tenids.filter(e => e !== checkID);
    console.log(tenids)

    let number = document.getElementsByClassName('myCheckbox').length;
    let numberTag = document.getElementsByClassName('myCheckbox');
    for(var i = 0; i < number; ++i) {
      if(numberTag[i].checked === false) {
        numberTag[i].style.display = 'block';
      }
    }
    
    // document.getElementById(checkID).disabled = true;
    document.getElementById(checkID).getElementsByTagName('option')[0].selected = 'selected';
    // document.getElementById('openModalBtn').disabled = true;

    let selectedDiv = document.getElementsByClassName('selectMain').length;
    let selectedTag = document.getElementsByClassName('selectMain');
    for(var i = 0; i < selectedDiv; ++i) {
      
        selectedTag[i].style.display = 'none';
      
    }
    // document.getElementById('selectForRank').disabled = true;
  }
}



const RemoveOtherOptions = (selectedID) => {
    console.log(selectedID)
    let selectedDiv = document.getElementsByClassName('selectMain').length;
    let selectedTag = document.getElementsByClassName('selectMain');
    console.log(selectedTag[0].id)

    var newValue;

    for(var i = 0; i < selectedDiv; ++i) {
      if(selectedTag[i].id === selectedID) {
        newValue = selectedTag[i].value;
      }
    }

    for(var i = 0; i < selectedDiv; ++i) {
      var newValue;
      if(selectedTag[i].id === selectedID) {
        newValue = selectedTag[i].value;
      }else{
        selectedTag[i].getElementsByTagName('option')[newValue].style.display = 'none';
      }
    }

    newValue = Number(newValue)

    top10.top10.push({
      "post":selectedID,
      "rank":newValue
    })

    console.log(top10.top10.length)

    if(top10.top10.length > 9){
      document.getElementById('openModalBtn').disabled = false;
      console.log(top10)
    }


}


// ** Table Common Column ya hamara table
export const columns = [

  {
    name: "Checkbox",
    cell: (row) => (
      <div className="form-check">
        <Input className="myCheckbox" type="checkbox" value={row.postid.postid} name={row.postid.user.userName}  onChange={(e)=>{
          pleaseCheckTheCheckBox(e.target.checked, e.target.value,e.target.name)
          }} />
      </div>
    ),
  },
  {
    name: "Name",
    // minWidth: "250px",
    sortable: (row) => row.postid.user.userName,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div className="user-info text-truncate ms-1">
          <span className="d-block fw-bold text-truncate">{row.postid.user.userName}</span>
          <small>{row.post}</small>
        </div>
      </div>
    ),
  },
  {
    name: "Profile Picture",
    sortable: false,
    // minWidth: "250px",
    selector: (row) => row.postid.user.profilePicture,
    cell: (row) => (
      <div className="aniimg">
        <img
          src={
            row.postid.user.profilePicture
              ? row.postid.user.profilePicture
              : animationPic
          }
          alt=""
        />
      </div>
    )
  },
  {
    name: "Description",
    sortable: true,
    // minWidth: "250px",
    selector: (row) => row.postid.description,
  },
  {
    name: "Video",
    sortable: false,
    // minWidth: "150px",
    selector: (row) => row.postid.path,
    cell: (row) => (
      <div>
        <FancyVideo
          source={
            
          `https://thewebtestlink.xyz/${row.postid.path}`
          }
          poster={playicn}
          id={"sintel"}
        />
        {/* <span>{row.postid.path}</span> */}
      </div>
    )
  },

  {
    name: "Game Picture",
    sortable: false,
    // minWidth: "150px",
    selector: (row) => row.game.imagePath,
    cell: (row) => (
      <div className="aniimg">
        <img
          src={
            row.postid.game.imagePath
              ? row.postid.game.imagePath
              : animationPic
          }
          alt=""
        />
      </div>
    )
  },
  {
    name: "Game Name",
    sortable: true,
    // minWidth: "250px",
    selector: (row) => row.postid.game.gameName,
  },
  {
    name: "Comments",
    sortable: true,
    // minWidth: "100px",
    selector: (row) => row.postid.comments,
  },
  {
    name: "Likes",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.postid.likes,
  },
  {
    name: "Rank",
    cell: (row) => (
      <div className="my-select">
        <select className="selectMain" style={{display:'none'}} disabled='true' id={row.postid.postid} onChange={()=>{RemoveOtherOptions(row.postid.postid)}}>
          <option id={0} value={0} style={{display:'none'}}>Nill</option>
          <option id={1} value={1}>1</option>
          <option id={2} value={2}>2</option>
          <option id={3} value={3}>3</option>
          <option id={4} value={4}>4</option>
          <option id={5} value={5}>5</option>
          <option id={6} value={6}>6</option>
          <option id={7} value={7}>7</option>
          <option id={8} value={8}>8</option>
          <option id={9} value={9}>9</option>
          <option id={10} value={10}>10</option>
        </select>
      </div>
    ),
  }, 
];

const DataTableWithButtons = () => {

  const [CheckBoxCounter, setCheckBoxCounter] = useState(0);
  const [topteenlist, settopteenlist] = useState([]);

  useEffect(() => {
    triggeringFunction();
  }, []);

  const triggeringFunction = async () => {
    // console.log(localStorage.getItem("userToken"));

    let getData = await axios.get(
      `https://thewebtestlink.xyz/api/admin/getTop10Requests`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    settopteenlist(getData.data);

    console.log(topteenlist)

  };

  const sendTopTenToDB = async () => {
    document.getElementById('openModalBtn').disabled = true;
    console.log(top10);

    let getData = await axios.post(
      `https://thewebtestlink.xyz/api/admin/approveTop10Request`,
      top10,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );

    console.log(getData)

    triggeringFunction();

  };

  useEffect(() => {
    console.log(topteenlist)
  }, [topteenlist]);
  

  

  // ** States

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);


    if (value.length) {
      updatedData = topteenlist.filter((item) => {
        const startsWith =
          item.postid.user.userName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.postid.game.gameName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.postid.comments.toString().startsWith(value) ||
          item.postid.likes.toString().startsWith(value) ||
          item.postid.description.toLowerCase().startsWith(value)
         

        const includes =
          item.postid.user.userName.toLowerCase().includes(value.toLowerCase()) ||
          item.postid.game.gameName.toLowerCase().includes(value.toLowerCase()) ||
          item.postid.comments.toString().includes(value) ||
          item.postid.likes.toString().includes(value) ||
          item.postid.description.toLowerCase().includes(value)
      

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData(updatedData);
      setSearchValue(value);
    }
  };

  return (
    <div>
      <div className="app-content content ">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row"></div>
          <div className="content-body">
            <section id="dashboard-ecommerce">
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <Fragment>
                    <Card>
                      <CardHeader className=" align-md-items-center  border-bottom">
                          <div className="col-md-8"><CardTitle tag="h4">Top 10 Requests</CardTitle></div>
                          <div className="col-md-4">
                          <div className="d-flex mt-md-0 mt-1">
                          <Col
                            className="d-flex align-items-center justify-content-end "
                           
                          >
                            <Label className="me-1" for="search-input">
                              Search
                            </Label>
                            <Input
                              className="dataTable-filter "
                              type="text"
                              bsSize="sm"
                              id="search-input"
                              value={searchValue}
                              onChange={handleFilter}
                            />
                          </Col>
                          <abbr title="Please select Top 10" onClick={()=>sendTopTenToDB()}>
                            <button  id="openModalBtn" disabled="true" style={{marginLeft:'10px'}} className="btn btn-success">Proceed</button>
                          </abbr>
                        </div>
                          </div>
                          <div className="col-md-12" style={{marginLeft:'10px'}}><CardTitle tag='p'>Please select 10 checkbox then give ranking and proceed</CardTitle></div>
                        
                        
                      </CardHeader>
                    
                      <div className="react-dataTable">
                        <DataTable
                          noHeader
                          selectableRows
                          columns={columns}
                          className="react-dataTable"
                          sortIcon={<ChevronDown size={10} />}
                          data={searchValue.length ? filteredData : topteenlist}
                          // selectableRowsComponent={BootstrapCheckbox }
                        />
                      </div>
                    </Card>
                  </Fragment>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableWithButtons;
