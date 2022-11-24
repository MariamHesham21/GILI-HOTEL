import React ,{Component} from 'react';
import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import"./App.css";
import Nav from "./component/Navbar";

import Contact from './Pages/Contact';
import ACTIVITIES from './Pages/ACTIVITIES';
import RESTAURANT from './Pages/RESTAURANT';
import ABOUT from './Pages/ABOUT ';
import Stay from './Pages/Stay';
import SUPERIORDO from './stay/SUPERIORDO';
import STANDARDDOUBLE from "./stay/STANDARDDOUBLE"

function App(){
    return (
      <BrowserRouter>
        <div className="App">
        <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Stay" element={<Stay/>} />
            <Route path="/ABOUT" element={<ABOUT/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/ACTIVITIES" element={<ACTIVITIES/>} />
            <Route path="/RESTAURANT" element={<RESTAURANT/>} />
            <Route path="/SUPERIORDO" element={<SUPERIORDO/>} />
            <Route path="/STANDARDDOUBLE" element={<STANDARDDOUBLE/>} />


          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;
