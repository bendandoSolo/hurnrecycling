import React from "react";
import Header from "../components/Header";

const officePaper = () => {
  return (
    <>
      <Header text="OFFICE PAPER" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5 pb-2">
          <h2 className="mb-5 text-center">OFFICE PAPER RECYCLING</h2>
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
                  Each year, offices in Britain throw away over one million
                  tonnes of office paper and plastics.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                We ensure that your business plays a part in reducing the amount
                of paper getting to Dorset’s landfills. We provide containers to
                be placed in useful locations around the office i.e. beside
                photocopiers and printers which, when full, can be stored
                awaiting collection. Should storage be a problem we can arrange
                on site storage containers.
              </p>
              <p className="lead mb-4 pb-1">
                We can recover almost every type of waste paper including white
                based paper like letters, photocopies, computer printouts. Even
                general office papers are no problem like magazines, coloured
                paper, newspapers and envelopes. All this can be used in
                conjunction with our confidential destruction service.
              </p>
              <p className="lead mb-4 pb-1">
                Recyclable material once processed is pulped and recycled into
                new products. This scheme requires minimal effort to make your
                company environmentally friendly and minimise your waste
                disposal costs.
              </p>
              <p className="lead mb-4 pb-1">
                To find out more, call free on 01202 257 530 for a Free
                Recycling Audit.
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

export default officePaper;
