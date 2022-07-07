import React, { useEffect } from "react";

import ServiceCard,  {FlexboxServiceCard, PrimaryLargeServiceCard} from "./ServiceCard";

const Services = () => {
  useEffect(() => {
    normalizeCardsHeightByRows();
    function handleResize() {normalizeCardsHeightByRows();    }
    window.addEventListener('resize', handleResize)
    return _ => {window.removeEventListener('resize', handleResize)}
  }, []);

  const normalizeCardsHeightByRows = () =>
  {
    let largestBoxHeight = 0;
    let serviceBoxNodeList = document.querySelectorAll(".card-body-text");
    let serviceBoxArray = Array.from(serviceBoxNodeList);
        serviceBoxNodeList.forEach(function (value) {
          value.style.height = "auto";
        });
    if (window.innerWidth < 576){}//mobile view do nothing
    else if (window.innerWidth <= 1200 && window.innerWidth >= 576)
    {
      let topRow = serviceBoxArray.slice(0,2);
      topRow.forEach(function (element) {
       largestBoxHeight = Math.max(largestBoxHeight, element.offsetHeight);
     });
     topRow.forEach(function (value) {value.style.height = largestBoxHeight + "px";});
     largestBoxHeight = 0; 
     let secondRow = serviceBoxArray.slice(3);
     secondRow.forEach(function (element) {
       largestBoxHeight = Math.max(largestBoxHeight, element.offsetHeight);
     });
     secondRow.forEach(function (value) {value.style.height = largestBoxHeight + "px";});
    }
    else if (window.innerWidth > 1200)
    {
        let topRow = serviceBoxArray.slice(0,5);
         topRow.forEach(function (element) {
          largestBoxHeight = Math.max(largestBoxHeight, element.offsetHeight);
        });
        topRow.forEach(function (value) {value.style.height = largestBoxHeight + "px";});
        largestBoxHeight = 0; 
        let secondRow = serviceBoxArray.slice(6);
        secondRow.forEach(function (element) {
          largestBoxHeight = Math.max(largestBoxHeight, element.offsetHeight);
        });
        secondRow.forEach(function (value) {value.style.height = largestBoxHeight + "px";});
    }
  }

  return (
    <section className="text-center">
      <div className="mt-5 py-5 pb-2">
        {/* <h2 className="">WHEELIE BIN SERVICES</h2> */}
        <h2 className="">RECYCLING AND WASTE BIN COLLECTION SERVICES</h2>
        <div style={{maxWidth: '1500px', display: 'block', margin: '0 auto', marginBottom: '60px' }}>
        <div className="main-services-flex-container pb-4"  >
          <FlexboxServiceCard
            title={"General Waste"}
            text={"Wheelie Bin Collections? AWAITING TEXT"}
            imageURL={"/images/service_cards/General_waste.jpg"}
            url='general_waste'
            />
          <FlexboxServiceCard
            title={"Dry Mixed Recycling"}
            text={" AWAITING TEXT"}
            imageURL={"/images/service_cards/Dry_mixed_recycling.jpg"}
            url='dry_mixed_recycling'
          />
          <div className="cards-mid-break"></div>
          <FlexboxServiceCard
            title={"Cardboard & Paper Recycling"}
            text={
              "Recycle all of your cardboard and paper with easy and cost effective recycling solutions for your business."
            }
            imageURL={"/images/service_cards/Cardboard_and_paper_recycling.jpg"}
            url='cardboard_and_paper'
          />
          <FlexboxServiceCard
            title={"Glass Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/service_cards/Glass_recycling.jpg"}
            url='glass'
          />
          <FlexboxServiceCard
            title={"Food Waste"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/service_cards/Food_recycling.jpg"}
            url='food_waste'
          /> 
        </div>
        <h2 className="mb-5 mt-5 pt-5">SPECIALIST RECYCLING SERVICES</h2>
        <div className="row justify-content-center no-padding" >
            <ServiceCard
              title={"Polystyrene collection"}
              text={
                "AWAITING TEXT"
              }
              imageURL={"/images/service_cards/Polystyrene_collection.jpg"}
              url='polystyrene_collection'
            />
            <ServiceCard
              title={"Man & van clearance"}
              text={
                "AWAITING TEXT"
              }
              imageURL={"/images/service_cards/Man_and_van_clearance.jpg"}
              url='man_and_van_clearance'
            />
            <ServiceCard
              title={"WEEE Waste Collection"}
              text={
                "AWAITING TEXT"
              }
              imageURL={"/images/service_cards/WEE_waste_collection.jpg"}
              url='waste_electrical_and_electronic_equipment'
            />    
            <ServiceCard
              title={"Office Clearance"}
              text={
                "AWAITING TEXT"
              }
              imageURL={"/images/service_cards/Office_clearance.jpg"}
              url='office_clearance'
            />
            <ServiceCard
              title={"Confidential waste collection"}
              text={
                "Our Confidential Waste Disposal guarantees protection of sensitive company materials and a defence from fraud."
              }
              imageURL={"/images/service_cards/Confidential_waste.jpg"}
              url='confidential_waste'
            />
            <ServiceCard
              title={"Event Waste Management"}
              text={
                "AWAITING TEXT"
              }
              imageURL={"/images/service_cards/Event_waste_management.jpg"}
              url='event_waste_management'
            />    
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;


        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '20px'}}>
          <FlexboxServiceCard
            title={"Municipal (General) Waste"}
            text={"Wheelie Bin Collections? AWAITING TEXT"}
            imageURL={"/images/service_cards/General waste.jpg"}
            url="/municipal-waste"
            />
          <FlexboxServiceCard
            title={"Dry Mixed Recycling"}
            text={" AWAITING TEXT"}
            imageURL={"/images/service_cards/Dry mixed recycling.jpg"}
            url="/dry_mixed_recycling"
          />
          <FlexboxServiceCard
            title={"Cardboard & Paper Recycling"}
            text={
              "Recycle all of your cardboard and paper with easy and cost effective recycling solutions for your business."
            }
            imageURL={"/images/service_cards/Cardboard and paper recycling.jpg"}
            url="/cardboard_and_paper"
          />
          <FlexboxServiceCard
            title={"Glass Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/service_cards/Glass recycling.jpg"}
            url="/glass"
          />
          <FlexboxServiceCard
            title={"Food Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/service_cards/Food recycling.jpg"}
            url="/food"
          /> 
          </div> */}

          {/* <div className="row justify-content-center">
          <PrimaryLargeServiceCard
            title={"Municipal (General) Waste"}
            text={"Wheelie Bin Collections? AWAITING TEXT"}
            imageURL={"/images/services/general-waste.jpg"}
            url="/municipal-waste"
            />
          <PrimaryLargeServiceCard
            title={"Dry Mixed Recycling"}
            text={" AWAITING TEXT"}
            imageURL={"/images/services/office-recycle-2.jpg"}
            url="/dry_mixed_recycling"
          />
         </div>

         <div className="row justify-content-center primary-services-row2">
         <ServiceCard
            title={"Cardboard & Paper Recycling"}
            text={
              "Recycle all of your cardboard and paper with easy and cost effective recycling solutions for your business."
            }
            imageURL={"/images/services/cardboard.jpg"}
            url="/cardboard_and_paper"
          />
          <ServiceCard
            title={"Glass Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/services/glass.jpg"}
            url="/glass"
          />
          <ServiceCard
            title={"Food Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/services/glass.jpg"}
            url="/food"
          />
         </div> */}



{/*
        <div className="row justify-content-center">
          <ServiceCard
            title={"Municipal (General) Waste"}
            text={"Wheelie Bin Collections? AWAITING TEXT"}
            imageURL={"/images/services/general-waste.jpg"}
            url="/municipal-waste"
            />
          <ServiceCard
            title={"Dry Mixed Recycling"}
            text={" AWAITING TEXT"}
            imageURL={"/images/services/office-recycle-2.jpg"}
            url="/dry_mixed_recycling"
          />
          <ServiceCard
            title={"Cardboard & Paper Recycling"}
            text={
              "Recycle all of your cardboard and paper with easy and cost effective recycling solutions for your business."
            }
            imageURL={"/images/services/cardboard.jpg"}
            url="/cardboard_and_paper"
          />
          <ServiceCard
            title={"Glass Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/services/glass.jpg"}
            url="/glass"
          />
          <ServiceCard
            title={"Food Recycling"}
            text={
              "Recycle all your glass with easy and cost effective recycling solutions for your business"
            }
            imageURL={"/images/services/glass.jpg"}
            url="/food"
          />
          </div>*/}    