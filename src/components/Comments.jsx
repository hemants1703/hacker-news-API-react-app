import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const Comments = ({ author, text }) => {
  return (
    <Box py={4}>
      <Flex alignItems="start">
        <Avatar size="sm" name={author} mr={4} />
        <Link
          href={`https://news.ycombinator.com/user?id=${author}`}
          fontSize="md"
          fontWeight="bold"
          isExternal
        >
          {author}
        </Link>
      </Flex>
      <Text
        fontSize="md"
        color="gray.500"
        mt={2}
        dangerouslySetInnerHTML={{ __html: text }}
        className="comment-text"
      />
    </Box>
  );
};

export default Comments;
