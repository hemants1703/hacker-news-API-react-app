// Chakra UI
import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

// React Router
import { Link } from "react-router-dom";

// Components
import Post from "../components/Post";
import Header from "../components/Header";

import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const PostPage = () => {
  const { objectId } = useParams();

  return (
    <>
      <Header />
      <Bread />
      <Post objectId={objectId} />
      <Footer />
    </>
  );
};

const Bread = () => {
  return (
    <Box p={"1rem"}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <Link to="/">Search</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link to=".">Post</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default PostPage;
