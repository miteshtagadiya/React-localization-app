import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import translations from "./locale";
import * as serviceWorker from "./serviceWorker";

const locale = "en_US"; //navigator.language || "en"
const messages = translations[locale];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={"en"} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
