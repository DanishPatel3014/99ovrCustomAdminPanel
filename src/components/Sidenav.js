import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png";

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
        class="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div class="navbar-header">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto daslogo">
              <Link
                class="navbar-brand"
               to="/"
              >
                <span class="brand-logo">
                  <img src={Logo} alt="logo" />
                </span>
                <h2 class="brand-text">99OVR</h2>
              </Link>
            </li>
            <li class="nav-item nav-toggle">
              <a
                class="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
                onClick={() => dd()}
              >
                <i class="fal fa-times feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-5"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
          <ul
            class="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li class=" navigation-header">
              <span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li class=" nav-item">
              <Link class="d-flex align-items-center" to="/Animation">
                <i class="fal fa-cube"></i>
                <span class="menu-title text-truncate" data-i18n="Email">
                  Animation
                </span>
              </Link>
            </li>
            <li class=" nav-item">
              <Link class="d-flex align-items-center" to=' '>
              <i class="fal fa-chart-line"></i>
                <span class="menu-title text-truncate" data-i18n="Email">
                Top 10 Requests
                </span>
              </Link>
            </li>
            <li class=" nav-item has-sub" id="navadd" onClick={() => addnav()}>
              <a class="d-flex align-items-center" to=' '>
                <i class="fal fa-file-alt"></i>
                <span class="menu-title text-truncate" data-i18n="Invoice">
                  Invoice
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a
                    class="d-flex align-items-center"
                    to=' '
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="List">
                      List
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    to=' '
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Preview">
                      Preview
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    to=' '
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Edit">
                      Edit
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    to=' '
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Add">
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
