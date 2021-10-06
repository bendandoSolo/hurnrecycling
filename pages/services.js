import Header from "../components/Header";
import Services from "../components/Services";

const services = () => {
  return (
    <>
      <Header text="Services" smallText="" background="/images/Desktop/Services.jpg"/>
      <div className="container text-center mt-5 py-5 pb-2">
        <h2 className="mb-5">SERVICES</h2>
        <p className=" lead mx-auto w-responsive">
          Hurn Recycling knows that every business is unique. A holiday park
          needing a weekly glass and general waste collection isn’t going to
          need to dispose of electrical equipment to the WEEE Legislation
          requirements every week as well. However they may need that service
          when they refurbish the kitchen or leisure facilities. A school
          produces masses of waste paper on a weekly basis, but will only need
          their fluorescent bulbs taken and degassed once every term.
        </p>
        <h3 className="my-5">
          Total Waste Management Solutions throughout England and the UK
        </h3>
        <p className=" lead mx-auto w-responsive">
          The vast range of services we offer means that all your recycling
          needs and requirements can be handled by us. We keep things simple and
          reduce your costs, with ongoing contracts and pay as you go options.
        </p>
        <p className=" lead mx-auto w-responsive">
          We specialise in catering to your specific needs and our free
          recycling and security audit will make sure the service we provide
          will be exactly what your business needs.
        </p>
        <p className=" lead mx-auto w-responsive">
          At Hurn Recycling we actively recycle{" "}
          <strong>
            paper, confidential waste, cardboard, plastic, glass, IT equipment,
            electrical items, light bulbs, furniture, etc.
          </strong>
        </p>
      </div>
      <Services />
    </>
  );
};

export default services;
