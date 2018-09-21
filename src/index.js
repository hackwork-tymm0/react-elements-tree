
import RSW from "./registerServiceWorker";
import $ from "./helpers/selector";

import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";

ReactDOM.render(<App />, $("#root"));

RSW();
