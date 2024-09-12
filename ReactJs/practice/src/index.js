import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import Contact from './Contact'
import About from './About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

//========================FOR CARD=====================================

// const data = [
//   {
//   name : "DHRUV",
//   rollNo : 101, 
//   imgPath : "https://media.istockphoto.com/id/480585465/photo/who-is-the-boss.jpg?s=612x612&w=0&k=20&c=6HGMxKLOZWJmwDEF0Gb16C0BcnMmY7bvAy3NKmrOW6A="
//   },
//   {
//   name : "HET",
//   rollNo : 102,
//   imgPath : "https://static.vecteezy.com/system/resources/thumbnails/028/607/729/small_2x/funny-surprised-cat-with-a-questioning-pose-a-cute-kitten-asks-in-surprise-where-the-treats-are-generated-ai-photo.jpg"
//   },
//   {
//   name : "DEV",
//   rollNo : 103,
//   imgPath : "https://img.freepik.com/free-photo/view-funny-monkey-human-clothing_23-2150758506.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid" 
//   },
//   {
//   name : "MEET",
//   rollNo : 104,
//   imgPath : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IO6cYbTqsVXQKnpJRQ8B3QsBb-vEmyqNiQ&s"
//   }
// ]



// const newarr = data.map ((elmt) => {
//   return(
//   <>
//     <tr>
//       <td>{elmt.name}</td>
//       <td>{elmt.rollNo}</td>
//     </tr>
//   </>
//   )
// });

// const newdata = data.map ((elmt) => {
//   return(
//     <>
//       <div className="col-3">
//         <div className="card">
//           <img src={elmt.imgPath} className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">{elmt.rollNo}</h5>
//             <p className="card-text">{elmt.name}</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// });




//===================FOR ROUTING==============================================

function MyNavbar(){

  return(
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Outlet/>
    </>
  );
}

function TailNavBar(){
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//=====================FOR CARD====================
// <>
//   <div className="container-sm m-4">
//     <div className="row">{newdata}</div>
//   </div>
// </>



  //===========================FOR ROUTING===============================================
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MyNavbar/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
