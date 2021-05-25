import React from "react";
import Header from "../components/Header";

const generalWaste = () => {
  return (
    <>
      <Header text="GENERAL WASTE DISPOSAL" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5 pb-2">
          <h2 className="mb-5 text-center">GENERAL WASTE DISPOSAL</h2>
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
                  Try as we might, not everything can be recycled.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                Being able to provide you with a total waste management service
                means that at Hurn Recycling we can remove all the waste your
                business can produce, including general rubbish, polystyrene
                packaging and food waste.
              </p>
              <p className="lead mb-4 pb-1">
                Catering for any size business is what we do best and we have a
                range of bin sizes – 240, 360, 660 and 1100 litre containers are
                all available for you to fill and us to remove.
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

export default generalWaste;
