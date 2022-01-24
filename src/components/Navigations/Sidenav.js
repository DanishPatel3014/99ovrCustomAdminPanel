import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";

export default function Sidenav() {
  function dd() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }
  function addnav() {
    var element = document.getElementById("navadd");
    element.classList.toggle("open");
  }
  function addTour() {
    var element = document.getElementById("navTour");
    element.classList.toggle("open");
  }
  function addLeag() {
    var element = document.getElementById("navLeag");
    element.classList.toggle("open");
  }
  function addTopTen() {
    var element = document.getElementById("navTopTen");
    element.classList.toggle("open");
  }
  function adduser() {
    var element = document.getElementById("navuser");
    element.classList.toggle("open");
  }
  return (
    <div>
      <div
        className="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item me-auto daslogo">
              <Link
                className="navbar-brand"
               to="/"
              >
                <span className="brand-logo">
                  <img src={Logo} alt="logo" />
                </span>
                <h2 className="brand-text">99OVR</h2>
              </Link>
            </li>
            <li className="nav-item nav-toggle">
              <a
                className="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
                onClick={() => dd()}
              >
                <i className="fal fa-times feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-5"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom"></div>
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className=" navigation-header">
              <span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li className=" nav-item">
              <Link className="d-flex align-items-center" to="/Animation">
                <i className="fal fa-cube"></i>
                <span className="menu-title text-truncate" data-i18n="Email">
                  Animation
                </span>
              </Link>
            </li>
            {/* <li className=" nav-item">
              <Link className="d-flex align-items-center" to='/TopTeenRequest'>
              <i className="fal fa-chart-line"></i>
                <span className="menu-title text-truncate" data-i18n="Email">
                Top 10 Requests
                </span>
              </Link>
            </li> */}
            
            <li className=" nav-item has-sub" id="navTopTen" onClick={() => addTopTen()}>
              <Link className="d-flex align-items-center" to='#'>
              <i className="fal fa-chart-line"></i>
                <span className="menu-title text-truncate" data-i18n="Invoice">
                Top 10 Requests 
                </span>
              </Link>
              <ul className="menu-content">
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/TopTeenRequest'>
                 
                 <i className="fal fa-user-times"></i>
                    <span className="menu-item text-truncate" data-i18n="List">
                    Top 10 Request
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/ApprovedTopTen'
                  >
                    <i className="fal fa-user-check"></i>
                    <span className="menu-item text-truncate" data-i18n="Preview">
                    Top 10 Approved
                    </span>
                  </Link>
                </li>
                
              </ul>
            </li>
        
            <li className=" nav-item has-sub" id="navTour" onClick={() => addTour()}>
              <Link className="d-flex align-items-center" to=''>
              <i className="fal fa-trophy"></i>
                <span className="menu-title text-truncate" data-i18n="Invoice">
                Tournaments 
                </span>
              </Link>
              <ul className="menu-content">
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/Tournaments'>
                 
                 <i className="fal fa-user-times"></i>
                    <span className="menu-item text-truncate" data-i18n="List">
                    Tournaments Request
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/ApprovedTournaments'
                  >
                    <i className="fal fa-user-check"></i>
                    <span className="menu-item text-truncate" data-i18n="Preview">
                    Tournaments Approved
                    </span>
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className=" nav-item has-sub" id="navLeag" onClick={() => addLeag()}>
              <Link className="d-flex align-items-center" to=''>
              <i class="fal fa-gamepad-alt"></i>
                <span className="menu-title text-truncate" data-i18n="Invoice">
                Leagues 
                </span>
              </Link>
              <ul className="menu-content">
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/Leagues'>
                 
                 <i className="fal fa-user-times"></i>
                    <span className="menu-item text-truncate" data-i18n="List">
                    Leagues Request
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/ApprovedLeagues'
                  >
                    <i className="fal fa-user-check"></i>
                    <span className="menu-item text-truncate" data-i18n="Preview">
                    Leagues Approved
                    </span>
                  </Link>
                </li>
                
              </ul>
            </li>
           
            <li className=" nav-item has-sub" id="navadd" onClick={() => addnav()}>
              <Link className="d-flex align-items-center" to=''>
              <i className="fal fa-signal-stream"></i>
                <span className="menu-title text-truncate" data-i18n="Invoice">
                Stream City 
                </span>
              </Link>
              <ul className="menu-content">
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/StreamCity'>
                 
                 <i className="fal fa-user-times"></i>
                    <span className="menu-item text-truncate" data-i18n="List">
                    Stream Request
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/ApprovedStreamCity'
                  >
                    <i className="fal fa-user-check"></i>
                    <span className="menu-item text-truncate" data-i18n="Preview">
                    Stream Approved
                    </span>
                  </Link>
                </li>
                
              </ul>
            </li>

            <li className=" nav-item">
              <Link className="d-flex align-items-center" to='/GetAssets'>
              <i className="fal fa-box-alt"></i>
                <span className="menu-title text-truncate" data-i18n="Email">
                Assets
                </span>
              </Link>
            </li>

            <li className=" nav-item " id="navuser" onClick={() => adduser()}>
              <Link className="d-flex align-items-center" to='/Users'>
              <i className="fal fa-poll-people"></i>
                <span className="menu-title text-truncate" data-i18n="Email">
                Users
                </span>
              </Link>
            </li>
            
            {/* <li className=" nav-item has-sub" id="navuser" onClick={() => adduser()}>
              <Link className="d-flex align-items-center" to=''>
              <i class="fal fa-users"></i>
                <span className="menu-title text-truncate" data-i18n="Invoice">
                Users
                </span>
              </Link>
              <ul className="menu-content">
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to='/Users'>
                 
                 <i class="fal fa-poll-people"></i>
                    <span className="menu-item text-truncate" data-i18n="List">
                    Users list
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center"
                    to=' '
                  >
                    <i className="fal fa-user-check"></i>
                    <span className="menu-item text-truncate" data-i18n="Preview">
                    Stream Approved
                    </span>
                  </Link>
                </li>
                
              </ul>
            </li> */}

            <li className=" nav-item">
              <Link className="d-flex align-items-center" to='/GetGame'>
              <i class="fal fa-gamepad-alt"></i>
                <span className="menu-title text-truncate" data-i18n="Email">
                Game
                </span>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
