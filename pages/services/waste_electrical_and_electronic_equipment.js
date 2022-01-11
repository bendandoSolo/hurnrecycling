import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const WEEErecycling = () => {
  return (
    <>
    <Head>
       <title>WEEE Waste Collection Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offer WEEE Waste collection Recycling Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="WEEE Waste collection, Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
      </Head>
      <Header text="WEEE Waste collection" smallText="" background="WEE_waste_collection.jpg"/>
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">WEEE Waste collection</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/WEE_waste_collection.jpg"
                className="img-fluid service-page-small-image"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>WEEE stands for Waste Electrical & Electronic Equipment. By law all businesses and government bodies must not dispose of electronic waste into landfill. WEEE is one of the fasting growing forms waste and needs to be disposed safely and with minimal damage to the environment. </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              We offer a comprehensive service including a detailed onsite inspection to identify your requirements; our trained staff will be on hand to pack and clear all of the WEEE waste.
              </p>
              <p className="lead mb-4 pb-1">
              We dispose of all types of waste electrical and electronic equipment. This is then packed into crates and tonne bags and sent off for disposal and recycling. Our clearances and disposal are all certified, any hard drives are wiped if needed be and after disposal certificate of destruction is provided.
              </p>
              <p className="lead mb-4 pb-1">
                Hurn Recycling can remove all your electrical equipment and
                guarantee its disposal in line with WEEE legislation.
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

export default WEEErecycling;
