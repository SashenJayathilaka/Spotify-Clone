import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayer } from "./components/DataLayer";
import reducer, { initialState } from "./components/reducer";
import * as serviceWorker from "./components/serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.unregister();
