import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer
      style={{
        paddingTop: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Developed by&nbsp;
      <Link
        href={"https://hemantsharma.dev"}
        isExternal
        fontStyle={"italic"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text>Hemant Sharma</Text>
        <ExternalLinkIcon mx={"2px"} />
      </Link>
    </footer>
  );
};

export default Footer;
