import Head from "next/head";

// Components
import Services from "../components/Services";
import About from "../components/About";
import Clients from "../components/Clients";
import Header, {HomeHeader} from "../components/Header";

//we are restyling this here

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hurn Recycling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader
        full
        background="Home.jpg"
        text="Total Waste Management Solutions"
        smallText="Helping local businesses since 1995"
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
