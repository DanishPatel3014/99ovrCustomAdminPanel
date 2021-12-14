
import React, {useEffect , useState} from 'react'
import avatar from '../assets/images/avtar/avatar-s-11.jpg'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power  } from 'react-feather'
import { Link } from 'react-router-dom'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle  } from 'reactstrap'

import { MoreVertical, Edit, Trash } from 'react-feather'

import { useNavigate } from 'react-router-dom'


export default function Home() {
  
  const navigate = useNavigate();

  useEffect(() => {
    
    if (localStorage.getItem("userToken")) {
    } else {
      console.log("siri not available");
      navigate("/login");
    }
  }, []);

  // const navigate= useNavigate();

  return (
    <div>
     <Topnav/>
     <Sidenav/>
     <Tables/>
      
    </div>
  );
}

