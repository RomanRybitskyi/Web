import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes >
                <Footer/>
            </Router>
        </>
    );
}

export default App;
