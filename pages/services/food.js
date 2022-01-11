import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const food = () => {
  return (
    <>
       <Head>
       <title>Food waste Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offer Food waste Recycling Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="Food waste,Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
       </Head>
      <Header text="Food waste" smallText="" background="Food_recycling.jpg"/>
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">Food waste</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Food_recycling.jpg"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                We offer a comprehensive food waste service throughout Dorset, working with local food waste companies so we can provide the best rates for you.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              All food waste is 100% recycled via a local bio plant in the county, we provide 240-litre bins, these are tipped and then a new bin liner and then sanitised spray added to freshen the bin.
              </p>
              <p className="lead mb-4 pb-1">
              Segregating your food waste will help you to reduce the weight in your general waste bins and a great way to improve the environment as it is turned into compost.
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

export default food;
