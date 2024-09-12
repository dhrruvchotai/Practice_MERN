function Contact(){

    const data3 = [
        {
        name : "Dr. Gopi Sanghani",
        imgPath : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
        about:"Ph.D. , M.E. (CE)"
        },
        {
        name : "Dr. Nilesh Gambhava",
        imgPath : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
        about:"Ph.D. , M.E. (CE)"
        },
        {
        name : "Dr. Pradyumansinh Jadeja",
        imgPath : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
        about:"Ph.D. , M.E. (CE)"
        },
      
    ];

    const newdata3 = data3.map ((elmt) => {
  
    return(
        <>  
            <br/>

            <div className="col-3">
                <div className="card">
                <img src={elmt.imgPath} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{elmt.name}</h5>
                    <p className="card-text">{elmt.about}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
        </>
    );
    });


    return(
      <>  
        <br/>
        <div className='container'>
  
          <div className='row d-flex justify-content-center align-items-center'>
            {newdata3}
          </div>
  
        </div> 
      </>
    )
};

export default Contact;