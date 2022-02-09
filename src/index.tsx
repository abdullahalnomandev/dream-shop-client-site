import "antd/dist/antd.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./scss/main.scss";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
