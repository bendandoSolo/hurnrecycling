import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const eventWasteManagement = () => {
  return (
    <> 
    <Head>
    <title>Event Waste Mangagement Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
    <meta name="description" content="Hurn Recycling offer Event Waste Mangagement Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
    <meta name="keywords" content="Event Waste Mangagement,Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
   </Head>
      <Header text="Event Waste Mangagement" smallText="" 
      background="Events_waste_management.jpg"
      />
      <section>
        <div className="container mt-5 py-5">
        <h2 className="mb-5 text-center">Event Waste Mangagement</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Event_waste_management.jpg"
                className="img-fluid service-page-small-image"
                alt="Event Waste Management"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                At Hurn Recycling  we provide event waste management for all sizes and types of events.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              Whether it be a wedding, festival, home or office party we provide events waste management tailored to suit your needs.
              </p>
              <p className="lead mb-4 pb-1">
              We consult with you to ensure that the most waste can be recycled to make your event as green as possible.</p>
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

export default eventWasteManagement;
