import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";

const about = () => {
  return (
    <>
      <Head>
      <title>About Us - Hurn Recycling</title>
      <meta name="description" content="Everything you need to know about Waste Disposal Services offered by Hurn Recycling " />
      <meta name="keywords" content="Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal" />
      </Head>
      <Header text="About" smallText="" background="About.jpg" />
      <About />
      </>
  );
};

export default about;
