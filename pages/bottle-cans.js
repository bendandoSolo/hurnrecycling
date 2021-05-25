import React from "react";
import Header from "../components/Header";

const bottleCans = () => {
  return (
    <>
      <Header text="Plastic Bottles & Cans" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">PLASTIC BOTTLES & CANS RECYCLING</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
              <img
                src="/images/it-disposal.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                  Recycling one plastic bottle saves the same amount of energy
                  needed to power a 60-Watt light bulb for six hours.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                Our plastic bottles, cans and vending cups service is ideal for
                any office based canteen. We provide easy to manage bags and
                bins to be placed in the kitchen together with larger bins
                outside.
              </p>
              <p className="lead mb-4 pb-1">
                Special bins for vending cups can be placed at drinks machines,
                ensuring your staff do all the sorting for you.
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

export default bottleCans;
