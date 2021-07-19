import React from "react";
import Link from "next/link";

const ServiceCard = ({ title, text, imageURL, url }) => {
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

export default ServiceCard;

export const FlexboxServiceCard  = ({ title, text, imageURL, url }) => {
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



