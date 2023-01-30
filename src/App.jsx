import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adtop Me!</h1>
      <SearchParams />
    </div>
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
root.render(<App />);
