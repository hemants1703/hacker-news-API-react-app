// This component renders each Search Result in the Search Results list.
// It is a child component of the Search Results component.

import { Card, CardBody, Flex, Link, Text } from "@chakra-ui/react";

const SearchResult = ({ authorUsername, articleTitle, articleUrl }) => {
  return (
    <Card>
      <CardBody>
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          style={{
            minWidth: "20%",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <Text
            fontStyle={"italic"}
            opacity={0.8}
            size={"sm"}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              lineHeight: "1.5",
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)", // Use clamp() to set the font size
              maxWidth: "100%", // Set the maxWidth to 100% of the parent element
            }}
          >
            {authorUsername}
          </Text>
          <Text
            fontWeight={"bold"}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              lineHeight: "1.5",
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)", // Use clamp() to set the font size
              maxWidth: "100%", // Set the maxWidth to 100% of the parent element
            }}
          >
            {articleTitle}
          </Text>
          {/* <Link
            href={articleUrl}
            isExternal
            fontSize={"sm"}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              lineHeight: "1.5",
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)", // Use clamp() to set the font size
              maxWidth: "100%", // Set the maxWidth to 100% of the parent element
              color: theme.colors.hackerLink,
            }}
          > */}
          {/* <a href={articleUrl} target="_blank" rel="noopener noreferrer">
            {articleUrl}
          </a> */}

          {/* </Link> */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SearchResult;
