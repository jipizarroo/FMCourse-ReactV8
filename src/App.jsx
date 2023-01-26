import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    // what type of element we put in
    "div",
    // atr that we wanna give it, class, id, styletag, etc.
    {},
    // childrens of what we first created.
    [
      React.createElement("h1", {}, "Adopt Me!"),
      // One way data flow => I can pass data from App to Pet, but i cant pass data from Pet to App 99%.
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luna",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        animal: "Bird",
        name: "Pepper",
        breed: "Cockatail",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Doink",
        breed: "Mixed",
      }),
    ]
  );
};

const container = document.getElementById("root");
// New way of calling the DOM => New thing in React 18, called concurrency ( There is no more static
// vs concurrent mode ), its a form that React knows when you write createRoot, you are up to date
// with the new version of React.
const root = createRoot(container);
// if you give it a component ( To create element ), it will render it, not like on line 15 where
// you give it a tag. This is the magic of React, a component creates a new component, that gives
// even more components.
root.render(React.createElement(App));
