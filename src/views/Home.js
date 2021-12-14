import React, {useEffect , useState , Fragment} from 'react'
import avatar from '../assets/images/avtar/avatar-s-11.jpg'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power  } from 'react-feather'
import { Link } from 'react-router-dom'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle ,Input,Button } from 'reactstrap'
import Logo from '../assets/images/logo/logo.png'
import Reacticn from '../assets/images/logo/react.svg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Check, AlertTriangle } from 'react-feather'

import { useNavigate } from 'react-router-dom'


export default function Home() {

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
      img: require('../assets/images/avtar/avatar-s-11.jpg').default,
      subtitle: 'Won the monthly best seller badge.',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Congratulation Sam 🎉</span>winner!
        </p>
      )
    },
    {
      img: require('../assets/images/avtar/avatar-s-11.jpg').default,
      subtitle: 'You have 10 unread messages.',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>New message</span>&nbsp;received
        </p>
      )
    },
    {
      avatarContent: 'MD',
      color: 'light-danger',
      subtitle: 'MD Inc. order updated',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Revised Order 👋</span>&nbsp;checkout
        </p>
      )
    },
    {
      title: <h6 className='fw-bolder me-auto mb-0'>System Notifications</h6>,
      switch: (
        <div className='form-switch'>
          <Input type='switch' id='primary' name='primary' inline='true' defaultChecked />
        </div>
      )
    },
    {
      avatarIcon: <X size={14} />,
      color: 'light-danger',
      subtitle: 'USA Server is down due to hight CPU usage',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Server down</span>&nbsp;registered
        </p>
      )
    },
    {
      avatarIcon: <Check size={14} />,
      color: 'light-success',
      subtitle: 'Last month sales report generated',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>Sales report</span>&nbsp;generated
        </p>
      )
    },
    {
      avatarIcon: <AlertTriangle size={14} />,
      color: 'light-warning',
      subtitle: 'BLR Server using high memory',
      title: (
        <p className='media-heading'>
          <span className='fw-bolder'>High memory</span>&nbsp;usage
        </p>
      )
    }
  ]

    const navigate = useNavigate();

    useEffect(() => {
        window.onbeforeunload = function() {
            localStorage.removeItem('user');
        }
        if(localStorage.getItem('user')){
            }else{
                console.log('siri not available');
                navigate('/login')
            }
    }, [])

    // const navigate= useNavigate();


      /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <div
                className={classnames('list-item d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <div className='me-1'>
                      {/* <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 32, imgWidth: 32 }
                          : item.avatarContent
                          ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                          : item.avatarIcon
                          ? {
                              icon: item.avatarIcon,
                              color: item.color
                            }
                          : null)}
                      /> */}
                    </div>
                    <div className='list-item-body flex-grow-1'>
                      {item.title}
                      <small className='notification-text'>{item.subtitle}</small>
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
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */


    const avatarGroupData1 = [
        {
          title: 'Griffith',
         
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Hu',
         
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Felicia',
          
          imgHeight: 26,
          imgWidth: 26
        }
      ]
      
      const avatarGroupData2 = [
        {
          title: 'Quinlan',
          
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Patrick',
          
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Castor',
         
          imgHeight: 26,
          imgWidth: 26
        }
      ]
      
      const avatarGroupData3 = [
        {
          title: 'Mohammad',
         
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Isabella',
         
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Michael',
          
          imgHeight: 26,
          imgWidth: 26
        }
      ]
      
      const avatarGroupData4 = [
        {
          title: 'Lavinia',
          
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Nelle',
          
          imgHeight: 26,
          imgWidth: 26
        },
        {
          title: 'Virginia',
         
          imgHeight: 26,
          imgWidth: 26
        }
      ]

    return (
      <div>
          
    <nav class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-dark navbar-shadow container-xxl">
        <div class="navbar-container d-flex content">
            <div class="bookmark-wrapper d-flex align-items-center">
                <ul class="nav navbar-nav d-xl-none">
                    <li class="nav-item"><a class="nav-link menu-toggle" href="#" onClick={()=>dd()}><i class="fal fa-bars"></i></a></li>
                </ul>
              
                <ul class="nav navbar-nav">
                    <li class="nav-item d-none d-lg-block"><a class="nav-link bookmark-star"><i class="ficon text-warning" data-feather="star"></i></a>
                        <div class="bookmark-input search-input">
                            <div class="bookmark-input-icon"><i data-feather="search"></i></div>
                            <input class="form-control input" type="text" placeholder="Bookmark" tabindex="0" data-search="search"/>
                            <ul class="search-list search-list-bookmark"></ul>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="nav navbar-nav align-items-center ms-auto">
                
               
                <UncontrolledDropdown tag='li' className='dropdown-notification nav-item me-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
        <Bell size={21} />
        <Badge pill color='danger' className='badge-up'>
          5
        </Badge>
      </DropdownToggle>
      <DropdownMenu end tag='ul' className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 me-auto'>Notifications</h4>
            <Badge tag='div' color='light-primary' pill>
              6 New
            </Badge>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className='dropdown-menu-footer'>
          <Button color='primary' block>
            Read all notifications
          </Button>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
                <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>{ 'John Doe'}</span>
          <span className='user-status'>{'Admin'}</span>
        </div>
        <img class="round" src={avatar} alt="avatar" height="40" width="40"/>
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/pages/profile'>
          <User size={14} className='me-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
      
        
        <DropdownItem divider />
        <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='me-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
       
        <DropdownItem tag={Link} to='/login' >
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
            </ul>
        </div>
    </nav>
    <ul class="main-search-list-defaultlist d-none">
        <li class="d-flex align-items-center"><a href="#">
                <h6 class="section-label mt-75 mb-0">Files</h6>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
                <div class="d-flex">
                    <div class="me-75"><img src="../../../app-assets/images/icons/xls.png" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">Two new item submitted</p><small class="text-muted">Marketing Manager</small>
                    </div>
                </div><small class="search-data-size me-50 text-muted">&apos;17kb</small>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
                <div class="d-flex">
                    <div class="me-75"><img src="../../../app-assets/images/icons/jpg.png" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">52 JPG file Generated</p><small class="text-muted">FontEnd Developer</small>
                    </div>
                </div><small class="search-data-size me-50 text-muted">&apos;11kb</small>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
                <div class="d-flex">
                    <div class="me-75"><img src="../../../app-assets/images/icons/pdf.png" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">25 PDF File Uploaded</p><small class="text-muted">Digital Marketing Manager</small>
                    </div>
                </div><small class="search-data-size me-50 text-muted">&apos;150kb</small>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between w-100" href="app-file-manager.html">
                <div class="d-flex">
                    <div class="me-75"><img src="../../../app-assets/images/icons/doc.png" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">Anna_Strong.doc</p><small class="text-muted">Web Designer</small>
                    </div>
                </div><small class="search-data-size me-50 text-muted">&apos;256kb</small>
            </a></li>
        <li class="d-flex align-items-center"><a href="#">
                <h6 class="section-label mt-75 mb-0">Members</h6>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
                <div class="d-flex align-items-center">
                    <div class="avatar me-75"><img src="../../../app-assets/images/portrait/small/avatar-s-8.jpg" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">John Doe</p><small class="text-muted">UI designer</small>
                    </div>
                </div>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
                <div class="d-flex align-items-center">
                    <div class="avatar me-75"><img src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">Michal Clark</p><small class="text-muted">FontEnd Developer</small>
                    </div>
                </div>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
                <div class="d-flex align-items-center">
                    <div class="avatar me-75"><img src="../../../app-assets/images/portrait/small/avatar-s-14.jpg" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">Milena Gibson</p><small class="text-muted">Digital Marketing Manager</small>
                    </div>
                </div>
            </a></li>
        <li class="auto-suggestion"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="app-user-view-account.html">
                <div class="d-flex align-items-center">
                    <div class="avatar me-75"><img src="../../../app-assets/images/portrait/small/avatar-s-6.jpg" alt="png" height="32"/></div>
                    <div class="search-data">
                        <p class="search-data-title mb-0">Anna Strong</p><small class="text-muted">Web Designer</small>
                    </div>
                </div>
            </a></li>
    </ul>
    <ul class="main-search-list-defaultlist-other-list d-none">
        <li class="auto-suggestion justify-content-between"><a class="d-flex align-items-center justify-content-between w-100 py-50">
                <div class="d-flex justify-content-start"><span class="me-75" data-feather="alert-circle"></span><span>No results found.</span></div>
            </a></li>
    </ul>
  


    
    <div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto daslogo"><a class="navbar-brand" href="../../../html/ltr/vertical-menu-template-dark/index.html"><span class="brand-logo">
                <img src={Logo} alt='logo'/>
                            </span>
                        <h2 class="brand-text">99OVR</h2>
                    </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse" onClick={()=>dd()}><i class="fal fa-times feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-5"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
               
                <li class=" navigation-header"><span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span><i data-feather="more-horizontal"></i>
                </li>
                <li class=" nav-item"><a class="d-flex align-items-center" href="app-email.html"><i class="fal fa-cube"></i><span class="menu-title text-truncate" data-i18n="Email">Animation</span></a>
                </li>
                <li class=" nav-item"><a class="d-flex align-items-center" href="app-email.html"><i class="fal fa-envelope-open"></i><span class="menu-title text-truncate" data-i18n="Email">Email</span></a>
                </li>
                <li class=" nav-item has-sub" id="navadd" onClick={()=>addnav()}><a class="d-flex align-items-center" href="#" ><i class="fal fa-file-alt"></i><span class="menu-title text-truncate" data-i18n="Invoice">Invoice</span></a>
                    <ul class="menu-content">
                        <li><a class="d-flex align-items-center" href="app-invoice-list.html"><i class="fal fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">List</span></a>
                        </li>
                        <li><a class="d-flex align-items-center" href="app-invoice-preview.html"><i class="fal fa-circle"></i><span class="menu-item text-truncate" data-i18n="Preview">Preview</span></a>
                        </li>
                        <li><a class="d-flex align-items-center" href="app-invoice-edit.html"><i class="fal fa-circle"></i><span class="menu-item text-truncate" data-i18n="Edit">Edit</span></a>
                        </li>
                        <li><a class="d-flex align-items-center" href="app-invoice-add.html"><i class="fal fa-circle"></i><span class="menu-item text-truncate" data-i18n="Add">Add</span></a>
                        </li>
                    </ul>
                </li>
                
                
             
               
            </ul>
        </div>
    </div>
    
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper container-xxl p-0">
            <div class="content-header row">
            </div>
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
            <img className='me-75' src={Reacticn} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>Angular Project</span>
          </td>
          <td>Peter Charles</td>
          
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={Reacticn} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>React Project</span>
          </td>
          <td>Ronald Frest</td>
          
          <td>
            <Badge pill color='light-success' className='me-1'>
              Completed
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={Reacticn}alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'>Vuejs Project</span>
          </td>
          <td>Jack Obes</td>
          
          <td>
            <Badge pill color='light-info' className='me-1'>
              Scheduled
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={Reacticn} alt='bootstrap' height='20' width='20' />
            <span className='align-middle fw-bold'>Bootstrap Project</span>
          </td>
          <td>Jerry Milton</td>
          
          <td>
            <Badge pill color='light-warning' className='me-1'>
              Pending
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
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
    

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    
    
    <button class="btn btn-primary btn-icon scroll-top" type="button"><i class="fal fa-arrow-up"></i></button>
      </div>

    )
    
}
