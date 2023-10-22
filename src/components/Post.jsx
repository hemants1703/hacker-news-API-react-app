import { Box, Skeleton, VStack, Text, Heading } from "@chakra-ui/react";

import fetchPost from "../services/post";

import { useState, useEffect } from "react";
import Comments from "./Comments";

const Post = ({ objectId }) => {
  const [postDetails, setPostDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPost(objectId);
        setPostDetails(data);
        setIsLoaded(true);
      } catch (error) {
        setPostDetails({
          title: "Something went wrong!",
          points: "didn't load ",
          children: [],
        });
      }
    };
    fetchData();
  }, [objectId]);

  return (
    <Box px={"1rem"}>
      <VStack gap={"1rem"} alignItems={"start"} textAlign={"start"}>
        <Skeleton isLoaded={isLoaded} height={"40px"} width={"100%"}>
          <Text fontSize="xl" fontWeight="bold">
            {postDetails.title}
          </Text>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} height={"20px"}>
          <Text fontSize="md" color="gray.500">
            {postDetails.points} points
          </Text>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} height={"500px"} width={"100%"}>
          <Heading as="h3" size="md" mb={4}>
            {postDetails.children && postDetails.children.length} Comments
          </Heading>
          <Box
            height={"500px"}
            width={"100%"}
            overflowY={"scroll"}
            border={"1px solid gray"}
            borderRadius={"md"}
            p={4}
          >
            <Text textAlign={"start"}>
              {postDetails.children &&
                postDetails.children.map((comment, index) => (
                  <Comments
                    key={index}
                    author={comment.author}
                    text={comment.text}
                  />
                ))}
            </Text>
          </Box>
        </Skeleton>
      </VStack>
    </Box>
  );
};

export default Post;
