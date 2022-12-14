import Head from "next/head";
import Navbar from "../components/navbar";
import Script from "next/script";
import styles from "../styles/home.module.css";
import Content from "../components/Content";
import Carosel from "../components/Carosel";
import CenterMode from "../components/Carosel";
import Footer from "../components/Footer";

export default function Home() {
  return (
   
    <div className={styles.Container}>
      <Head>
        <title>revohloo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        ></link>

      </Head>
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
      <div className={styles.nav}>
        <Navbar />
        <Content />
      </div>

      <div className={styles.foter}>
        <Footer />
      </div>
    </div>

  );
}
