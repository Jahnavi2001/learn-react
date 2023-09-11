import React from "react";
import ReactDOM from "react-dom/client";

// React Element using CORE Java
const reactHeading = React.createElement(
  "h1",
  { class: "heading" },
  "This is React Element"
);
console.log(reactHeading);

// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => Babel transpiles/converts it to React.createElement => React Element - JS Object => HTML Element (render)

// This is also react element using the JSX
const heading = (
  <h1 className="heading" tabIndex="1">
    Learn React Using JSX
  </h1>
);

// React Components (We have to define components with PascalCase)
// 1. Functional based Components
// 2. Class based Components

const Title = () => (
  <div id="container">
    {heading}
    <h1 className="title">It is React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title></Title>)
