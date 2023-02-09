import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./reducers/store";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
    background-image: url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg');
  background-size: cover;
  background-position: center;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>
  // document.getElementById("root")
);

serviceWorker.unregister();
