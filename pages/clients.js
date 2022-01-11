import Head from "next/head";
import Header from "../components/Header";
import Clients from "../components/Clients";

const clients = () => {
  return (
    <>
      <Head>
      <title>Clients - Hurn Recycling</title>
      <meta name="description" content="Offering our Clients Specialist Recycling &amp; Waste Management Services throughout Bournemouth, Poole, Dorset and the South West"/>
      <meta name="keywords" content="Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal" />        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header text="Clients" smallText="Total waste management solutions" />
      <Clients />
      <section className="text-center">
        <div className="container my-5 p-5">
          <h2 className="mb-5">ALL CLIENTS</h2>

          <p className=" lead mb-5 mx-auto w-responsive">
            All our existing customers including, large private and public
            sector companies, local and national government and some of the Uk’s
            biggest brand names benefit from Hurn’s friendly and professional
            service.
          </p>
          <p className=" lead mb-5 mx-auto w-responsive">
            We cater to local authorites, service provision companies, retail,
            restaurants and hotels as well as offices, almost all types of
            business can benefit from our tailor made recycling solutions.
          </p>

          <div className="row">
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/sony-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/nhs-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/bcp-council-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/spar-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/spar-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/spar-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/sony-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/nhs-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/bcp-council-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/spar-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/spar-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0 pb-2 order-md-2 order-lg-1">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    src="/images/clients/spar-logo.jpg"
                    className="card-img-top"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default clients;
