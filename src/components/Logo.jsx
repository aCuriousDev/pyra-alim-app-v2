import {
  Avatar,
  Heading,
  Image,
  Img,
  LinkBox,
  LinkOverlay,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <LinkBox>
      <LinkOverlay as={RouterLink} to="/">
        <Heading as="h1" size="lg">
          PYR
          <Image src="/logo/logo.png" boxSize={7} display={"inline-block"} />
          LIM
        </Heading>
      </LinkOverlay>
    </LinkBox>
  );
};
export default Logo;
