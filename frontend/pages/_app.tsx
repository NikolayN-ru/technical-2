import createRootReduser from "../redux/reducers";
import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cerateSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';

const sagaMiddaleware = cerateSagaMiddleware();

const middlewares = [sagaMiddaleware, thunk,];

const store = createStore(
  createRootReduser(),
  composeWithDevTools(applyMiddleware(...middlewares,))
);

sagaMiddaleware.run(rootSaga);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={styles.layout}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
