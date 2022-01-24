// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import axios from "axios";
import{Row,Col,Card,Input,Label,CardTitle,CardHeader,} from "reactstrap";

const newdata = [
  {
    responsive_id: "",
    id: 1,
    avatar: "10.jpg",
    full_name: "Korrie O'Crevy",
    post: "Nuclear Power Engineer",
    email: "kocrevy0@thetimes.co.uk",
    city: "Krasnosilka",
    start_date: "09/23/2016",
    salary: "$23896.35",
    age: "61",
    experience: "1 Year",
    status: 2,
  },
  {
    responsive_id: "",
    id: 2,
    avatar: "1.jpg",
    full_name: "Bailie Coulman",
    post: "VP Quality Control",
    email: "bcoulman1@yolasite.com",
    city: "Hinigaran",
    start_date: "05/20/2018",
    salary: "$13633.69",
    age: "63",
    experience: "3 Years",
    status: 2,
  },
  {
    responsive_id: "",
    id: 3,
    avatar: "9.jpg",
    full_name: "Stella Ganderton",
    post: "Operator",
    email: "sganderton2@tuttocitta.it",
    city: "Golcowa",
    start_date: "03/24/2018",
    salary: "$13076.28",
    age: "66",
    experience: "6 Years",
    status: 5,
  },
  {
    responsive_id: "",
    id: 4,
    avatar: "10.jpg",
    full_name: "Dorolice Crossman",
    post: "Cost Accountant",
    email: "dcrossman3@google.co.jp",
    city: "Paquera",
    start_date: "12/03/2017",
    salary: "$12336.17",
    age: "22",
    experience: "2 Years",
    status: 2,
  },
  {
    responsive_id: "",
    id: 5,
    avatar: "",
    full_name: "Harmonia Nisius",
    post: "Senior Cost Accountant",
    email: "hnisius4@gnu.org",
    city: "Lucan",
    start_date: "08/25/2017",
    salary: "$10909.52",
    age: "33",
    experience: "3 Years",
    status: 2,
  },
  {
    responsive_id: "",
    id: 6,
    avatar: "",
    full_name: "Genevra Honeywood",
    post: "Geologist",
    email: "ghoneywood5@narod.ru",
    city: "Maofan",
    start_date: "06/01/2017",
    salary: "$17803.80",
    age: "61",
    experience: "1 Year",
    status: 1,
  },
  {
    responsive_id: "",
    id: 7,
    avatar: "",
    full_name: "Eileen Diehn",
    post: "Environmental Specialist",
    email: "ediehn6@163.com",
    city: "Lampuyang",
    start_date: "10/15/2017",
    salary: "$18991.67",
    age: "59",
    experience: "9 Years",
    status: 3,
  },
  {
    responsive_id: "",
    id: 8,
    avatar: "9.jpg",
    full_name: "Richardo Aldren",
    post: "Senior Sales Associate",
    email: "raldren7@mtv.com",
    city: "Skoghall",
    start_date: "11/05/2016",
    salary: "$19230.13",
    age: "55",
    experience: "5 Years",
    status: 3,
  },
  {
    responsive_id: "",
    id: 9,
    avatar: "2.jpg",
    full_name: "Allyson Moakler",
    post: "Safety Technician",
    email: "amoakler8@shareasale.com",
    city: "Mogilany",
    start_date: "12/29/2018",
    salary: "$11677.32",
    age: "39",
    experience: "9 Years",
    status: 5,
  },
  {
    responsive_id: "",
    id: 10,
    avatar: "9.jpg",
    full_name: "Merline Penhalewick",
    post: "Junior Executive",
    email: "mpenhalewick9@php.net",
    city: "Kanuma",
    start_date: "04/19/2019",
    salary: "$15939.52",
    age: "23",
    experience: "3 Years",
    status: 2,
  },

];



// let newdata = [];


const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className="form-check">
    <Input type="checkbox" ref={ref} {...props} />
  </div>
));

// ** Table Common Column ya hamara table
export const columns = [
  {
    name: "Name",
    minWidth: "250px",
    sortable: (row) => row.full_name,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div className="user-info text-truncate ms-1">
          <span className="d-block fw-bold text-truncate">{row.city}</span>
          <small>{row.post}</small>
        </div>
      </div>
    ),
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.email,
  },
  {
    name: "Date",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.city,
  },

  {
    name: "Salary",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.salary,
  },
  {
    name: "Age",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.age,
  },
];

const DataTableWithButtons = () => {
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
    // newdata = JSON.parse(JSON.stringify(getData.data));
    console.log(newdata)
  };

  // ** States

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);


    if (value.length) {
      updatedData = newdata.filter((item) => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) 
         

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) 
      

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
                        <CardTitle tag="h4">DataTable with Buttons</CardTitle>
                        <div className="d-flex mt-md-0 mt-1">
                          <Col
                            className="d-flex align-items-center justify-content-end mt-1"
                            md="6"
                            sm="12"
                          >
                            <Label className="me-1" for="search-input">
                              Search
                            </Label>
                            <Input
                              className="dataTable-filter mb-50"
                              type="text"
                              bsSize="sm"
                              id="search-input"
                              value={searchValue}
                              onChange={handleFilter}
                            />
                          </Col>
                        </div>
                      </CardHeader>
                    
                      <div className="react-dataTable">
                        <DataTable
                          noHeader
                          selectableRows
                          columns={columns}
                          className="react-dataTable"
                          sortIcon={<ChevronDown size={10} />}
                          data={searchValue.length ? filteredData : newdata}
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
