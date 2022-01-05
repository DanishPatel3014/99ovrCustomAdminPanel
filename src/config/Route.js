import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login'
import Animation from '../views/Animation'
import TopTeen from '../views/TopteenRequests'
import ApprovedTopTen from '../views/ApprovedTopTen'
import StreamCity from '../views/StreamCity'
import ApprovedStreamCity from '../views/ApprovedStreamCity'
import Tournaments from '../views/Tournaments'
import ApprovedTournaments from '../views/ApprovedTournaments'
import GetAssets from '../views/GetAssets'

export default function AppRoute() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/Animation" element={<Animation/>}></Route>
                    <Route exact path="/TopTeenRequest" element={<TopTeen/>}></Route>
                    <Route exact path="/ApprovedTopTen" element={<ApprovedTopTen/>}></Route>
                    <Route exact path="/StreamCity" element={<StreamCity/>}></Route>
                    <Route exact path="/ApprovedStreamCity" element={<ApprovedStreamCity/>}></Route>
                    <Route exact path="/Tournaments" element={<Tournaments/>}></Route>
                    <Route exact path="/ApprovedTournaments" element={<ApprovedTournaments/>}></Route>
                    <Route exact path='/GetAssets' element={<GetAssets />}></Route>
                </Routes>        
           </Router>
        </div>
    )
}
