import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container my-5 p-5 mt-2 /*shadow-5*/">

        {/* <h2 className="text-center pb-5">ABOUT</h2> */}
        <div className="row flex-row mb-4 mt-5">
        <h4 className="mb-4 text-center" ><strong>Hurn Recycling and Waste Management</strong></h4>
            <div style={{ paddingBottom: '40px'}}>
                <p className="lead mb-4 pb-1">
                If you're looking for reliable and professional recycling services, you can trust in the team at Hurn Recycling. We offer a wide range of recycling and waste management services to businesses and households throughout the UK, so whatever your recycling needs, we can help.
                </p>
                <p className="lead mb-4 pb-1">
                We understand that recycling and waste management can be confusing and overwhelming, so our team are on hand to provide advice and support every step of the way. We offer a range of recycling services, from paper and cardboard recycling to metal and electronic recycling, whatever you need, we can help.
                Give us a call today so we can discuss how we can help you manage your waste most effectively.
                </p>

                <div className="nav-item call-now-navbar-button horizontal-center-singleitem">
                <a href="tel:+441202257530">
                  <button type="button" className="btn btn-success btn-lg">
                    CALL 01202 257 530 <i className="fas fa-phone ps-2"></i>
                  </button>
                </a>
              </div>


                {/* <p className="lead mb-4 pb-1">
                We also provide a free collection service for large quantities of recyclable materials, so if you have a lot of recycling to dispose of, we can help. All you need to do is call us and we'll arrange to collect your recyclables free of charge.
                </p> */}
                {/* <p className="lead mb-4 pb-1">
                If you're looking for a reliable and professional recycling company, call us today. We offer a wide range of recycling services to businesses and households throughout the UK, so whatever your recycling needs, we can help.
                </p> */}
            </div>
          
          
          <div className="col-lg-6">
            <h4 className="mb-4"><strong>Recycling & Waste Management throughout England and the UK</strong>
            </h4>
            <p className="lead mb-4 pb-1">
            Hurn Recycling was established in 1998 by the now owner Mr Peri Cascarino. Peri’s background in the waste paper recycling sector began with Sevenside (now St Regis) Waste Paper. He started working within the Company at the Company’s Hurn site in Christchurch. He rapidly rose through the ranks and ultimately took the role of general manger, obtained his O-licence in 5 years.
            </p>
            <p className="lead mb-4 pb-1">
            Unfortunately due to a national decline in recycled material markets the site at Hurn was closed however Peri took over the site and founded Hurn Recycling Ltd.
            </p>
            <p className="lead mb-4 pb-1">
            We are proud to say that we are now the largest independent waste company in the County of Dorset, and offer our waste collection services and brokerage in the four surrounding Counties.
            </p>
            <p className="lead mb-4 pb-1">
            This success is due to our effective motivated team inspired by Peri, and our keen interest in the use of the latest technologies to deliver a level of service that is second to none.  
            </p>
          </div>
          <div className="col-lg-6 mb-4 px-3 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
            <img src="/images/lorry-hurn.jpg" className="img-fluid"alt="Hurn Recycling Lorry"/>
          </div>
        </div>

        <div style={{textAlign: 'center', paddingTop: '40px'}}>
        <h4 className="mb-4" ><strong>Our Vision and the Environment</strong>
            </h4>
            <p className="lead mb-4 pb-1">
            We are committed to continuing to providing Dorset and the surrounding counties with the highest level of waste collection services for businesses. We are passionate about the beautiful county of Dorset and our proud to be working towards creating a cleaner greener Dorset for posterity.
             {/* our children and children’s children. */}
             We work hard to recycle as much as possible to minimize any waste needing to be sent to landfill to help protect the environment. 
            </p>
        </div>

        {/* <div className="row flex-row mb-4 mt-5">
          <div className="col-lg-6 mb-4 px-3 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
            <img src="/images/lorry-hurn.jpg" className="img-fluid"alt="Hurn Recycling Lorry"/>
          </div>
          <div className="col-lg-6">
            <h4 className="mb-4"><strong>Our Vision and the Environment</strong>
            </h4>
            <p className="lead mb-4 pb-1">
            We are committed to continuing to providing Dorset and the surrounding counties with the highest level of waste collection services for businesses. We are passionate about the beautiful county of  Dorset and our proud to be working towards creating a cleaner greener Dorset , for our children and children’s children.
            </p>
            
          </div>
        </div> */}


          {/* <div className="row flex-row mb-4 mt-5">
          </div>

            <h4 className="mb-4">
              <strong>
              Our Vision and the Environment
              </strong>
            </h4>

            <p className="lead mb-4 pb-1">
            We are committed to continuing to providing Dorset and the surrounding counties with the highest level of waste collection services for businesses. We are passionate about the beautiful county of  Dorset and our proud to be working towards creating a cleaner greener Dorset , for our children and children’s children.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 px-3 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
            <img
              src="/images/card.png"
              className="img-fluid"
              alt="cardboard"
            />
          </div>
          <div className="col-lg-6">
            
          </div>
        </div> */}

       


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