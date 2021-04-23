import React from "react";

const Clients = () => {
  return (
    <section className="text-center">
      <div className="container my-5 p-5">
        <h2 className="mb-5">CLIENTS</h2>

        <p className=" lead mb-5 mx-auto w-responsive">
          Hurn Recycling provide a host of Recycling Services for our
          established client base of public and private sector companies,
          featuring some of the UK’s best brand names.
        </p>

        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/sony-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 mb-4 mb-lg-0 pb-2 order-md-1 order-lg-2">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/nhs-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-2 order-md-3 order-lg-3">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/bcp-council-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-2 order-md-3 order-lg-3">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/spar-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/brittany-ferries-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 mb-4 mb-lg-0 pb-2 order-md-1 order-lg-2">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/yellow-buses-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-2 order-md-3 order-lg-3">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/coles-miller-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-2 order-md-3 order-lg-3">
            <div className="card">
              <div className="bg-image hover-zoom">
                <img
                  src="/images/clients/travis-perkins-logo.jpg"
                  className="card-img-top"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-lg btn-success mt-4">
          See More Clients
        </button>
      </div>
    </section>
  );
};

export default Clients;
