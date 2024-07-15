import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import CounterProvider from "./components/context/class/CounterProvider";
import App from "./components/Redux/functional/App";
import  {Provider}  from "react-redux";
import store from "./components/Redux/functional/redux/stores/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/* <CounterProvider>
      <CounterApp />

    </CounterProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
