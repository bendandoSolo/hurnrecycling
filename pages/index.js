import Head from "next/head";
import Services from "../components/Services";
import About from "../components/About";
import Clients from "../components/Clients";
import Header, {HomeHeader} from "../components/Header";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hurn Recycling | Recycling and Waste Management Bournemouth</title>
        <meta name="description" content="Recycling and Waste Management Services: General Waste Collection and Disposal, Food Recycling, Glass Recycling, Paper and Dry Mixed Recycling. Bournemouth, Poole, Dorset and the South West UK."></meta>
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
        {/* <Header text="About" smallText="" background="About_Hurn_Recycling.jpg" /> */}
        <About />
        {/* <About /> */}
        <Clients />
      </main>
    </div>
  );
}
