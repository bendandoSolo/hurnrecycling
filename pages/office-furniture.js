import React from "react";
import Header from "../components/Header";

const officeFurniture = () => {
  return (
    <>
      <Header text="OFFICE FURNITURE" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5 pb-2">
          <h2 className="mb-5 text-center">OFFICE FURNITURE RECYCLING</h2>
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
                  Whether it’s a complete office refurbishment or the collection
                  of a single broken chair Hurn Recycling can help. Even the
                  largest of office equipment can be collected and recycled,
                  including desks, computer tables, and the most luxurious
                  office swivel chairs.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                Electrical equipment is also recyclable and can be collected.
                All computer systems, monitors and peripherals, including toner
                and printer cartridges, can be collected and recycled. We will
                also remove and recycle all white and brown goods.
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

export default officeFurniture;
