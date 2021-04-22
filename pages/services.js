


const services = () => {


const background = "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20%281%29.jpg"

    return (
        <> 
               <div className="bg-image bg-fixed text-center" style={{backgroundImage: `url(${background})`, height: '50vh'}}  >
    <div className="mask" /*style={{backgroundColor: rgba(156,39,176,.3)}}*/ >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <p className="display-6 mb-5">
            <i className="fas fa-quote-left fa-xs" aria-hidden="true"></i>
            Find a way to get a full-body massage every day.
            <i className="fas fa-quote-right fa-xs" aria-hidden="true"></i>
          </p>
          <p className="lead font-italic mb-0">~ S. Jay Olshansky</p>
        </div>
      </div>
    </div>
  </div>   



             <h2 style={{padding: "50px"}}>Services Page</h2> 
        </>
    )
}

export default services;
