import { Box, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const Comments = ({ author, text }) => {
  return (
    <Box py={4}>
      <Flex alignItems="start">
        <Avatar size="sm" name={author} mr={4} />
        <Text fontSize="md" fontWeight="bold">
          {author}
        </Text>
      </Flex>
      <Text
        fontSize="md"
        color="gray.500"
        mt={2}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Box>
  );
};

export default Comments;
