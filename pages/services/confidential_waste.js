import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

const confidentialWaste = () => {
  return (
    <>
      <Header
        text="Confidential Waste Collection"
        smallText=""
        background="Confidential_waste.jpg"
      />
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">Confidential waste collection</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Confidential_waste.jpg"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>We offer both pre-paid sacks or secure bin hire to dispose of any confidential waste.</strong>
              </h4>
              <p className="lead mb-4 pb-1">
              For large jobs we recommend that we inspect the site and assess the best way to dispose of your confidential waste.
              </p>
              <p className="lead mb-4 pb-1">
              This service can be arranged as either a one off collection or on a scheduled collection whatever suites your needs.
              </p>
              
              <p className="lead mb-4 pb-1">
              All waste papers taken are shredded to DIN level 66399, this is also backed up with a confidential waste destruction certificate from us to make sure you are complying with GDPR requirements.
              </p>

              <p className="lead mb-4 pb-1">
                To find out more, call free on 01202 257 530 or Request a
                Callback.
              </p>
              <Link href="/contact">
                <button
                  className="btn btn-lg btn-success text-center mb-4"
                  id="green-btn"
                >
                  Get A Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default confidentialWaste;
