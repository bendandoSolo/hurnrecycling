import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const food = () => {
  return (
    <>
      <Header text="Food Recycling" smallText="" background="/images/Desktop/Food_recycling.png"/>
      <section>
        <div className="container mt-5 py-5">
          <h2 className="mb-5 text-center">FOOD</h2>
          <div className="row mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2 mt-5">
              <img
                src="/images/it-disposal.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h4 className="mb-4">
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec diam eu turpis faucibus dictum vitae in ante.
                </strong>
              </h4>
              <p className="lead mb-4 pb-1">
                Curabitur mattis rhoncus dui, sed lacinia nulla feugiat non.
                Nullam ultricies quam iaculis arcu interdum vulputate.
                Pellentesque eu mollis purus. Integer eu tempus nisl. Nam et
                suscipit odio. Maecenas fermentum sem quis dictum semper..
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
          </div>
        </div>
      </section>
    </>
  );
};

export default food;
