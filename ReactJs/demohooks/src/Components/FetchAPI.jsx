import React, { useState, useEffect } from 'react'
import axios from 'axios';
const FetchAPI = () => {

    const [data, setData] = useState([]);
    const [varname, setVarname] = useState("batman");

    async function fetchData(varname) {
        try {

            //for fetch api
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=14d435fd&s=${varname}`);
            const result = await response.json();
            setData(result.Search);

            //for axios
            // const result = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=14d435fd&s=${varname}`);
            // setData(result.data.Search);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const SearchChange = (obj) => {
        setVarname(obj.target.value);  // Update the search term on input change
    };

    const SearchSubmit = (obj) => {
        obj.preventDefault();
        fetchData(varname);  // Fetch data based on the updated search term when the form is submitted
    };

    let finalData = data.map((obj) => {
        return (
            <>
                <div className='col col-4'>
                    <div className="card" style={{ width: 18 + "rem" }}>
                        <img src={obj.Poster} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{obj.Title}</h5>
                            <p className="card-text">{obj.Year}</p>
                            <a href="#" className="btn btn-primary">Watch Now</a>
                        </div>
                    </div>
                </div>
            </>
        )
    });

    return (
        <>
            <form className="d-flex mb-3" role="search" onSubmit={SearchSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={SearchChange}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className='container'>
                <div className='row'>{finalData}</div>
            </div>
        </>
    )
}






export default FetchAPI
