// Hooks
import { useState } from "react";

// Styles
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Switch from "react-router-dom";

import Home from "./containers/Home";
import PostPage from "./containers/PostPage";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => setSearchResults(results);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                searchResults={searchResults}
                handleSearchResults={handleSearchResults}
              />
            }
          />
          <Route path="/post/:objectId" element={<PostPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
