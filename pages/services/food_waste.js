import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import FindOutMore from "../../components/widgets/FindOutMore";
import ReactPlayer from 'react-player/youtube';

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
          </div>
          <FindOutMore />
      </section>
      </div>

      <section className="mb-5 background-offwhite1">
          <div className="container">
          <div className="row mb-4 ">
              <div className="col-lg-6 mt-5">
                  <h4 className="mb-5 ms-3"><strong>What can be put into Food Waste Recycling Bins?</strong></h4>
                  <ul>
                    <li>All uneaten food and plate scrapings</li>
                    <li>All types of palletised food waste</li>
                    <li>Meat and fish (cooked or raw)</li>
                    <li>Cooked food (e.g. rice, pasta, vegetables etc.) and Ready Meals</li>
                    <li>Baked goods such as bread, cakes and pastries</li>
                    <li>Fruit and vegetables including raw and cooked vegetables and peelings</li>
                    <li>Tea bags, coffee grounds</li>
                    <li>Cereals</li>
                    <li>All Dairy products</li>
                    <li>Any Category 3 animal by-product (contaminated)</li>
                    <li>Out-of-date or mouldy food</li>
                    <li>Raw and cooked meat or fish, including small bones</li>
                  </ul>
              </div>
              
              <div className="col-lg-6 mt-5">
              <h4 className="mb-5 ms-3"><strong>What cannot be put into Food Waste Recycling Bins?</strong></h4>
              <ul>
                <li>NB: Please ensure that any bags of food placed in the bin are transparent</li>
                <li>Liquids: These may cause leaks and spillages when transporting the food</li>
                <li>Non-food products including nappies</li>
                <li>Packaging of any kind</li>
                <li>medical waste</li>
                <li>Large parts of animals</li>
              </ul>
              </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 py-5" >
      <section className="mb-5 ">
      <h4 className="text-center mb-5">
        <strong>
        Food Waste Recycling in the UK and Worldwide
        </strong>
      </h4>
          <p className="lead mb-2 pb-1">The United Nations estimates that a third of all food produced globally is lost or wasted each year, totalling 1.3 billion tons. That's enough to feed the world's hungry many times over. And it's not just a developing world problem. In the UK 4.5 million tonnes of food are thrown away by households annually.</p>
          <p className="lead mb-4 pb-1">The good news is that there are many ways to reduce food waste, and recycling is one of them.</p>
      </section>

      <section className="mb-5 mt-5">
      <h4 className="text-center mb-5 mt-5">
        <strong>
        How Food Waste is Recycled
        </strong>
      </h4>
          <p className="lead mb-4 pb-1">Food waste can be recycled in a number of ways. It can be composted, which is a process of breaking down organic matter into a nutrient-rich soil amendment. It can be anaerobically digested, which is a process of breaking down organic matter in the absence of oxygen to produce methane gas, which can then be used to generate electricity. And food waste can also be recycled into animal feed. This is often done with meat and dairy products that are not fit for human consumption.</p>
          <p className="lead mb-2 pb-1">The key to successful food waste recycling is to keep it out of the landfill. Landfills are a major source of methane, a powerful greenhouse gas. When food waste decomposes in a landfill, it produces methane. When food waste goes to landfill, it decomposes under uncontrolled conditions and releases methane, which is 23x more dangerous to the planet than carbon dioxide. The bottom line is that food waste is a problem that we can all do something about.</p>
          <div className="row mb-4 ">
              <div className="col-lg-6 mt-5 pt-5">
                <h5 className="text-center mb-3 pt-3"><strong>How Food Waste is Recycled: Anaerobic digestion</strong></h5>
                <ReactPlayer url="hhttps://www.youtube.com/watch?v=WdZViehrUks" origin="http://localhost:3000" width='100%' height='100%' style={{width: '100%', height: 'auto', minHeight: '300px'}} controls/>
            
              </div>
              <div className="col-lg-6 mt-5 pt-5">
                <h5 className="text-center mb-3 pt-3"><strong>How Food Waste is Recycled: In-vessel composting </strong></h5>
                <ReactPlayer url="https://www.youtube.com/watch?v=Td30khKYc5Y" origin="http://localhost:3000" width='100%' height='100%' style={{width: '100%', height: 'auto', minHeight: '300px'}} controls/>
              </div>
          </div>
      </section>

      </div>
      <FindOutMore />
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
