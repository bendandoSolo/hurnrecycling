import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import CallNowButton from '../../components/widgets/CallNowButton';

const dryMixed = () => {
  return (
    <>
    <Head>
       <title>DMR Dry Mixed Recycling Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="DMR Hurn Recycling offer Dry Mixed Recycling Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
         <meta name="keywords" content="DMR Dry Mixed Recycling,Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
    </Head>
      <Header text="Dry Mixed Recycling (DMR)" smallText="" background="Dry_mixed_recycling.jpg"/>
      <section className="container mt-5 pt-5" >
          <h2 className="mb-5 text-center">Dry Mixed Recycling (DMR)</h2>
          
          <div className="row mb-4" /*style={{display: 'flex', flexDirection: "row-reverse" }}*/ >
            <div className="col-lg-6 mt-5">
            <h3 className="mb-4 pt-2 text-center">
                <strong>
                    Dry Mixed Recycling (DMR) Waste Collection and Management Services
                </strong>
              </h3>
              <h5 className="mb-5 px-2 pt-4 text-center" style={{lineHeight: '1.6'}}>
                <strong>
                Dry Mixed Recycling or DMR is a cost effective way to recycle waste. We offer DRM wheelie bin collection from your premises.
                </strong>
              </h5>
              <CallNowButton margin={'my-2'} />
              <h4 className="mb-4 pt-4">
                <strong>
               What is Dry Mixed Recycling (DMR) ?
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                 Dry Mixed Recycling is exactly what is says on the tin. 
                 By sorting all your clean dry recyclables such as <Link href="/services/paper" ><span className="highlight-link" >cardboard and paper</span></Link>
                , plastic, metal and <Link href="/services/glass" ><span className="highlight-link" >glass</span></Link> into one container, and separating them from 
                 wet or sticky waste such as food waste, it allows us to process your waste efficiently and at a low cost.
                 Helping both the environment and your business reduce its waste management costs.
              </p>

              <h4 className="mb-4 pt-4">
                <strong>
               The Benefits of DMR (Dry Mixed Recycling) 
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              Dry mixed recycling involves sorting and separating different materials such as <Link href="/services/paper" ><span className="highlight-link" >cardboard and paper</span></Link>,
               plastic, metal and <Link href="/services/glass" ><span className="highlight-link" >glass</span></Link>. The sorted materials are then sold to manufacturers who use them to create new products. 
              The benefits of dry mixed recycling include:</p> 
              
              <ul className="lead">
                <li>Reducing the amount of waste sent to landfill</li>
                <li>Saving energy and resources</li>
                <li>Reducing greenhouse gas emissions</li>
              </ul>
              
              <p className="lead mb-4 pb-1">The UK government has recently begun increasing the cost of landfill, and this trend is likely to continue. There has never been a better time to begin recycling and DMR is the simplest way to begin.</p>

              {/* <h4 className="mb-4">
                <strong>
                We offer a wide range of recycling services, including mixed recycling services, which are suitable for businesses where there is no option for further segregation. 
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              With our mixed recycling services you can still reduce your impact on the environment in a cost-effective way. We can accept clean and dry recyclables including plastic bottles, pots, tubs, trays, cardboard, paper and metal drink cans in our mixed recycling bins.
              </p>
              <p className="lead mb-4 pb-1">
              Liquid bottles need to be rinsed, and the following materials should be avoided when sorting your waste, as they can contaminate your DMR bin: black bags, crisp and sweet packaging, polystyrene, glass, wood, food, containers with residue of food or liquids and hard plastics. Please see the poster below, or contact us for more information.
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
              </Link> */}
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
              <img
                src="/images/DMR poster.jpg"
                className="img-fluid"
                alt="DMR poster"
              />
            </div>
          </div>
      </section>

      <section>
        <div className="container py-5 row mb-1" >
            <div className="col-lg-6">
              <h4 className="mb-4 pt-4"><strong>What can go into your DMR bin?</strong></h4>
              <p className="lead mb-2 pb-1">
              We can accept clean and dry recyclables including plastic bottles, pots, tubs, trays, <Link href="/services/paper" ><span className="highlight-link" >cardboard and paper</span></Link> and metal drink cans in our dry mixed recycling bins.
              Liquid bottles should be rinsed. and the following materials should be avoided when sorting your waste</p> 
            </div>
            <div className="col-lg-6">
                 <h4 className="mb-4 pt-4"><strong>What should not go into your DMR bin?</strong></h4>
                 <p className="lead mb-2 pb-1">
                 the following materials should be avoided when sorting your waste, as they can contaminate your DMR bin: black bags, crisp and sweet packaging, <Link href="/services/polystyrene_collection" ><span className="highlight-link" >polystyrene</span></Link>, <Link href="/services/glass" ><span className="highlight-link" >glass</span></Link>, wood, <Link href="/services/food" ><span className="highlight-link" >food</span></Link>,
                  containers with residue of food or liquids and hard plastics. Please see the poster below, or contact us for more information.</p> 
            </div>
        </div>
      </section>

      <div className='horizontal-center-singleitem container pb-5'>
        <div><p className="lead mb-4 pb-1">
                To find out more, call us on <a href="tel:+441202257530" className="highlight-link"> <i className="fas fa-phone ps-2" /> 01202 257 530</a>. If out of office hours leave a message and we will get right back to you.
              </p>
              <div className='horizontal-center-singleitem'>
              <Link href="/contact">
                <button className="btn btn-lg btn-success text-center mb-4" id="green-btn">
                  Get A Quote
                </button>
              </Link>
              </div>
          </div>
      </div>

    </>
  );
};

export default dryMixed;
