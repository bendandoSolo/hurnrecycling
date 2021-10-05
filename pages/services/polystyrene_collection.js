import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

const polystyreneCollection = () => {
  return (
    <>
      <Header text="Polystyrene collection" smallText="" background="/images/Desktop/Polystyrene_collection.png" />
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">Polystyrene collection</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Polystyrene_collection.png"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                Polystyrene is one of the most environmentally damaging products ever, it can take over 500 years for this to decompose in a landfill.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              Because of this we have a designated polystyrene collections, these can be collected via our  tonne bag service. These bags are dropped off to you and we collect them for you at a convenient time. The polystyrene is then shredded  and compacted into blocks to be  completely recycled without damaging the environment.
              </p>
              <p className="lead mb-4 pb-1">
              This service can be arranged as either a one off collection or on a scheduled collection whatever suites your needs.
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

export default polystyreneCollection;
