import { Button, ButtonGroup, Flex, Input } from "@chakra-ui/react";

import fetchSearch from "../services/search.js";
import { useState, useRef, useEffect } from "react";

const InputBox = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchRef = useRef(null);

  const handleSearchChange = () => {
    setSearchTerm(searchRef.current.value);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearch(searchTerm)
        .then((results) => {
          onSearchResults(results);
        })
        .catch((error) => {
          onSearchResults([]);
          console.error(error);
        });
    }
  }, [searchTerm]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="start"
      gap={6}
      wrap="wrap"
      padding="1.5rem"
      color="white"
      px={0}
    >
      <Input
        id="searchBar"
        placeholder="Search for news"
        isDisabled={false}
        focusBorderColor={"hackerOrange.primary"}
        variant="filled"
        width="50%"
        height={"50px"}
        ref={searchRef}
        onChange={handleSearchChange}
      />
      <ButtonGroup>
        <Button
          backgroundColor={"hackerOrange.primary"}
          color={"hackerBlack"}
          _hover={{
            backgroundColor: "hackerOrange.lighter",
          }}
          height={"50px"}
          onClick={handleSearchChange}
        >
          Search
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default InputBox;
