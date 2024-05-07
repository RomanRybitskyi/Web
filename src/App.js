import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import MenuP from "./components/MenuP";
import MenuItem from "./components/MenuItem";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

    return (
        <>
            <Router>
                <Header/>
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<MenuP/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/menu/:id" element={<MenuItem/>}/>
                </Routes >
                <Footer/>
            </Router>
        </>
    );
}

export default App;
