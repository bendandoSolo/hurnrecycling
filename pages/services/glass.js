import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const glass = () => {
  return (
    <>
       <Head>
       <title>Cardboard &amp; Packaging Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offer Glass recycling Recycling Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
      </Head>
      <Header text="Glass recycling" smallText="" background="Glass_recycling.jpg"/>
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">Glass recycling</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Glass_recycling.jpg"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                Recycle all your glass with our easy and cost-effective recycling solutions for your business. Time is money in business; therefore, our glass bins take all colours of glass, leaving the sorting to us so you can turn a profit.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              We have both 240 and 660 litre containers available which are ideal for pubs, restaurants, hotels, holiday parks, leisure centres, schools, the list is endless.
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

export default glass;
