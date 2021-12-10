import React, {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'

export default function Home() {

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