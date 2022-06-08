import React from "react";
import AreasWeCover from './AreasWeCover';

const About = () => {
  return (
    <section className="about">
      <div className="container my-5 pt-5 pb-1 mt-2">
      <h2 className="text-center">HURN RECYCLING AND WASTE MANAGMENT</h2>
                <p className="lead mb-4 pb-1">
                Hurn Recycling began as a family run business in Bournemouth, Dorset. Started in 1998 with the help of the <a href='https://www.princes-trust.org.uk/' target='_blank' className="highlight-link">Princess&nbsp;Trust&nbsp;Dorset</a>. From there we have grown rapidly to become the largest independent waste company in the County of Dorset, and offer our waste collection services and brokerage in the four surrounding Counties of Devon, Hampshire, Somerset and Wiltshire.
                </p>
                <div className="nav-item call-now-navbar-button horizontal-center-singleitem ">
                   <a href="tel:+441202257530"><button type="button" className="btn btn-success btn-lg my-5">CALL 01202 257 530 <i className="fas fa-phone ps-2"></i></button></a>
                </div>
        <div className="row flex-row mb-5 mt-5">
          <div className="col-lg-6 mb-4">
            <h4 className="mb-4 text-center"><strong>Over 20 years experience in the recycling business</strong>
            </h4>
            <p className="lead mb-4 pb-1">
            With over 20 years experience in the waste collection and recycling business we continue to provide the highest levels of service for our customers and help to protect the environment. We are always looking for ways to make businesses more sustainable and eco-friendly and to reduce landfill.
            </p>
            <h4 className="mb-4 text-center pt-4"><strong>Superb customer Service</strong>
            </h4>
            <p className="lead mb-4 pb-1">
            We pride ourselves on our high standards of services; we have a dedicated customer service team, who are committed to answer calls within a few rings and to direct your calls to right person for your enquiry. All customer queries are answered in a few hours, so you can focus on running your business and allow us help to make your business more sustainable.
            </p>
                <a className="horizontal-center-singleitem" href='https://uk.trustpilot.com/review/hurnrecycling.com' target='_blank'>
                  <button type="button" className="btn btn-success btn-lg mb-5">Our Trust Pilot Reviews</button>
                </a>
          </div>
          <div className="col-lg-6 mb-4 mt-4 px-3 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
            <img src="/images/lorry-hurn.jpg" className="img-fluid"alt="Hurn Recycling Lorry"/>
          </div>
        </div>
        

        <div className="row flex-row mb-5 mt-5">
          <div className="col-lg-6 mb-4">
            <h4 className="mb-4 text-center"><strong>Recycling that doesn't cost the earth</strong></h4>
            <p className="lead mb-4 pb-1">It’s very important to us ensure businesses can recycle their waste as reliably and cost effectively as possible. We advise on <a href='https://www.gov.uk/government/news/fund-opens-to-reduce-waste-from-plastic-packaging-and-textiles' target='_blank' className="highlight-link"><strong>UK&nbsp;government&nbsp;recycling&nbsp;grants</strong></a> to help reduce your costs.</p>
            <p className="lead mb-4 pb-1">We offer highly competitive rates for all our recycling and waste management services if you find a cheaper quote please get in touch and we will do our very best to it.</p>
        </div>
        <div className="col-lg-6 mb-4">
            <h4 className="mb-4 text-center" ><strong>Recycle with piece of mind</strong></h4>
            <p className="lead mb-4 pb-1">Health and safety is very important to us we do everything we can to keep our drivers and customers safe. We always provide site surveys and risk assessments as part of our service to ensure the safety of all parties.</p>
        </div>
        </div>
      
        <div className="row flex-row mb-5 mt-5">
          <div className="col-lg-6 mb-4">
            <AreasWeCover/>
          </div>
        <div className="col-lg-6 mb-4">
            <h4 className="mb-4 text-center" ><strong>Going above and beyond for the environment</strong></h4>
            <p className="lead mb-4 pb-1">Hurn Recycling Ltd recognizes that it has a responsibility to the environment beyond legal and regulatory requirements.</p>
            <p className="lead mb-4 pb-1">We are committed to reduce our environmental impact and 
                continually improve our environmental performance as an integral part of our business 
                strategy and operating methods, with regular review points. We will encourage customers, suppliers and other stakeholders to do the same. 
            </p>
                <a className="horizontal-center-singleitem" href='/files/Environmental Policy exp 31122022.docx'>
                  <button type="button" className="btn btn-success btn-lg mb-5"><i className="fas fa-download ps-2"></i> Hurn Environmental Policy</button>
                </a>
        </div>
        </div>


      </div>

      

    </section>
  );
};

export default About;

 {/* <div className="text-center">
            <h4 className="mb-4 mt-4">
              <strong>
              Our Vision and the Environment
              </strong>
            </h4>

            <p className="lead mb-4 pb-1">
            We are committed to continuing to providing Dorset and the surrounding counties with the highest level of waste collection services for businesses. We are passionate about the beautiful county of  Dorset and our proud to be working towards creating a cleaner greener Dorset , for our children and children’s children.
            </p>
        </div> */}
        {/* <p className="lead mb-4 pb-1">
              Hurn Recycling began life in 1995, as a collector of office waste
              paper and cardboard from businesses in and around the Dorset area.
              In the last ten years we have become the south west’s premier
              recycling and waste management company, currently offering over
              four hundred independent customers an outstanding weekly recycling
              service.
            </p>
            <p className="lead mb-4 pb-1">
              Anyone within a 50 mile radius from our headquarters in
              Bournemouth, Dorset, incorporating Wessex and Hampshire, can
              benefit from our friendly competitive and secure service that is
              second to none. In the last year alone we collected over 7000
              tonnes of waste paper and cardboard from local businesses in
              Dorset which would otherwise have been destined for the county’s
              ever expanding landfills.
            </p>
            <h4 className="mb-4 text-center ">
              <strong>Total Waste Management Solutions</strong>
            </h4>
            <p className="lead mb-4 pb-1">
              Our total waste management solution means you don’t have to worry
              about a thing, Hurn Recycling will ensure your company has a clean
              environmental conscience. Alternatively, if you have more specific
              needs then you can benefit from any of our excellent services
              ranging from paper and cardboard recycling to confidential waste
              destruction and even the removal of unwanted electrical goods.
            </p> */}