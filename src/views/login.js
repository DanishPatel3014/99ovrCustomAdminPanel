import React,{useState} from 'react'
import Logo from '../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const axios = require('axios');

export default function Login() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState(String.empty)
    const [Password, setPassword] = useState(String.empty)

    
    const loginAdmin = async () =>
    {
        let data = 
        {
            email : Email,
            password : Password

        }
        let request = await axios.post(`https://thewebtestlink.xyz/api/admin/login`, data);
        if (request.data.data) {
            navigate('/')
        }


    }
    

    return (
        <div className='login-wrp'>
            <div className="app-content content ">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
            <div className="content-header row">
            </div>
            <div className="content-body">
                <div className="auth-wrapper auth-basic px-2">
                    <div className="auth-inner my-2">
                       
                        <div className="card mb-0">
                            <div className="card-body">
                                <Link to='' className="login-log brand-logo">
                                    <img src={Logo} alt=''/>
                                </Link>

                                <h4 className="card-title mb-1">Welcome to 99 OVR 👋</h4>
                                <p className="card-text mb-2">Please sign-in to your account and start the adventure</p>

                                <form className="auth-login-form mt-2" >
                                    <div className="mb-1">
                                        <label htmlFor="login-email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="login-email" name="login-email" placeholder="john@example.com" aria-describedby="login-email" tabIndex="1" autoFocus
                                        value={Email} 
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                         />
                                    </div>

                                    <div className="mb-1">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="login-password">Password</label>
                                       
                                        </div>
                                        <div className="input-group input-group-merge form-password-toggle">
                                            <input type="password" className="form-control form-control-merge" id="login-password" name="login-password" tabIndex="2" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="login-password"
                                            value={Password}
                                            onChange={(p)=>{setPassword(p.target.value)}}
                                             />
                                            <span className="input-group-text cursor-pointer"><i className="fal fa-eye"></i></span>
                                        </div>
                                    </div>
                                    
                                   
                                </form>
                                <button className="btn btn-primary w-100" onClick={loginAdmin}>Sign in</button>
                                <p className="text-center mt-2">
                                    
                                    <Link to=''>
                                        <span>Forgot Password?</span>
                                    </Link>
                                </p>

                              

                                

                                
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    </div>
        </div>
    )
}
