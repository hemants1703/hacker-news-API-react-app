// Hooks
import { useState } from "react";

// Styles
import "./App.css";

// Components
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import SearchResultsSection from "./components/SearchResultsSection";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => setSearchResults(results);

  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} >
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router> */}
      <Header />
      <InputBox onSearchResults={handleSearchResults} />
      <SearchResultsSection searchResults={searchResults} />
    </>
  );

  const Home = () => <div>Home Page</div>;
  const About = () => <div>About Page</div>;
  const Contact = () => <div>Contact Page</div>;
};

export default App;
