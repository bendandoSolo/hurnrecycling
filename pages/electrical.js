import React from "react";
import Header from "../components/Header";

const electrical = () => {
  return (
    <>
      <Header text="Electrical Equipment" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">ELECTRICAL EQUIPMENT</h2>
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
                <strong>IT and Electrical Equipment</strong>
              </h4>
              <p className="lead mb-4 pb-1">
                The need to have the most up-to-date equipment means that
                everyone is changing computers, printers, even photocopiers more
                and more frequently.
              </p>
              <p className="lead mb-4 pb-1">
                IT and the use of computers now dominate every business from the
                largest of offices down to the self-employed person working from
                their spare room.
              </p>
              <p className="lead mb-4 pb-1">
                Hurn Recycling can remove all your electrical equipment and
                guarantee its disposal in line with WEEE legislation.
              </p>
              <p className="lead mb-4 pb-1">
                All computer systems, monitors and peripherals, including toner
                and printer cartridges, are collected and recycled. We also
                remove and recycle all white and brown goods.
              </p>
              <h4 className="mb-4">
                <strong>Light Bulbs and Fluorescent Tubes</strong>
              </h4>
              <p className="lead mb-4 pb-1">
                Fluorescent tubes are categorised as hazardous waste and
                therefore cannot be disposed of safely without risk to staff.
                Hurn Recycling will ensure the safe removal and destruction of
                them.
              </p>
              <p className="lead mb-4 pb-1">
                We provide containers that can hold up to 200 fluorescent tubes,
                we then have the tubes safely degassed in Southampton, ensuring
                your health and safety record stays superb.
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

export default electrical;
