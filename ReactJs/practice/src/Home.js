import { useState} from "react"

function Home(){

    const [countchangefac,setCountChangeFac] = useState(0)
    const [sizeinc,setSizeInc] = useState(325)

    const data1 = [
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
  
    const newdata1 = data1.map ((elmt) => {
  
      return(
        <>  
          <div className='d-flex justify-content-evenly'>
    
            <button className="btn btn-success" onClick={ () => {

              if(sizeinc < 300){
                setSizeInc(sizeinc + 100)
              }

              }}>
              Increase
            </button>

            <button className="btn btn-danger" onClick={ () => {
                if(sizeinc > 100){
                  setSizeInc(sizeinc - 100)
                }
              }}>
              Decrease
            </button>
    
          </div>

          <div className="col-3 mt-5" style={{maxWidth:325+"px"}}>
            <div className="card w-100">
              <img src={elmt.imgPath} className="card-img-top" alt="..." style={{width:sizeinc + "px",maxWidth:100 + "%",minWidth:100 + "px"}}/>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{elmt.name}</h5>
                <p className="card-text d-flex justify-content-center">{elmt.about}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>

          </div>
        </>
      )
    })
      
    return(
      <>
        <br/>
  
        <div style={{width:100 + "%"}} className="d-flex justify-content-evenly">
  
          <button className="btn btn-primary" onClick={ () => {

           if(countchangefac <= 0){
            setCountChangeFac(countchangefac + 2);
           }
           else{
            setCountChangeFac(countchangefac - 1);
            }

          }
            }>
            Prev
          </button>

          <button className="btn btn-primary" onClick={ () => {

            setCountChangeFac((countchangefac + 1) % newdata1.length)}}>

            Next
          </button>
  
        </div>
  
        <br/>
  
        <div className='container'>
  
          <div className='row d-flex justify-content-center align-items-center'>
  
            {newdata1[countchangefac]}
  
          </div>
  
        </div>
  
      </>
    )
}

export default Home
