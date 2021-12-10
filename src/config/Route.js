import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'

export default function AppRoute() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                </Routes>        
           </Router>
        </div>
    )
}
