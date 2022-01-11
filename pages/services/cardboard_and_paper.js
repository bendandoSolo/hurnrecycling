import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const cardPackaging = () => {

  return (
    <>
       <Head>
       <title>Cardboard &amp; Packaging Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offer Cardboard &amp; Packaging Recycling Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
      </Head>
      <Header text="Cardboard and paper recycling" smallText="" background="Cardboard_and_paper_recycling.jpg"/>
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">Cardboard and paper recycling</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
              <img
                src="/images/service_cards/Cardboard_and_paper_recycling.jpg"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                Make your company environmentally friendly and minimise your waste disposal costs - recycle your paper.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              At Hurn Recycling we know that cardboard is the largest single constituent of municipal waste worldwide. 80-90% of material we collect is made up of cardboard, so we have every kind of solution to help you recycle yours.
              </p>
              <p className="lead mb-4 pb-1">
              We  provide both 660 and 1100 litre containers in for cardboard recycling. Alternatively, we can arrange baled and loose cardboard collections, in case your business does not have space for bins to be stored. 
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
