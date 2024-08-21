import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "hello react");
// console.log(heading);
// It is just an object heading
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// This root.render ,it takes the object and craete an h1 tage which browser understands and put that inside the root

// For careting nested element
// <div id ="parent">
{
  /* <div id="child">
    <h1>"I am nested delemnt"</h1>
    </div>
    </div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement("div", { id: "child1" }, [
//       React.createElement("h1", {}, "Hai Helo nested element child1"),
//       React.createElement("h2", {}, "It is h2 element child1"),
//     ]),
//   ],
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hai Helo nested element child2"),
//     React.createElement("h2", {}, "It is h2 element child2"),
//   ])
// );
// console.log(parent);

// root.render(parent);

// create element is creating objject

// <div id ="parent">
/* <div id="child">
    <h1>"I am nested delemnt"</h1>
    <h2> "I am h2 element"</h2>
    </div>
    </div> */

// To give 2 element h1 and h2, we can give it as array

// <div id ="parent">
/* <div id="child">
    <h1>"I am nested delemnt"</h1>
    <h2> "I am h2 element"</h2>
    </div>
    <div id="child2">
    <h1>"I am nested delemnt"</h1>
    <h2> "I am h2 element"</h2>
    </div>
    </div> */

// again it is a array

// The code is very big,That is why we have jsx

const Headpop = () => {
  return <h2>React Component adding to element</h2>;
};

// React Element

const elem = <span>Rect Elemet new </span>;

const headingJsx = (
  <div>
    {elem}
    {123 + 123}
    <h1 id='heading'>Hai I am Jino Jihn</h1>;
    <Headpop />
    {Headpop()}
    {/* since at the end of the day it is a js function */}
  </div>
);

// React Componnet

const Head = () => {
  return <h2>React Component</h2>;
};

// React function componnet

const num = 1000;

const FunHeading = () => {
  return (
    <div>
      <Head />
      <h1>Hai Hello</h1>
      <h3>{num}</h3>
      {headingJsx}
      {/* putting Recat element  in react componnet */}
    </div>
  );
};

//  This is normal Function
const Normal = function () {
  return <h3>NormalFunction</h3>;
};

// Shirt hand sysntx

const fx = () => true;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunHeading />);
