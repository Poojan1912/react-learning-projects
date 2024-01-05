import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS ) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const jsxHeading = <h1 className="head">This line is transpiled from JSX.</h1>;

console.log(jsxHeading);

// React Component
// 1. Class-based Component - OLD
// 2. Functional Component - NEW

// React Functional Component
const Title = () => <h1>This is title</h1>;

// Component Composition
const HeadingComponent = () => {
  return (
    <div>
      <h1>React Functional Component</h1>
      <Title />
      {jsxHeading}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
