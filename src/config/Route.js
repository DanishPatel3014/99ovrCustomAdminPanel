import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'
import Animation from '../views/Animation'
import TopTeen from '../views/TopteenRequests'

export default function AppRoute() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/Animation" element={<Animation/>}></Route>
                    <Route exact path="/TopTeenRequest" element={<TopTeen/>}></Route>
                </Routes>        
           </Router>
        </div>
    )
}
