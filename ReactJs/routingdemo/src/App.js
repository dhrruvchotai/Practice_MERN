import logo from './logo.svg';
import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function MyNavbar(){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home(){
  return(
    <>
      <h1>Hello, from Home Page.</h1>
    </>
  )
}

function About(){
  return(
    <>
      <h1>Hello, from About Page.</h1>
    </>
  )
}

function Contact(){
  return(
    <>
      <h1>Hello, from Contact Page.</h1>
    </>
  )
}

