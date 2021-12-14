import React, { Fragment } from "react";
import avatar from "../assets/images/avtar/avatar-s-11.jpg";
import { User, Power, Settings } from "react-feather";
import { Link,useNavigate } from "react-router-dom";
import{Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle,Input,Button,}from "reactstrap";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Bell, X, Check, AlertTriangle } from "react-feather";

export default function Topnav() {

  const navigate = useNavigate();

  const LogoutUser = () => {
    localStorage.clear();
    navigate('/login')
  }

  function addnav() {
    var element = document.getElementById("navadd");
    element.classList.toggle("open");
  }
  function dd() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }

  // ** Notification Array
  const notificationsArray = [
    {
      img: require("../assets/images/avtar/avatar-s-11.jpg").default,
      subtitle: "Won the monthly best seller badge.",
      title: (
        <p className="media-heading">
          <span className="fw-bolder">Congratulation Sam 🎉</span>winner!
        </p>
      ),
    },
    {
      img: require("../assets/images/avtar/avatar-s-11.jpg").default,
      subtitle: "You have 10 unread messages.",
      title: (
        <p className="media-heading">
          <span className="fw-bolder">New message</span>&nbsp;received
        </p>
      ),
    },
    {
      avatarContent: "MD",
      color: "light-danger",
      subtitle: "MD Inc. order updated",
      title: (
        <p className="media-heading">
          <span className="fw-bolder">Revised Order 👋</span>&nbsp;checkout
        </p>
      ),
    },
    {
      title: <h6 className="fw-bolder me-auto mb-0">System Notifications</h6>,
      switch: (
        <div className="form-switch">
          <Input
            type="switch"
            id="primary"
            name="primary"
            inline="true"
            defaultChecked
          />
        </div>
      ),
    },
    {
      avatarIcon: <X size={14} />,
      color: "light-danger",
      subtitle: "USA Server is down due to hight CPU usage",
      title: (
        <p className="media-heading">
          <span className="fw-bolder">Server down</span>&nbsp;registered
        </p>
      ),
    },
    {
      avatarIcon: <Check size={14} />,
      color: "light-success",
      subtitle: "Last month sales report generated",
      title: (
        <p className="media-heading">
          <span className="fw-bolder">Sales report</span>&nbsp;generated
        </p>
      ),
    },
    {
      avatarIcon: <AlertTriangle size={14} />,
      color: "light-warning",
      subtitle: "BLR Server using high memory",
      title: (
        <p className="media-heading">
          <span className="fw-bolder">High memory</span>&nbsp;usage
        </p>
      ),
    },
  ];
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component="li"
        className="media-list scrollable-container"
        options={{
          wheelPropagation: false,
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a
              key={index}
              className="d-flex"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <div
                className={classnames("list-item d-flex", {
                  "align-items-start": !item.switch,
                  "align-items-center": item.switch,
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <div className="me-1"></div>
                    <div className="list-item-body flex-grow-1">
                      {item.title}
                      <small className="notification-text">
                        {item.subtitle}
                      </small>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </div>
            </a>
          );
        })}
      </PerfectScrollbar>
    );
  };
  /*eslint-enable */

  return (
    <div>
      <nav class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-dark navbar-shadow container-xxl">
        <div class="navbar-container d-flex content">
          <div class="bookmark-wrapper d-flex align-items-center">
            <ul class="nav navbar-nav d-xl-none">
              <li class="nav-item">
                <a class="nav-link menu-toggle" href="#" onClick={() => dd()}>
                  <i class="fal fa-bars"></i>
                </a>
              </li>
            </ul>

            <ul class="nav navbar-nav">
              <li class="nav-item d-none d-lg-block">
                <a class="nav-link bookmark-star">
                  <i class="ficon text-warning" data-feather="star"></i>
                </a>
                <div class="bookmark-input search-input">
                  <div class="bookmark-input-icon">
                    <i data-feather="search"></i>
                  </div>
                 <input class="form-control input" type="text" placeholder="Bookmark" tabindex="0" data-search="search" />
                  <ul class="search-list search-list-bookmark"></ul>
                </div>
              </li>
            </ul>
          </div>
          <ul class="nav navbar-nav align-items-center ms-auto">
            <UncontrolledDropdown tag="li" className="dropdown-notification nav-item me-25" >
             <DropdownToggle tag="a" className="nav-link" href="/" onClick={(e) => e.preventDefault()}>
                <Bell size={21} />
                <Badge pill color="danger" className="badge-up"> 5 </Badge>
              </DropdownToggle>
              <DropdownMenu end tag="ul" className="dropdown-menu-media mt-0">
                <li className="dropdown-menu-header">
                  <DropdownItem className="d-flex" tag="div" header>
                    <h4 className="notification-title mb-0 me-auto">
                      Notifications
                    </h4>
                    <Badge tag="div" color="light-primary" pill> 6 New </Badge>
                  </DropdownItem>
                </li>
                {renderNotificationItems()}
                <li className="dropdown-menu-footer">
                  <Button color="primary" block>
                    Read all notifications
                  </Button>
                </li>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
              <DropdownToggle href="/" tag="a" className="nav-link dropdown-user-link" onClick={(e) => e.preventDefault()}
>
                <div className="user-nav d-sm-flex d-none">
                  <span className="user-name fw-bold">{"John Doe"}</span>
                  <span className="user-status">{"Admin"}</span>
                </div>
                <img class="round" src={avatar} alt="avatar" height="40" width="40" />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={Link} to="/pages/profile">
                  <User size={14} className="me-75" />
                  <span className="align-middle">Profile</span>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem tag={Link} to="/pages/account-settings">
                  <Settings size={14} className="me-75" />
                  <span className="align-middle">Settings</span>
                </DropdownItem>

                <DropdownItem tag={Link} to="/login" onClick={()=>{LogoutUser()}}>
                  <Power size={14} className="me-75" />
                  <span className="align-middle">Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ul>
        </div>
      </nav>
    </div>
  );
}
