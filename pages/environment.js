import Header from "../components/Header";

const environment = () => {
  return (
    <>
      <Header
        text="The Environment"
        smallText="Recycling doesn’t have to cost the Earth..."
        background="/images/Desktop/Environment.jpg"
      />
      <section className="text-center">
        <div className="container my-5 p-5">
          <h2 className="mb-5">THE ENVIRONMENT</h2>
          <p className=" lead mb-5 mx-auto w-responsive">
            The South West thrives on its natural beauty and picturesque charm,
            tens of thousands of people flock here for their summer holidays and
            weekend breaks every year, generating cash for local businesses.
            Protecting and maintaining, not just our livelihood but our home,
            should be on the agenda for every individual and business that is
            lucky enough to live here.
          </p>
          <p className=" lead mb-5 mx-auto w-responsive">
            At Hurn Recycling we are passionate about our local surroundings and
            want to help you keep as much waste away from our ever expanding
            landfills as possible. In addition to benefiting from our ten years
            experience, tailor made services and unbeatable prices, there are
            many ways in which your business can help protect the environment
            and reduce the regions waste.
          </p>
          <p className=" lead mb-5 mx-auto w-responsive">
            Reusing and Reducing waste from your business can be as simple as
            using both sides of a piece of paper or creating notepads out of
            waste paper. Simple steps can see your profitability rise and the
            cost of waste removal fall.
          </p>
        </div>
      </section>
      <Header background="/images/Desktop/Home.jpg" />
      <section className="text-center">
        <div className="container my-5 p-5">
          <h2 className="mb-5">EC LANDFILL DIRECTIVE</h2>
          <p className=" lead mb-5 mx-auto w-responsive">
            But it’s not only a desire to protect the local area which effects
            your business, government legislation and customer awareness also
            play a part in the decisions you need to make. The government
            introduced the EC Landfill Directive in 1999 designed to increase
            waste recycling and recovery, and reduce potentially polluting
            emissions from landfill areas. The directive has been on going with
            a completion date of July 2009. In 2007, as part of the directive,
            England and Wales saw the complete ban of untreated wastes and
            liquid wastes going to landfills.
          </p>
          <p className=" lead mb-5 mx-auto w-responsive">
            On top of the red tape customers are now using a business recycling
            and waste policy as a factor in their decision whether or not to do
            business with you - as a result of this a sound environmental policy
            is now a major marketing tool for a wide range of the country’s
            largest companies. Your business can benefit from Hurn Recycling’s
            expertise whatever size or type of industry you are in. Whether it’s
            our prepaid bag system or weekly or monthly collections we provide
            all the recycling services you need to do your part for both the
            local and global environment.
          </p>
        </div>
      </section>
    </>
  );
};

export default environment;
