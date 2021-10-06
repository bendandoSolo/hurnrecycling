import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

const municipalWaste = () => {
  return (
      <> 
<Header text="General/Municipal Waste" smallText="" background="/images/Desktop/General_waste.jpg"/>
    <section>
      <div className="container mt-5 py-5">
      
        <div className="row mb-4">  <h2 className="mb-5 text-center">General/Municipal Waste</h2>
          <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
            <img
              src="/images/general waste poster.jpg"
              className="img-fluid"
              alt="general waste poster"
            />
          </div>
          <div className="col-lg-6 mt-5">
            <h4 className="mb-4">
              <strong>
                Try as we might, not everything can be recycled.
                For waste which cannot be recycled we offer our general waste collection services.
              </strong>
            </h4>
            <p className="lead mb-4 pb-1">
            Catering for any size business is what we do best and we have a range of bin sizes – 240, 360, 660 and 1100 litre containers are all available for you to fill and us to remove or if your business has not room for a bin, that’s not a problem, we can offer pre-paid bags service to collect your bagged general waste.
            </p>
            <p className="lead mb-4 pb-1">
            Please note that the following items are not considered general waste: construction materials, wood, hazardous waste . For more details about what can and cannot go into your general waste container please see the poster below. Please get in touch for more information. 
                        </p>
            <p className="lead mb-4 pb-1">
              To find out more, call free on 01202 257 530 or request a
              Callback.
            </p>
            <Link href="/contact">
              <button
                className="btn btn-lg btn-success text-center mb-4"
                id="green-btn"
              >
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
