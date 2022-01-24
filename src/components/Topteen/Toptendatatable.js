// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import axios from "axios";
import{Row,Col,Card,Input,Label,CardTitle,CardHeader,} from "reactstrap";
import FancyVideo from "react-videojs-fancybox";
import animationPic from '../../assets/images/avtar/animation-pic.jpg'
import playicn from "../../assets/images/logo/play.png"

let CheckBoxCounter = 0;

const pleaseCheckTheCheckBox = (Checking) => {
  
  // if(CheckBoxCounter === 10 && Checking === true){
  //   console.log('Handle From Here')
  //   console.log(CheckBoxCounter)
  //   console.log(Checking)
  //   let number = document.getElementsByClassName('myCheckbox').length;
  //   let numberTag = document.getElementsByClassName('myCheckbox');
  //   for(var i = 0; i < number; ++i) {
  //     if(numberTag[i].checked === true) {
  //       console.log('true bc')
  //     }
  //   }
  // }
  // else
   if(Checking === true){
    ++CheckBoxCounter;
    if(CheckBoxCounter === 10){
      let number = document.getElementsByClassName('myCheckbox').length;
      let numberTag = document.getElementsByClassName('myCheckbox');
      for(var i = 0; i < number; ++i) {
        if(numberTag[i].checked === false) {
          numberTag[i].style.display = 'none';
        }
      }
    }
    console.log(CheckBoxCounter)
    console.log(Checking)
  }else{
    --CheckBoxCounter
    let number = document.getElementsByClassName('myCheckbox').length;
    let numberTag = document.getElementsByClassName('myCheckbox');
    for(var i = 0; i < number; ++i) {
      if(numberTag[i].checked === false) {
        numberTag[i].style.display = 'block';
      }
    }
    console.log(CheckBoxCounter)
    console.log(Checking)
    
  }
}

const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className="form-check">
    <Input className="myCheckbox" type="checkbox"  ref={ref} {...props} onChange={(e)=>{pleaseCheckTheCheckBox(e.target.checked)}} />
  </div>
  
));

// ** Table Common Column ya hamara table
export const columns = [
  // {
  //   name: "ID",
  //   sortable: true,
  //   minWidth: "250px",
  //   selector: (row) => row.id,
  // },
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
          item.postid.likes.toString().startsWith(value)
         

        const includes =
          item.postid.user.userName.toLowerCase().includes(value.toLowerCase()) ||
          item.postid.game.gameName.toLowerCase().includes(value.toLowerCase()) ||
          item.postid.comments.toString().includes(value) ||
          item.postid.likes.toString().includes(value)
      

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
                          <div className="col-md-8"><CardTitle tag="h4">DataTable with Buttons</CardTitle></div>
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
                        </div>
                          </div>
                        
                        
                      </CardHeader>
                    
                      <div className="react-dataTable">
                        <DataTable
                          noHeader
                          selectableRows
                          columns={columns}
                          className="react-dataTable"
                          sortIcon={<ChevronDown size={10} />}
                          data={searchValue.length ? filteredData : topteenlist}
                          selectableRowsComponent={BootstrapCheckbox}
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
