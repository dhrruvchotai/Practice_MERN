import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const data = [
  {
  name : "DHRUV",
  rollNo : 101, 
  imgPath : "https://media.istockphoto.com/id/480585465/photo/who-is-the-boss.jpg?s=612x612&w=0&k=20&c=6HGMxKLOZWJmwDEF0Gb16C0BcnMmY7bvAy3NKmrOW6A="
  },
  {
  name : "HET",
  rollNo : 102,
  imgPath : "https://static.vecteezy.com/system/resources/thumbnails/028/607/729/small_2x/funny-surprised-cat-with-a-questioning-pose-a-cute-kitten-asks-in-surprise-where-the-treats-are-generated-ai-photo.jpg"
  },
  {
  name : "DEV",
  rollNo : 103,
  imgPath : "https://img.freepik.com/free-photo/view-funny-monkey-human-clothing_23-2150758506.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid" 
  },
  {
  name : "MEET",
  rollNo : 104,
  imgPath : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IO6cYbTqsVXQKnpJRQ8B3QsBb-vEmyqNiQ&s"
  }
]

const newarr = data.map ((elmt) => {
  return(
  <>
    <tr>
      <td>{elmt.name}</td>
      <td>{elmt.rollNo}</td>
    </tr>
  </>
  )
});

const newdata = data.map ((elmt) => {
  return(
    <>
    <div className="col col-3">
        <div className="card">
          <img src={elmt.imgPath} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{elmt.rollNo}</h5>
            <p className="card-text">{elmt.name}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  )
});

 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="container-sm m-4">
      <div className="row">{newdata}</div>
    </div>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
