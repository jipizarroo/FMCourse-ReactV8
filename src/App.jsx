import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdaptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

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
  const adoptedPet = useState(null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <Suspense
              fallback={
                <div className="loading-pane">
                  <h2 className="loader"> Loading doggos ... </h2>
                </div>
              }
            >
              <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
                <Link
                  className="text-6xl text-white hover:text-gray-200"
                  to="/"
                >
                  Adtop Me!
                </Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </Suspense>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
    </div>
  );
};

// const container = document.getElementById("root");
// // New way of calling the DOM => New thing in React 18, called concurrency ( There is no more static
// // vs concurrent mode ), its a form that React knows when you write createRoot, you are up to date
// // with the new version of React.
// const root = createRoot(container);
// // if you give it a component ( To create element ), it will render it, not like on line 15 where
// // you give it a tag. This is the magic of React, a component creates a new component, that gives
// // even more components.
// root.render(<App />);

export default App;
