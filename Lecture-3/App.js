//We cannot directly import or export in common script files
//we need to tell the browser that this is a type module script file

import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement(
  "h1",
  { id: "heading", key: "head-one" },
  "Hello World"
);
let subHeading = React.createElement(
  "h2",
  { id: "sub-heading", key: "head-two" },
  "Revision React 103"
);

//jsx expression syntax below:
const newHeading = <h2 id="jsx-heading">New Heading using JSX</h2>;

let container = React.createElement("div", { id: "container" }, [
  heading,
  subHeading,
  newHeading,
]);

const ChildComponent = () => <div>I am a child component</div>;

const FunComponent = () => {
  return (
    <div>
      {/* react element */}
      {container} 
      <h1>Functional Component</h1>
      <h2>This is h2 tag</h2>
      {/* react component */}
      <ChildComponent />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunComponent />);
