import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import CallNowButton from '../../components/widgets/CallNowButton';
import FindOutMore from "../../components/widgets/FindOutMore";

//changed URL to general waste since search term is 3x that off municipal waste
const municipalWaste = () => {
  return (
      <> 
      <Head>
       <title>General Waste Recycling in Bournemouth, Poole &amp; Dorset - Hurn Recycling</title>
       <meta name="description" content="Hurn Recycling offers General Waste Recycling Collection and Disposal throughout Bournemouth, Poole, Dorset and the South West"></meta>
       <meta name="keywords" content="General Waste Collection and Disposal, Cardboard Recycling, Packaging Recycling, Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>  
      </Head>
      <Header text="General Waste" smallText="" background="General_waste.jpg"/>

      <section className="container mt-5 py-5">
        <h2 className="mb-5 text-center">General Waste Disposal</h2>
        <div className="row mb-4"> 
          <div className="col-lg-6 mt-5">
            <h3 className="mb-4 pt-2 text-center" ><strong>General Waste Collection and Disposal Services</strong></h3>
              <h4 className="mb-5 px-2 pt-4 text-center" style={{lineHeight: '1.6'}}><strong>
                  Try as we might, not everything can be recycled.
                  For general waste which cannot be recycled we offer our general waste collection services.
              </strong></h4>
              <CallNowButton margin={'my-2'} />
              <h4 className="mb-4 pt-4"><strong>What is General Waste?</strong></h4>
              <p className="lead mb-4 pb-1">
              General waste is normal, unsorted waste. A business's general waste bin is the same as the general waste bin at home and includes all the items that need to be disposed of but cannot be recycled.
              If something can’t be recycled, it should be put into a general waste collection bin.
              </p>
              <h4 className="mb-4 pt-4"><strong>Minimizing General Waste and Rubbish Collection</strong></h4>
              <p className="lead mb-4 pb-1">
              We pride ourselves in helping businesses to recycle as much as possible, and offer over multiple <Link href="/services" ><a className="highlight-link">recycling services</a></Link>. However sometimes it’s not possible to recycle and general waste disposal is the best option for all waste that cannot be recycled. For scenarios when recycling is not the best option we offer commercial waste collection or general waste collection services. We will always endeavor to reduce any landfill as much as we can.
              </p>
            </div>
            <div className="col-lg-6 mt-5">
            <h4 className="mb-4 pt-2"><strong>Businesses Responsibilities for their General Waste Disposal</strong></h4>
            <p className="lead mb-4 pb-1">
            Businesses have a responsibility to store general business waste safely and securely and to keep waste to a minimum by reusing and recycling whatever they can. Businesses should be able to present a <a href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/296502/LIT_7584_697773.pdf' target='_blank' className="highlight-link">Waste Transfer Note (WTN)</a> for all general waste bins on their premises.
            </p>
            <h5 className="mb-4 pt-4">Summary of Businesses General Waste Responsibilites:</h5>
            <ul className="lead">
              <li>Keep waste to a minimum by doing everything you reasonably can to prevent, reuse, recycle or recover waste (in that order)</li>
              <li>Sort and store waste safely and securely</li>
              <li>Complete a <a className="highlight-link" href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/296502/LIT_7584_697773.pdf' target='_blank' >waste transfer note</a> for each load of waste that leaves your premises</li>
              <li>Check if your waste carrier is registered to dispose of waste</li>
              <li>Not allow the waste carrier to dispose of your waste illegally </li>
              <p className="py-2"><b>Further information can be found on the <a href='https://www.gov.uk/managing-your-waste-an-overview' target='_blank' className="highlight-link">UK government Website</a>.</b></p>
            </ul>

              <h4 className="mb-4 pt-2"><strong>General Waste Collection and Disposal Bin Sizes</strong></h4>
              <p className="lead mb-4 pb-1">We cater for any size business and offer the following range of bin sizes for general waste collection:</p>
              <ul className="lead">
                <li>240 Litre General waste bin</li>
                <li>360 Litre General Waste Bin</li>
                <li>660 Litre General Waste Bin</li>
                <li>1110 Litre General Waste Bin</li>
              </ul>
              <p className="lead mb-4 pb-1">If your business does not have the space for a general waste bin, we offer a pre-paid bags service to collect your bagged general waste.</p>
            </div>
            <FindOutMore />
          </div>
         

            <div className="row mb-4"> 
              <div className="col-lg-6 mt-4">
              <h4 className="mb-4 pt-4"><strong>What can be disposed of in General Waste Bins?</strong></h4>
              
              <h5>Plastics</h5>
              <p className=" mb-3 pb-1">
              Plastics can be put into your general waste disposal bins or for plastics that can be recycled use our <Link href="/services/dry_mixed_recycling" ><a className="highlight-link">dry mixed recycling service</a></Link>.</p>
              <h5>Metals</h5>
              <h5>Ceramics</h5>
              <h5>Glass</h5>
              <p className=" mb-3 pb-1">
              Any type of <Link href="/services/glass" ><a className="highlight-link">glass</a></Link> can be disposed of in general waste bins as part of your normal rubbish collection, however we recommend you have a separate <Link href="/services/glass" ><a className="highlight-link">glass recycling</a></Link> bin.</p>
              <h5>Packaging Materials</h5>
              <p className="mb-3 pb-1">
              All packaging can be disposed of in general waste bins, <Link href="/services/polystyrene_collection" ><a className="highlight-link">polystyrene</a></Link> can also be disposed of as part of your general commercial waste but we recommend you <Link href="/services/polystyrene_collection" ><a className="highlight-link">recycle your polystyrene</a></Link>, as it highly poluting and there is an increasing amount found in the Pacific and our waterways.
              </p>

              <h4 className="mb-4 pt-4"><strong>What should not be disposed of in General Waste Bins?</strong></h4>
              <p className="lead mb-3 pb-1">We advise businesses on their commercial waste collection and general waste disposal. The following items we would <b>not recommend</b> disposing of in general waste bins:</p>
              <h5>Recyclable Materials:</h5>
              <ul>
                <li><Link href="/services/cardboard_and_paper" ><a className="highlight-link">Cardboard and paper</a></Link></li>
                <li><Link href="/services/glass" ><a className="highlight-link">Glass</a></Link></li>
                <li><Link href="/services/dry_mixed_recycling" ><a className="highlight-link">Plastics</a></Link></li>
                <li><Link href="/services/polystyrene_collection" ><a className="highlight-link">Polystyrene</a></Link></li>
              </ul>
              <h5>Hazardous Materials:</h5>
              <ul>
                <li>Chemicals</li>
                <li>Gas canisters</li>
                <li>Medical waste (leftover medications etc)</li>
                <li>Batteries</li>
                <li>Paint</li>
              </ul>
              <h5><Link href="/services/waste_electrical_and_electronic_equipment" ><a className="highlight-link">Electrical Items – WEEE waste</a></Link></h5>
              <h5>Hot Ash</h5>
              <h5>Construction Materials</h5>
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
                <img
                  src="/images/general waste poster.jpg"
                  className="img-fluid"
                  alt="general waste information poster"
                />
              </div>
            </div>
         
            <div className='horizontal-center-singleitem container pb-5'>
              <div><p className="lead mb-4 pb-1">
              For more details about what can and cannot go into your general waste container see the poster on this page and please don't hesistate to get in touch:, call us on <a href="tel:+441202257530" className="highlight-link"> <i className="fas fa-phone ps-2" /> 01202 257 530</a>. If out of office hours leave a message and we will get right back to you.
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



    </section>
     
    </>
  );
};

export default municipalWaste;
