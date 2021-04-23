import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// Components
import Services from "../components/Services";
import About from "../components/About";
import Clients from "../components/Clients";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        text="Total Waste Management Solutions"
        smallText="Helping local businesses since 1995"
        button
      />
      <main>
        <Services />
        <About />
        <Clients />
      </main>
    </div>
  );
}
