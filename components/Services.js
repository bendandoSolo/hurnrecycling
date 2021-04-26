import React from "react";
import Link from "next/link";

const Services = ({ title }) => {
  return (
    <section className="text-center">
      <div className="container mt-5 py-5 pb-2">
        {!!title && <h2 className="mb-5">SERVICES</h2>}
        <div className="row">
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/office-recycle-2.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Office Recycling
                </h5>
                <p className="small">
                  Make your company environmentally friendly and minimise your
                  waste disposal costs - Recycle your paper.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success btn stretched-link mb-2 ">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/plastic-bottles.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Plastic Bottles & Cans
                </h5>
                <p className="small">
                  Our plastic bottles, cans and vending cups service is ideal
                  for any business. Cost effective and green.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/cardboard.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Cardboard & Packaging Recycling
                </h5>
                <p className="small">
                  Recycle all of your Cardboard & Packaging with easy and cost
                  effective recycling solutions for your business.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/confidential-waste.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Confidential Waste
                </h5>
                <p className="small">
                  Our Confidential Waste Disposal guarantees protection of
                  sensitive company materials and a defence from fraud.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/electrical.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Electrical Equipment Disposal
                </h5>
                <p className="small">
                  Make your company environmentally friendly and minimise your
                  waste disposal costs - recycle your paper.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/glass.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">Glass</h5>
                <p className="small">
                  Recycle all your glass with easy and cost effective recycling
                  solutions for your business
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/furniture-removal.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Office Furniture
                </h5>
                <p className="small">
                  Whether it’s a complete office refurbishment or the collection
                  of a single broken chair Hurn Recycling can help.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/general-waste.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  General Waste Disposal
                </h5>
                <p className="small">
                  We can remove all the waste from your business, including
                  general rubbish, polystyrene packaging and food waste.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0 pb-2">
            <div className="card">
              <div className="bg-image">
                <img
                  src="/images/services/office-recycle-2.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center my-3">
                  Cardboard & Packaging Recycling
                </h5>
                <p className="small">
                  Recycle all of your Cardboard & Packaging with easy and cost
                  effective recycling solutions for your business.
                </p>
                <hr className="mt-3 mb-4" />
                <a className="btn btn-success stretched-link mb-2">
                  See More <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
