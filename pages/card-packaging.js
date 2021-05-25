import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const cardPackaging = () => {
  return (
    <>
      <Header text="Card & Packaging" smallText="Recycling Service" />
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">CARD & PACKAGING RECYCLING</h2>
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
                  The UK produces over 8 million tons of cardboard packaging
                  every year, equating to 140 large cardboard boxes per person.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                At Hurn Recycling we know that cardboard is the largest single
                constituent of municipal waste worldwide. 80-90% of the material
                we collect is made up of cardboard, so we have every kind of
                solution to help you recycle yours.
              </p>
              <p className="lead mb-4 pb-1">
                We can provide you with 1100 litre containers in order to keep
                the large volumes under control.
              </p>
              <p className="lead mb-4 pb-1">
                We also provide compaction units or “Balers” to reduce the space
                the card takes up. The Balers are entirely recyclable, of
                course!
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

export default cardPackaging;
