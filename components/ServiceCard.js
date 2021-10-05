import React from "react";
import Link from "next/link";


const ServiceCard = ({ title, text, imageURL, url }) => {

  const link =  `/services/${url}`;

  return (
    <>
        {/* className="service-card flex-service-card hover"> */}
        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 secondary-service-card hover" style={{display: 'block'}} >
        <Link href={link}> 
        {/* <Link href={`/${url}`}> */}
        <div style={{ margin: '10px', position: 'relative', width: '100%', height: '300px',backgroundImage: `url(${imageURL})`, backgroundPosition: 'top center'}} >
        {/* className="service-card flex-service-card hover"> */}
        <p style={{position: "absolute", color: "white", fontSize: '20px', bottom: '0',textAlign: 'left', padding: '10px', fontWeight: 'bold', margin: 0,lineHeight: '24px', opacity: 1, zIndex: 100}}>{title}</p>
        <div style={{width: '100%', height: '100%', backgroundColor: "black", opacity:0.2}} className="no-padding" />
      </div>
      </Link>

        </div>
        </>
  );
};


const ServiceCard_Old= ({ title, text, imageURL, url }) => {
  return (
    <>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 my-4 mb-lg-0 pb-2 service-card">
        <div className="card mx-2 service-card-general">
          <div className="bg-image">
            <img
              src={imageURL}
              /*className="card-img-top" not sure this class is necessary?*/
              className="img-fluid mb-2 div-shadow card-img-top "
              style={{ width: "320px", margin: "0 auto", display: "block" }}
              alt="Sample image"
            />
          </div>
          {/* <div className="card-body">
            <div className="card-body-text mb-3">
              <h5 className="card-title text-center ">{title}</h5>
              <p className="small">{text}</p>
             
            </div>
            <a
              className="btn btn-success stretched-link mb-2"
              style={{ fontSize: "13px" }}
              href={url}
            >
              See More{" "}
              <i
                style={{ marginLeft: "5px" }}
                className="fas fa-long-arrow-alt-right "
              ></i>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

export const FlexboxServiceCard_Old  = ({ title, text, imageURL, url }) => {
  return (
    <>
      <div className="service-card flex-service-card">
        <div className="card mx-2">
          <div className="bg-image">
            <img
              src={imageURL}
              /*className="card-img-top" not sure this class is necessary?*/
              className="img-fluid mb-2 div-shadow card-img-top center-cropped"
              // style={{ width: "320px", margin: "0 auto", display: "block" }}
              alt="service image"
            />
          </div>
          <div className="card-body">
            <div className="card-body-text mb-3">
              <h5 className="card-title text-center ">{title}</h5>
              <p className="small" style={{width: 'auto'}}>{text}</p>
              {/*<hr className="mt-3 mb-4" />*/}
            </div>
            <a
              className="btn btn-success stretched-link mb-2"
              style={{ fontSize: "13px" }}
              href={url}
            >
              See More{" "}
              <i
                style={{ marginLeft: "5px" }}
                className="fas fa-long-arrow-alt-right "
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const FlexboxServiceCard  = ({ title, text, imageURL, url }) => {

  const link =  `/${url}`;


  return (
     <Link href={`/services/${url}`}> 
    
    <div style={{flexBasis: 'auto', margin: '10px', position: 'relative', width: '100%', height: '300px',backgroundImage: `url(${imageURL})`}} className="service-card flex-service-card hover">
        <p style={{position: "absolute", color: "white", fontSize: '20px', bottom: '0',textAlign: 'left', padding: '10px', fontWeight: 'bold', margin: 0,lineHeight: '24px', opacity: 1, zIndex: 100}}>{title}</p>
   
      <div style={{width: '100%', height: '100%', backgroundColor: "black", opacity:0.2}} className="no-padding" />
    </div>
    </Link>
  );
};


{/* <div className="service-card flex-service-card">
<div className="card mx-2">
  <div className="bg-image">
    <img
      src={imageURL}
      className="card-img-top" not sure this class is necessary?
      className="img-fluid mb-2 div-shadow card-img-top center-cropped"
      // style={{ width: "320px", margin: "0 auto", display: "block" }}
      alt="service image"
    />
  </div>
  
</div>
</div> */}


export const PrimaryLargeServiceCard = ({ title, text, imageURL, url }) => {
  return (
    <>
      <div className="col-sm-6 my-4 mb-lg-0 pb-2 service-card primary-large-service-card">
        <div className="card mx-4">
          <div className="bg-image">
            <img
              src={imageURL}
              /*className="card-img-top" not sure this class is necessary?*/
              className="img-fluid mb-2 div-shadow card-img-top primary-large-service-card-image"
              style={{ margin: "0 auto", display: "block" }}
              alt="Sample image"
            />
          </div>
          <div className="card-body">
            <div className="card-body-text mb-3">
              <h5 className="card-title text-center ">{title}</h5>
              <p className="small">{text}</p>
              {/*<hr className="mt-3 mb-4" />*/}
            </div>
            <a
              className="btn btn-success stretched-link mb-2"
              style={{ fontSize: "13px" }}
              href={url}
            >
              See More{" "}
              <i
                style={{ marginLeft: "5px" }}
                className="fas fa-long-arrow-alt-right "
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};



