import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import "../styles/mdb.min.css";
//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "../styles/site.scss";

import "../styles/feedback-styles.scss";
import Head from "next/head";
import Navbar3 from "../components/Navbar3";
//import Navbar4 from "../components/Navbar4";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {

  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    //unimplement analytics boilerplate code
    nextRouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      nextRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [nextRouter.events]);


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />
        {/* <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
      ></script> */}
        
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> */}
        <script type="text/javascript" src="/mdb.min.js"></script>
      
      </Head>
      <Navbar3 />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
