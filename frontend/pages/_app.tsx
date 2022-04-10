import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import BreadCamps from "@/src/components/breadCamps";
import Header from "@/src/header";
import type { AppProps } from "next/app";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReduser from "../redux/reducers";
const middlewares = [thunk]
const store = createStore(createRootReduser(),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// applyMiddleware(...middlewares))
composeWithDevTools(applyMiddleware(...middlewares)))

const breadCamps = ['главная страница', 'категории', 'телефоны и аксесуары', 'смартфоны']

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <div className={styles.layout}>
      <Header />
      <BreadCamps {...breadCamps}/>
      <Component {...pageProps} />
    </div>
    </Provider>
  );
}

export default MyApp;
