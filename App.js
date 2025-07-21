const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Nagma:"),
    React.createElement("h2", {}, "Bhadwa saala randibaaz"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Sardar:"),
    React.createElement("h2", {}, "Ee boli humko nagma hai"),
  ]),
]);

console.log(parent, typeof parent); // React.createElement returns an object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root, typeof root);
root.render(parent); // This is where the object created above is converted to HTML and placed in the DOM.
