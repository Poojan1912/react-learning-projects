/**
 *
 * <div id="parent">
 *    <div id="child">
 *       <h1>I'm h1 tag</h1>
 *       <h2>I'm h2 tag</h2>
 *    </div>
 * </div>
 *
 * React Element (Object) => HTML (Browser Understands)
 *
 */

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
