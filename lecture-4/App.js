//We cannot directly import or export in common script files
//we need to tell the browser that this is a type module script file

import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

const Heading = () => {
  return (
    <div className="header">
      <img
        width={85}
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0oZvf_Vj2VpP9fp5NLte238mjaO3LScZag&usqp=CAU"
      />
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return <div>body</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      <Footer />
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
