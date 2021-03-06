import Head from "next/head";
import Header from "../components/Header";
import GoogleMapsSection from "../components/GoogleMapsSection";
import AreasWeCover from "../components/widgets/AreasWeCover";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const contact = () => {

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone:  Yup.string(),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (props,actions) => {
    const contactFormBtn = document.getElementById("contact-form-btn");
    contactFormBtn.classList.add("disable-click");
    sending();
    props["to"] = "sales@hurnrecycling.com";
    props["website"] = "www.hurnrecycling.com";
    const response = await fetch(
      "https://sendgridcsharp.azurewebsites.net/api/sendemail",
      {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(props),
      }
    );
    try {
      let bodyresponse = await response.json();
      console.log(JSON.stringify(bodyresponse));
      console.log(response.status);
      if (
        response.status === 200 &&
        bodyresponse.message != null &&
        bodyresponse.message == "Email Sent"
      ) {
        responseSuccess();
        actions.resetForm();
      } else {
        responseError();
      }
    } catch (err) {
      responseError();
    }
  };

  function sending() {
    const feedback = document.getElementById("feedback");
    let feedbackText = document.getElementById("feedback-text");
    feedback.classList.add("pop-down");
    feedbackText.classList.add("fade-in");
    setTimeout(function () {
      feedback.classList.remove("pop-down");
      feedbackText.classList.add("fade-out");
      feedback.classList.add("pop-up");
    }, 1500);
    setTimeout(function () {
      feedback.classList.remove("pop-up");
      feedbackText.classList.remove("fade-out", "fade-in");
    }, 2500);
  }

  function responseSuccess() {
    setTimeout(function () {
      const contactFormBtn = document.getElementById("contact-form-btn");
      const response = document.getElementById("response");
      let responseText = document.getElementById("response-text");
      response.classList.add("pop-down", "background-success");
      responseText.classList.add("fade-in");
      responseText.innerHTML = `Message Sent Successfully <i class="fas fa-check ms-2"></i>`;
      contactFormBtn.classList.remove("disable-click");
    }, 2500);
  }

  function responseError() {
    setTimeout(function () {
      const contactFormBtn = document.getElementById("contact-form-btn");
      const response = document.getElementById("response");
      let responseText = document.getElementById("response-text");
      response.classList.add("pop-down", "background-danger");
      responseText.classList.add("fade-in");
      responseText.innerHTML = `Error - Please Try Again <i class="fas fa-undo ms-2"></i>`;
      contactFormBtn.classList.remove("disable-click");
    }, 2500);
  }


  return (
    <>
     <Head>
        <title>Contact | Hurn Recycling and Waste Management Bournemouth</title>
        <meta name="description" content="Contact Hurn Recycling for Recycling and Waste Management Services in Bournemouth, Dorset and the South West. We also recycle throughout the whole of England." />
        <meta name="keywords" content="Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"/>
      </Head>
      <Header text="Contact" smallText="" background="Hurn_Recycling_Contact.jpg"/>
      <div className="container mt-5 py-5 pb-2">

        {/* <h2 className="mb-5 text-center">CONTACT</h2> */}
        <div className="row">
          <div className="col-lg-6 p-4">
          <h2 className="mb-4">CONTACT HURN RECYCLING </h2>
             <p className="lead">Recycling and waste mangement services based in Bournemouth, Dorset. Serving the surrounding counties.</p>
            <p className="lead pb-4">
              We look forward to hearing from you by phone or email.
              Alternatively you can complete our enquiry form and we will get right back to you.
            </p>

            <GoogleMapsSection/>
            {/* <img src="/images/map.jpg" id="map" /> */}
            <div className="lead contact">
              <ul className="list-unstyled my-4 pt-2">
                <li><b>Hurn Recycling Ltd</b></li>
                <li>452 Bournemouth International Airport</li>
                <li>Christchurch</li>
                <li>Dorset</li>
                <li>BH23 6NW</li>
                <hr />
                <li>
                  <a href="tel:+441202257530">
                  <i className="fas fa-phone" /> Sales: 01202 257 530 (option 2)
                  </a>
                </li>
                <li>
                  <a href="tel:+441202257530">
                  <i className="fas fa-phone" /> General Enquiries: 01202 257 530 (option 4)
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@hurnrecycling.com?subject=Enquiry from Hurn Recycling Website">
                    <i className="fas fa-envelope"/> sales@hurnrecycling.com 
                  </a>
                </li>
                {/* <li>
                <a
                  href="https://www.facebook.com/Hurnrecycling"
                  target="_blank"
                  alt="Hurne Recycling Facebook Page"
                >
                  <i className="fab fa-facebook-square" style={{fontSize: '24px !important'}} /> Follow us on Facebook
                </a>
                </li> */}

              </ul>
            </div>
          </div>

          <div className="col-lg-6 p-3 mb-5 mt-4" data-aos="zoom-in" data-aos-delay="250" style={{borderRadius: '5px !important'}}>
          
              {
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={sendEmail}
                >
                  {({ errors, touched }) => (
                    <Form id="contact_form" className="p-4 connect-form pt-0">
                      <h2 className="mb-4 text-center" style={{color: '#ffffff'}}>EMAIL CONTACT FORM</h2>
                      <label className="mb-2">Name:</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="form-input p-2"
                        />
                        {errors.name && touched.name ? (
                          <div className="error-validation">*{errors.name}</div>
                        ) : null}
                      
                      <label className="mb-2 mt-4">Email:</label>
                        <Field
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Your Email"
                          className="form-input p-2"
                        />
                        {errors.email && touched.email ? (
                          <div className="error-validation">
                            *{errors.email}
                          </div>
                        ) : null}
                      
                      <label className="mb-2 mt-4">Phone Number:</label>
                        <Field
                          name="phone"
                          type="phone"
                          id="phone"
                          placeholder="Your Phone Number"
                          className="form-input p-2"
                        />
                        {/*errors.email && touched.email ? (
                          <div className="error-validation">
                            *{errors.email}
                          </div>
                        ) : null*/}

                      <label className="mb-2 mt-4">Message:</label>     
                        <Field
                          type="textarea"
                          as="textarea"
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          cols="30"
                          rows="10"
                          className="form-input p-2"
                        />
                        {errors.message && touched.message ? (
                          <div className="error-validation">
                            *{errors.message}
                          </div>
                        ) : null}
                      
                      <div id="feedback">
                        <p id="feedback-text" style={{color: '#ffffff ! important'}}>Sending...</p>
                      </div>

                     
                      <div id="response">
                        <p id="response-text" style={{color: '#ffffff'}}></p>
                      </div>
                      <div className="text-end">
                        <button className="btn btn-lg btn-success"
                          // className="global-btn btn mt-4 px-5"
                          type="submit"
                          id="contact-form-btn"
                        >
                          Send Message
                          <span className="mt_load">
                            <span></span>
                          </span>
                        </button>
                      </div>
                      <div id="msg"></div>
                    </Form>
                  )}
                </Formik>
              }
              <div className="mb-4 mt-5">
              <AreasWeCover />
                     </div>
             
 
            </div>

         
        </div>
      </div>
    </>
  );
};

export default contact;
