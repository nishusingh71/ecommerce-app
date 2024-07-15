import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
export default function App() {
  return (
    <div>
      <p>App Component</p>
      {ReactDOM.createPortal(<Header />, document.getElementById("header"))}
    </div>
  );
}
