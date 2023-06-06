import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {AppProvider} from "./context/Context";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:5000/w3s/v1";
//axios.defaults.baseURL = "https://investmentportaldemo.herokuapp.com/w3s/v1";
axios.defaults.baseURL = "https://investmentportaldemo.onrender.com/w3s/v1";

//export const frontendurl = "http://localhost:3000";
export const frontendurl = "https://iportaldemo.netlify.app";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <AppProvider>
    <App />
  </AppProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
