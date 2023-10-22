import { Box, Divider, Heading, Skeleton } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import SearchResult from "./SearchResult";

const SearchResultsSection = ({ searchResults }) => {
  return (
    <Box className="search-results-section">
      <Heading as="h2" size="sm" fontWeight={"light"}>
        {searchResults.length === 0 ? (
          <>Type something in the search bar to receive results</>
        ) : (
          <>Search Results</>
        )}
      </Heading>
      <Box
        id="searchResults"
        style={{
          display: searchResults.length === 0 ? "none" : "block",
        }}
      >
        {searchResults.map((hits, index) => (
          <Link to={`/post/${hits.objectID}`} key={index}>
            <SearchResult
              authorUsername={hits.author}
              articleTitle={hits.title}
              articleUrl={hits.url}
              objectId={hits.objectID}
            />
            <Divider />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default SearchResultsSection;
