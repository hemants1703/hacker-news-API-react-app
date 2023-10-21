import { Heading } from "@chakra-ui/react";

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
      Hacker News App
    </Heading>
  );
};

export default Header;
