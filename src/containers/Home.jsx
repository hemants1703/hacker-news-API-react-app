import Header from "../components/Header";
import InputBox from "../components/InputBox";
import SearchResultsSection from "../components/SearchResultsSection";

function Home({ searchResults, handleSearchResults }) {
  return (
    <>
      <Header />
      <InputBox onSearchResults={handleSearchResults} />
      <SearchResultsSection searchResults={searchResults} />
    </>
  );
}

export default Home;
