import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import FindOutMore from "../../components/widgets/FindOutMore";

const food = () => {
  return (
    <div  >
       <Head>
       <title>Food waste Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Food waste Recycling Services throughout Bournemouth, Poole, Dorset and the South West. We recycle 100% of your food waste."></meta>
       <meta name="keywords" content="Food waste Recyling,Cardboard and Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
       </Head>
      <Header text="Food waste " smallText="" background="Food_recycling.jpg"/>
     
      <div className="container mt-5 py-5" >
      
      <section>
          <h2 className="mb-5 text-center">Food Waste Recycling</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
                src="/images/service_cards/Food_recycling.jpg"
                className="img-fluid service-page-small-image"
                alt="Food Waste Recycling"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="text-center mb-5">
                <strong>
                 Comprehensive Food Waste Recycling Services in and around Bournemouth, Dorset, SW England.
                </strong>
              </h4>
              
              <p className="lead mb-4 pb-1">
              We collect food waste from your premises and ensure that 100% of the food waste is recycled via a local bio plant.
              </p>
              <p className="lead mb-4 pb-1">
              We provide 240-litre food waste recycling bins; upon collection we replace the bin liner and use a sanitizer to freshen each food waste recyling bin.
              </p>
              <p className="lead mb-4 pb-1">
              Segregating your food waste into recycling bins helps  reduce the weight in your <Link href="/services/general_waste" ><a className="highlight-link">general waste bins</a></Link> and is a great way to protect the environment as all food waste is turned into compost.
              </p>
              
              <h4 className="mb-4 text-center">
                <strong>
                 Areas we cover: Dorset, Devon, Hampshire, Somerset and Wiltshire.
                </strong>
              </h4>
                    
            </div>
            <FindOutMore />      
          </div>
      </section>

      {/* <section>
      <h4 className="text-center mb-5">
        <strong>
        Food Waste Recycling in the UK and the around the world
        </strong>
      </h4>
          <p className="lead mb-4 pb-1"></p>
          <p className="lead mb-4 pb-1"></p>
  
      </section> */}

      </div>

      <div className="background-offwhite1">
        <div className="container mt-5 py-5">
        <section >
        <h3 className="mb-5 text-center">New Uk Food Waste Recycling Legislation</h3>
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
