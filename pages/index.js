import Head from "next/head";
import Services from "../components/Services";
import About from "../components/About";
import Clients from "../components/Clients";
import Header, {HomeHeader} from "../components/Header";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hurn Recycling - Recycling &amp; Waste Management Services</title>
        <meta name="description" content="Specialising in Recycling &amp; Waste Management Services throughout Bournemouth, Poole, Dorset and the South West"></meta>
        <meta name="keywords" content="Office Paper Recycling, Waste Management, Confidential Waste Disposal, Glass Recycling, Cardboard Recycling, Plastic Recycling, Electrical Equipment Recycling, Waste Disposal, Office Furniture Disposal"></meta>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HomeHeader
        full
        background="Hurn_Recycling_Lorry.jpg"
        text="Waste Management &amp; Recycling"
        smallText="Helping businesses reduce landfill"
        button
      />
      <main>
        <Services title />
        {/* <About /> */}
        <Clients />
      </main>
    </div>
  );
}
