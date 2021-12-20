import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'
import Animation from '../views/Animation'

export default function AppRoute() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/Animation" element={<Animation/>}></Route>
                   
                </Routes>        
           </Router>
        </div>
    )
}
