import React from 'react';
import Header from './Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignIn from './Login';
import Home from './Home';
import Register from './Register';
import Create from './Create';
import '../style.css'



function App(){
    return (
        <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/signup" exact element={<Register />} />
        </Routes>
    </Router>
        </>
    )
}

export default  App