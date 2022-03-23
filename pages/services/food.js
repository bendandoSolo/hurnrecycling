import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const food = () => {
  return (
    <div  >
       <Head>
       <title>Food waste Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offer Food waste Recycling Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="Food waste,Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
       </Head>
      <Header text="Food waste" smallText="" background="Food_recycling.jpg"/>
     

      <div className="container mt-5 py-5" >
      
      <section>
          <h2 className="mb-5 text-center">Food Waste</h2>
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
                <button className="btn btn-lg btn-success text-center mb-4" id="green-btn">
                  Get A Quote
                </button>
              </Link>
            </div>
          </div>
      </section>
      </div>

      <div className="background-offwhite1">
        <div className="container mt-5 py-5">
        <section >
        <h3 className="mb-5 text-center">New Uk Food Waste and Recycling Legislation</h3>
        <p className="lead">The UK is a global leader in tackling food waste, with the government pledging to reduce food waste by 20% by 2025, total food waste levels falling by 480,000 tonnes between 2015 and 2018 and the Environment Bill committing to eliminating food waste from landfill by 2030.</p>
        <p className="lead">The UK government has confirmed that the new legislation will introduce a clear set of recyclable materials for both household and commercial waste, including the separation of dry and organic waste collections.</p>
        <p className="lead">It is likely that companies producing over a set threshold of food waste will be required to recycle it, similar to the legislation currently in place in Scotland and that fines will be served to those who don’t comply.</p>
        </section>
        </div>
      </div>
    </div>
  );
};

export default food;
