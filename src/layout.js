import React from "react";
import Header from "./Components/header";
import Navigation from "./Components/navigation";
import "./assets/css/layout.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="main">
        <Header />
        {props.children}
      </div>
    </div>
  );
}
