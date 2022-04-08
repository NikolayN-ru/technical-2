import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import BreadCamps from "@/src/components/breadCamps";
import Header from "@/src/header";
import type { AppProps } from "next/app";

const breadCamps = ['главная страница', 'категории', 'телефоны и аксесуары', 'смартфоны']

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <BreadCamps {...breadCamps}/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
