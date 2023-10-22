import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Heading
      as={"h1"}
      size={"lg"}
      fontFamily={"heading"}
      backgroundColor={"hackerOrange.primary"}
      textAlign={"start"}
      padding={"1rem"}
      color={"hackerBlack"}
      fontWeight={"light"}
    >
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        Hacker News App
      </Link>
    </Heading>
  );
};

export default Header;
