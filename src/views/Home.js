
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

    // useEffect(() => {
    //     if(localStorage.getItem('user')){
    //     }else{
    //         console.log('siri not available');
    //         navigate('/login')
    //     }
    // }, [])

    return (
        <div id="home" className="home container">
            <h1>Home Page</h1>
            <span><i className="fab fa-facebook-f"></i></span>
        </div>

    )
}