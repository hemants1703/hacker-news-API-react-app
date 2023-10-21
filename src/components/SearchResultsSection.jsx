import { Divider, Heading } from "@chakra-ui/react";

import SearchResult from "./SearchResult";

const SearchResultsSection = ({ searchResults }) => {
  return (
    <section className="search-results-section">
      <Heading as="h2" size="sm" fontWeight={"light"}>
        {searchResults.length === 0 ? (
          <>Type something in the search bar to receive results</>
        ) : (
          <>Search Results</>
        )}
      </Heading>
      <section
        id="searchResults"
        style={{
          display: searchResults.length === 0 ? "none" : "block",
        }}
      >
        {searchResults.map((hits, index) => (
          <>
            <SearchResult
              key={index}
              uid={index}
              authorUsername={hits.author}
              articleTitle={hits.title}
              articleUrl={hits.url}
              objectId={hits.objectID}
            />
            <Divider />
          </>
        ))}
      </section>
    </section>
  );
};

export default SearchResultsSection;
