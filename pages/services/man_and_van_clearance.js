import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const polystyreneCollection = () => {
  return (
    <>
     <Head>
       <title>Man and van services in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offer Man and van Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="Man and van services, Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
      </Head>
      <Header text="Man and van services" smallText="" background="Man_and_van_clearance.jpg" />
      <section>
      <div className="container mt-5 py-5">
        <h2 className="mb-5 text-center">Man and van services</h2>
        <div className="row mb-4">
          <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
          <img
                src="/images/service_cards/Man_and_van_clearance.jpg"
                className="img-fluid service-page-small-image"
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
