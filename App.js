import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "1" }, [
    React.createElement("h3", { key: "1" }, "Nagma:"),
    React.createElement("h3", { key: "2" }, "Bhadwa saala randibaaz..🤬"),
  ]),
  React.createElement("div", { id: "child2", key: "2" }, [
    React.createElement("h3", { key: "1" }, "Sardar:"),
    React.createElement("h3", { key: "2" }, "Ee boli humko nagma hai..🧐"),
  ]),
]);

console.log(parent, typeof parent); // React.createElement returns an object
const reactRoot = ReactDOM.createRoot(document.getElementById("reactRoot"));
console.log(reactRoot, typeof reactRoot);
reactRoot.render(parent); // This is where the object created above is converted to HTML and placed in the DOM.
