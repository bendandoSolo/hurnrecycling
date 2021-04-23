import Header from "../components/Header";

const contact = () => {
  return (
    <>
      <Header text="Contact Us" smallText="Total waste management solutions" />
      <div className="container mt-5 py-5 pb-2">
        <h2 className="mb-5 text-center">CONTACT</h2>
        <div className="row">
          <div className="col-md-6 p-4">
            <p className="lead">
              We look forward to hearing from you by phone or email; or
              alternatively you can complete our Enquiry Form by filling in the
              form displayed below.
            </p>
            <img src="/images/map.jpg" id="map" />
            <div className="lead contact">
              <ul className="list-unstyled my-4">
                <li>Hurn Recycling Ltd</li>
                <li>The Salterns, 2 Sandy Close</li>
                <li>Poole</li>
                <li>Dorset</li>
                <hr />
                <li>
                  <a href="#!">
                    01202 257 530 <i className="fas fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    info@hurnrecycling.com <i className="fas fa-envelope"></i>
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
