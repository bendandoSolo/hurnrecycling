import Header from "../components/Header";

const contact = () => {
  return (
    <>
      <Header text="Contact" smallText="" background="Contact_us.jpeg"/>
      <div className="container mt-5 py-5 pb-2">
        {/* <h2 className="mb-5 text-center">CONTACT</h2> */}
        <div className="row">
          <div className="col-md-6 p-4">
            <p className="lead pb-4">
              We look forward to hearing from you by phone or email.
              Alternatively you can complete our enquiry form and we will get right back to you.
            </p>
            <img src="/images/map.jpg" id="map" />
            <div className="lead contact">
              <ul className="list-unstyled my-4 pt-2">
                <li><b>Hurn Recycling Ltd</b></li>
                <li>Unit 10-11</li>
                <li>Stepnell Reach</li>
                <li>541 Blandford Road</li>
                <li>Poole</li>
                <li>Dorset</li>
                <li>BH16 5BW</li>
                <hr />
                <li>
                  <a href="#!">
                    01202 257 530 (option 2 sales)<i className="fas fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    01202 257 530 (option 4 general enquiries)<i className="fas fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    sales@hurnrecycling.com <i className="fas fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    Follow us on Facebook
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 p-3 mb-5">
            <form className="p-4">
              <label className="mb-2">Name:</label>
              <input type="text" name="name" className="mb-4 p-2" />
              <label className="mb-2">Email:</label>
              <input type="text" name="name" className="mb-4 p-2" />
              <label className="mb-2">Number:</label>
              <input type="text" name="name" className="mb-4 p-2" />
              <label className="mb-3">Message:</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="mb-4 p-2"
              ></textarea>
              <button className="btn btn-lg btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
