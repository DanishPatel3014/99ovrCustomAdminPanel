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
            <li className=" nav-item">
              <Link className="d-flex align-items-center" to=' '>
              <i className="fal fa-chart-line"></i>
                <span className="menu-title text-truncate" data-i18n="Email">
                Top 10 Requests
                </span>
              </Link>
            </li>
            <li className=" nav-item has-sub" id="navadd" onClick={() => addnav()}>
              <a className="d-flex align-items-center" to=' '>
                <i className="fal fa-file-alt"></i>
                <span className="menu-title text-truncate" data-i18n="Invoice">
                  Invoice
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <a
                    className="d-flex align-items-center"
                    to=' '
                  >
                    <i className="fal fa-circle"></i>
                    <span className="menu-item text-truncate" data-i18n="List">
                      List
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex align-items-center"
                    to=' '
                  >
                    <i className="fal fa-circle"></i>
                    <span className="menu-item text-truncate" data-i18n="Preview">
                      Preview
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex align-items-center"
                    to=' '
                  >
                    <i className="fal fa-circle"></i>
                    <span className="menu-item text-truncate" data-i18n="Edit">
                      Edit
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex align-items-center"
                    to=' '
                  >
                    <i className="fal fa-circle"></i>
                    <span className="menu-item text-truncate" data-i18n="Add">
                      Add
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
