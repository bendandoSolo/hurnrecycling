import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

const polystyreneCollection = () => {
  return (
    <>
      <Header text="Man and van services" smallText="Recycling Service" background="/images/Desktop/man_and_van_clearance.png" />
      <section>
      <div className="container mt-5 py-5">
        <h2 className="mb-5 text-center">Man and van services</h2>
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
                We cater to any recycling or waste disposal needs. 
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              Our 24-hour man and van service is helpful for people looking dispose of items such as a mattresses or white goods safely and in an environmentally 
friendly manner. Or for those who need help with a one off job such as moving house.
              </p>

              <p className="lead mb-4 pb-1">
              Get in touch by phone or email for a quote and we will respond rapidly, we offer a 24-hour service so day or night we will be there when you need.
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
