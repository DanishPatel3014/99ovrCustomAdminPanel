import{Table,Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap";
import Reacticn from "../assets/images/logo/react.svg";
import { MoreVertical, Edit, Trash } from "react-feather";
  
  export default function Tables() {
    const avatarGroupData1 = [
      {
        title: "Griffith",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Hu",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Felicia",
  
        imgHeight: 26,
        imgWidth: 26,
      },
    ];
  
    const avatarGroupData2 = [
      {
        title: "Quinlan",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Patrick",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Castor",
  
        imgHeight: 26,
        imgWidth: 26,
      },
    ];
  
    const avatarGroupData3 = [
      {
        title: "Mohammad",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Isabella",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Michael",
  
        imgHeight: 26,
        imgWidth: 26,
      },
    ];
  
    const avatarGroupData4 = [
      {
        title: "Lavinia",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Nelle",
  
        imgHeight: 26,
        imgWidth: 26,
      },
      {
        title: "Virginia",
  
        imgHeight: 26,
        imgWidth: 26,
      },
    ];
  
    return (
      <div>
        <div class="app-content content ">
          <div class="content-overlay"></div>
          <div class="header-navbar-shadow"></div>
          <div class="content-wrapper container-xxl p-0">
            <div class="content-header row"></div>
            <div class="content-body">
              <section id="dashboard-ecommerce">
                <div class="row" id="table-hover-row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Animation Details</h4>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div class="table-responsive">
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>Animation Name</th>
                              <th>Category</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  className="me-75"
                                  src={Reacticn}
                                  alt="angular"
                                  height="20"
                                  width="20"
                                />
                                <span className="align-middle fw-bold">
                                  Angular Project
                                </span>
                              </td>
                              <td>Peter Charles</td>
  
                              <td>
                                <Badge
                                  pill
                                  color="light-primary"
                                  className="me-1"
                                >
                                  Active
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
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Edit className="me-50" size={15} />{" "}
                                      <span className="align-middle">Edit</span>
                                    </DropdownItem>
                                    <DropdownItem
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Trash className="me-50" size={15} />{" "}
                                      <span className="align-middle">Delete</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="me-75"
                                  src={Reacticn}
                                  alt="react"
                                  height="20"
                                  width="20"
                                />
                                <span className="align-middle fw-bold">
                                  React Project
                                </span>
                              </td>
                              <td>Ronald Frest</td>
  
                              <td>
                                <Badge
                                  pill
                                  color="light-success"
                                  className="me-1"
                                >
                                  Completed
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
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Edit className="me-50" size={15} />{" "}
                                      <span className="align-middle">Edit</span>
                                    </DropdownItem>
                                    <DropdownItem
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Trash className="me-50" size={15} />{" "}
                                      <span className="align-middle">Delete</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="me-75"
                                  src={Reacticn}
                                  alt="vuejs"
                                  height="20"
                                  width="20"
                                />
                                <span className="align-middle fw-bold">
                                  Vuejs Project
                                </span>
                              </td>
                              <td>Jack Obes</td>
  
                              <td>
                                <Badge pill color="light-info" className="me-1">
                                  Scheduled
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
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Edit className="me-50" size={15} />{" "}
                                      <span className="align-middle">Edit</span>
                                    </DropdownItem>
                                    <DropdownItem
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Trash className="me-50" size={15} />{" "}
                                      <span className="align-middle">Delete</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="me-75"
                                  src={Reacticn}
                                  alt="bootstrap"
                                  height="20"
                                  width="20"
                                />
                                <span className="align-middle fw-bold">
                                  Bootstrap Project
                                </span>
                              </td>
                              <td>Jerry Milton</td>
  
                              <td>
                                <Badge
                                  pill
                                  color="light-warning"
                                  className="me-1"
                                >
                                  Pending
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
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Edit className="me-50" size={15} />{" "}
                                      <span className="align-middle">Edit</span>
                                    </DropdownItem>
                                    <DropdownItem
                                      href="/"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Trash className="me-50" size={15} />{" "}
                                      <span className="align-middle">Delete</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
  