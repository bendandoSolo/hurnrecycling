import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

const dryMixed = () => {
  return (
    <>
      <Header text="Dry Mixed Recycling or DMR" smallText="" background="Dry_mixed_recycling.jpg"/>
      <section>
        <div className="container mt-5 py-5" >
          <h2 className="mb-5 text-center">Dry Mixed Recycling or DMR</h2>
          <div className="row mb-4" /*style={{display: 'flex', flexDirection: "row-reverse" }}*/ >
           
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                We offer a wide range of recycling services, including DMR services, which are suitable for businesses where there is no option for further segregation. 
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
              With our DMR services you can still reduce your impact on the environment in a cost-effective way. We can accept clean and dry recyclables including plastic bottles, pots, tubs, trays, cardboard, paper and metal drink cans in our DMR bins.
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
              </Link>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
              <img
                src="/images/DMR poster.jpg"
                className="img-fluid"
                alt="DMR poster"
              />
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default dryMixed;
