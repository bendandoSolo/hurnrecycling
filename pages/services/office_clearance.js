import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

const officeClearance = () => {
  return (
    <>
      <Header text="Office clearance and relocation" smallText="" background="/images/Desktop/Office_clearance.jpg"/>
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">Office clearance and relocation </h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Office_clearance.jpg"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                We  offer a fully comprehensive office clearance /or nationwide relocation service should you be moving offices. 
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              For a quote either get in touch with us by phone or email or we can send a member of our team to the site to help determine how best to organise your office clearance or relocation.
              </p>
              <p className="lead mb-4 pb-1">
              We will organise on site skips for general and recycling waste disposal and 
              Should it be required we can send our team in to dismantle  your office furniture and transport it to a new location.
              </p>
              <p className="lead mb-4 pb-1">
              Any old or unwanted furniture is either reconditioned and sold or fully recycled.
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

export default officeClearance;
