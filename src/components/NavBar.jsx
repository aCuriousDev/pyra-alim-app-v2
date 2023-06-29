import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  forwardRef,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeButton from "./theme-button";
import Logo from "./Logo";

const LinkItem = ({ children, to, ...props }) => {
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link
      as={NavLink}
      scroll="false"
      p={2}
      color={inactiveColor}
      rounded="md"
      _hover={{
        background: useColorModeValue("gray.50", "whiteAlpha.300"),
      }}
      _activeLink={{
        color: "blue.900",
        background: useColorModeValue("blue.100", "blue.200"),
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, to) => (
  <Link
    to={to}
    as={NavLink}
    {...props}
    _hover={{
      background: useColorModeValue("gray.50", "whiteAlpha.300"),
    }}
    _activeLink={{
      color: "blue.900",
      background: useColorModeValue("blue.100", "blue.200"),
    }}
  />
));

// const NavBar = () => {
//   const location = useLocation();

//   const showLink = location.pathname !== "/";

//   return (
//     <header>
//       <h1>
//         PYR
//         <img
//           src={logo}
//           alt="PyrAlim Logo"
//           style={{
//             height: "30px",
//             objectFit: "contain",
//             display: "inline-block",
//           }}
//         />
//         LIM
//       </h1>

//       {showLink && <Link to="/">Retour à l'accueil</Link>}
//     </header>
//   );
// };

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem to="/" end>
            Accueil
          </LinkItem>
          <LinkItem to="start">Commencer</LinkItem>
          <LinkItem to="admin">Admin</LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} to="/">
                  Accueil
                </MenuItem>
                <MenuItem as={MenuLink} to="start">
                  Commencer
                </MenuItem>
                <MenuItem as={MenuLink} to="admin">
                  Admin
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
