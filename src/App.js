import React from "react";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Home from "./components/home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import AdminLogin from "./components/AdminLogin";
import AfterLogInArtist from "./components/AfterLogInArtist";
import HidMenu from "./components/HidMenu";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Form from "./components/Form"
import Data from "./components/Datafile"
import ValidationList from "./components/ValidationList";
import Show from "./components/Show";
import Showuser from "./components/Showuser";

const App = () => {
  return (


    
    <Router>
      <Nav/>
      <Routes>
      <Route path="/hidMenu" element={<HidMenu />} />
      
      </Routes>
      <Home/>
      <Routes>
      <Route path="/show/:id" element={<Showuser />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/" element={<LogIn/>} />
      <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Events/>
      <Routes>
      <Route path="/form" element={<Form/>}/>
      <Route path="/List" element={<ValidationList/>}/>
      </Routes>
      <About />
      <Showuser/>
      <Contact />
    </Router>
  


    );
};

export default App;
