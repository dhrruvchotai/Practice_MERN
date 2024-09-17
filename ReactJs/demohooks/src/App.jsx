import { useState, useEffect } from 'react';
import './App.css';
import Counter from './Components/Counter';
import FetchAPI from './Components/FetchAPI';
function App() {
  
  //Case 1 : Run on every render. (because the dependency array is not passed.)
  // useEffect(()=>{
  //   alert("Hey i will run on every render.")
  // });

  //Case 2 : Run only on first render.(because empty dependency array is passed.)
  // useEffect(() => {
  //   alert('I will only run on the first render.')
  // },[]);

  //Case 3 : When some state changes (dependency array is passed with some value.)
    //for this see Counter and Color components.
  return (
    <>

      {/* ------------------------------------- */}
      {/* For useEffect */}
      {/* <div>
        <h1>Counter Component</h1>
        <Counter /> 
      </div> */}
      {/* ----------------------------------------- */}


      {/* ------------------------------------ */}
      {/* For API fetching. */}
      <FetchAPI/>
    </>
  );
}


export default App;
