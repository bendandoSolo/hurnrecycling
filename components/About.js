import React from "react";

const About = () => {
  return (
    <section>
      <div className="container my-5 p-5 mt-0 shadow-5">
        <h2 className="text-center mb-5">ABOUT</h2>
        <div className="row flex-row-reverse mb-4">
          <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
            <img
              src="/images/lorry-hurn.jpg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-lg-6">
            <h4 className="mb-4">
              <strong>
                Recycling & Waste Management throughout England and the UK
              </strong>
            </h4>
            <p className="lead mb-4 pb-1">
              Welcome to Hurn Recycling, Dorset largest independent waste
              management company. Established in 1995, we help businesses reduce
              waste going to landfills. We specialise in catering for your
              specific needs and our free recycling and security audit will
              ensure the service we provide will be exactly what your business
              needs.
            </p>
            <p className="lead mb-4 pb-1">
              In today’s environmentally conscious world, customers are actively
              seeking out businesses that recycle and take responsibility for
              their waste; whether it’s paper, cardboard, light bulbs, plastic
              cups and bottles, or even sensitive materials like confidential
              paperwork, data cd’s or any computer storage media. Your customer
              wants to know that you have made sure what can be recycled will be
              recycled, and this is where we come in.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
            <img
              src="/images/card.png"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-lg-6">
            <p className="lead mb-4 pb-1">
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
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
