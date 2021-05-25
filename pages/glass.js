import React from "react";
import Header from "../components/Header";

const glass = () => {
  return (
    <>
      <Header text="GLASS" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5 pb-2">
          <h2 className="mb-5 text-center">GLASS RECYCLING</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
              <img
                src="/images/it-disposal.png"
                className="img-fluid"
                alt="Sample image"
              />
              <img
                src="/images/it-disposal.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                  Time is money in business, therefore our glass bins take all
                  colours of glass, leaving the sorting to us so you can turn a
                  profit.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                We have 240 – 660 litre containers available which are ideal for
                pubs, restaurants, hotels, holiday parks, leisure centres,
                schools, the list is endless.
              </p>
              <p className="lead mb-4 pb-1">
                To find out more, call free on 01202 257 530 or Request a
                Callback.
              </p>
              <button
                className="btn btn-lg btn-success text-center mb-4"
                id="green-btn"
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default glass;
