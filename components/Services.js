import React , {useEffect} from "react";

import ServicesCard from "./ServicesCard";

const Services = () => {
  useEffect(() => {
    let serviceBoxArr = document.querySelectorAll(".card-body-text")
    let largestBoxHeight = 0;
    serviceBoxArr.forEach(function (element) {
      largestBoxHeight = Math.max(largestBoxHeight, element.offsetHeight);
    });
    serviceBoxArr.forEach(function (value) {
      value.style.height = largestBoxHeight +'px';
    });
  }, []);

  return (
    <section className="text-center">
      <div className="mt-5 py-5 pb-2">
        <h2 className="mb-5">SERVICES</h2>

          <div className="row justify-content-center">
            <ServicesCard
              title={"Municipal Waste"}
              text={"Wheelie Bin Collections AWAITING TEXT"}
              imageURL={"/images/services/electrical.jpg"}
              url="/municipal-waste"
            />
            <ServicesCard
              title={"Dry Mixed Recycling"}
              text={
                " AWAITING TEXT"
              }
              imageURL={"/images/services/office-recycle-2.jpg"}
              url="/dry-mixed"
            />
            <ServicesCard
              title={"Glass"}
              text={
                "Recycle all your glass with easy and cost effective recycling solutions for your business"
              }
              imageURL={"/images/services/general-waste.jpg"}
              url="/general-waste"
            />
            <ServicesCard
              title={"Office Recycling"}
              text={
                "Make your company environmentally friendly and minimise your waste disposal costs - Recycle your paper."
              }
              imageURL={"/images/services/office-recycle-2.jpg"}
              url="/office-paper"
            />
            <ServicesCard
              title={"Plastic Bottles & Cans"}
              text={
                "Our plastic bottles, cans and vending cups service is ideal for any business. Cost effective and green."
              }
              imageURL={"/images/services/plastic-bottles.jpg"}
              url="/bottle-cans"
            />
          </div>
          <div className="row justify-content-center">
            <ServicesCard
              title={"Cardboard & Packaging Recycling"}
              text={
                "Recycle all of your Cardboard & Packaging with easy and cost effective recycling solutions for your business."
              }
              imageURL={"/images/services/cardboard.jpg"}
              url="/card-packaging"
            />
            <ServicesCard
              title={"Confidential Waste Disposal"}
              text={
                "Our Confidential Waste Disposal guarantees protection of sensitive company materials and a defence from fraud."
              }
              imageURL={"/images/services/confidential-waste.jpg"}
              url="/confidential-waste"
            />
            <ServicesCard
              title={"Electrical Equipment Disposal"}
              text={
                "Make your company environmentally friendly and minimise your waste disposal costs - Recycle your paper."
              }
              imageURL={"/images/services/glass.jpg"}
              url="/electrical"
            />
            <ServicesCard
              title={"Office Furniture"}
              text={
                "Whether it’s a complete office refurbishment or the collection of a single broken chair Hurn Recycling can help."
              }
              imageURL={"/images/services/furniture-removal.jpg"}
              url="/office-furniture"
            />
            <ServicesCard
              title={"General Waste Disposal"}
              text={
                "We can remove all the waste your business can produce, including general rubbish, polystyrene packaging and food waste."
              }
              imageURL={"/images/services/office-recycle-2.jpg"}
              url="/general-waste"
            />
          </div>
        </div>

    </section>
  );
};

export default Services;
