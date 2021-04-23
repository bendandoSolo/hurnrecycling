import "../styles/mdb.min.css";
//import '../styles/globals.css';
import "../styles/site.scss";
////import '../public/mdb.min.js'; //cannot import?

import Head from "next/head";

import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import NavbarAnimated from "../components/NavbarAnimated";
import NavbarAnimated2 from "../components/NavbarAnimated2";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />
        {/* <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
      ></script> */}

        <script type="text/javascript" src="mdb.min.js"></script>
      </Head>

      <Navbar2 />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
