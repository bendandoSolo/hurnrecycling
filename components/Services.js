import React from "react";
import Link from "next/link";

import ServicesCard from "./ServicesCard";

const Services = ({ title }) => {
  return (
    <section className="text-center">
      <div className=" mt-5 py-5 pb-2">
        {!!title && <h2 className="mb-5">SERVICES</h2>}
        <div className="row">
          <div className="col-1" />
          <ServicesCard title={"Office Recycling"} 
          text={"Make your company environmentally friendly and minimise your waste disposal costs - Recycle your paper."} 
          imageURL={"/images/services/office-recycle-2.jpg"}
          />
          <ServicesCard title={"Plastic Bottles & Cans"} 
          text={"Our plastic bottles, cans and vending cups service is ideal for any business. Cost effective and green."} 
          imageURL={"/images/services/plastic-bottles.jpg"}
          />
          <ServicesCard title={"Cardboard & Packaging Recycling"} 
          text={"Recycle all of your Cardboard & Packaging with easy and cost effective recycling solutions for your business."} 
          imageURL={"/images/services/cardboard.jpg"}
          />
          <ServicesCard title={"Confidential Waste"} 
          text={"Our Confidential Waste Disposal guarantees protection of sensitive company materials and a defence from fraud."} 
          imageURL={"/images/services/confidential-waste.jpg"}
          />
          <ServicesCard title={"Electrical Equipment Disposal"} 
          text={"Make your company environmentally friendly and minimise your waste disposal costs - recycle your paper."} 
          imageURL={"/images/services/electrical.jpg"}
          />
          <div className="col-1"/>
          <div className="col-1"/>
          <ServicesCard title={"Glass"} 
          text={"Recycle all your glass with easy and cost effective recycling solutions for your business."} 
          imageURL={"/images/services/glass.jpg"}
          />
          <ServicesCard title={"General Waste Disposal"} 
          text={" We can remove all the waste from your business, including general rubbish, polystyrene packaging and food waste."} 
          imageURL={"/images/services/general-waste.jpg"}
          />
           <ServicesCard title={"Cardboard & Packaging Recycling"} 
          text={"Recycle all of your Cardboard & Packaging with easy and cost effective recycling solutions for your business."} 
          imageURL={"/images/services/office-recycle-2.jpg"}
          />
             <ServicesCard title={"Cardboard & Packaging Recycling"} 
          text={"Recycle all of your Cardboard & Packaging with easy and cost effective recycling solutions for your business."} 
          imageURL={"/images/services/office-recycle-2.jpg"}
          />
          <ServicesCard title={"Cardboard & Packaging Recycling"} 
          text={"Recycle all of your Cardboard & Packaging with easy and cost effective recycling solutions for your business."} 
          imageURL={"/images/services/office-recycle-2.jpg"}
          />
          <div className="col-1"/>

        </div>
      </div>

    </section>
  );
};

export default Services;
