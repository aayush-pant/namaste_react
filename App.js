const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h3", {}, "Nagma:"),
    React.createElement("h3", {}, "Bhadwa saala randibaaz"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "Sardar:"),
    React.createElement("h3", {}, "Ee boli humko nagma hai"),
  ]),
]);

console.log(parent, typeof parent); // React.createElement returns an object
const reactRoot = ReactDOM.createRoot(document.getElementById("reactRoot"));
console.log(reactRoot, typeof reactRoot);
reactRoot.render(parent); // This is where the object created above is converted to HTML and placed in the DOM.
