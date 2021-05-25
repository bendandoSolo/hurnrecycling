import React from "react";
import Header from "../components/Header";

const confidentialWaste = () => {
  return (
    <>
      <Header
        text="CONFIDENTIAL WASTE DISPOSAL"
        smallText="Recycling Service"
      />
      <section>
        <div className="container mt-5 py-5 pb-2">
          <h2 className="mb-5 text-center">CONFIDENTIAL WASTE DISPOSAL</h2>
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
                <strong>Security within any company is paramount.</strong>
              </h4>
              <p className="lead mb-4 pb-1">
                Confidential waste destruction means guaranteed protection of
                sensitive company materials and a defence from potential
                fraudsters.
              </p>
              <p className="lead mb-4 pb-1">
                Our service means you are provided with everything you need
                including zip tied sacks, secure bins and a certificate of
                “Confidential destruction” signed off by directors.
              </p>
              <h4 className="mb-4">
                <strong>
                  The team are fully trained and have security clearance to
                  ensure:
                </strong>
              </h4>
              <li className="lead mb-4 pb-1">
                Secure disposal of documents and sensitive materials
              </li>
              <li className="lead mb-4 pb-1">
                Secure destruction of all computer storage media
              </li>
              <li className="lead mb-4 pb-1">
                All documents are shredded, baled and taken directly to the mill
                for recycling
              </li>
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

export default confidentialWaste;
