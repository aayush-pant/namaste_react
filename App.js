import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    {
      id: "child1",
      key: "1",
      style: { display: "flex", alignItems: "center", margin: "0px" },
    },
    [
      React.createElement(
        "h3",
        {
          key: "1",
          style: { display: "flex", alignItems: "center", margin: "4px" },
        },
        "Nagma:"
      ),
      React.createElement(
        "h3",
        {
          key: "2",
          style: { display: "flex", alignItems: "center", margin: "4px" },
        },
        "Bhadwa saala randibaaz..🤬"
      ),
    ]
  ),
  React.createElement(
    "div",
    {
      id: "child2",
      key: "2",
      style: { display: "flex", alignItems: "center", margin: "0px" },
    },
    [
      React.createElement(
        "h3",
        {
          key: "1",
          style: { display: "flex", alignItems: "center", margin: "4px" },
        },
        "Sardar:"
      ),
      React.createElement(
        "h3",
        {
          key: "2",
          style: { display: "flex", alignItems: "center", margin: "4px" },
        },
        "Ee boli humko nagma hai..🧐"
      ),
    ]
  ),
]);

console.log(parent, typeof parent); // React.createElement returns an object
const reactRoot = ReactDOM.createRoot(document.getElementById("reactRoot"));
console.log(reactRoot, typeof reactRoot);
reactRoot.render(parent); // This is where the object created above is converted to HTML and placed in the DOM.
