import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // What we are saying here is, ones its fetch, dont fetch it again.
      // staleTime: Infinity,
      // cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adtop Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
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
