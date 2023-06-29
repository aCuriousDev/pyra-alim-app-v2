import { Box, Container } from "@chakra-ui/react";
// import { motion } from "framer-motion";

import { Outlet } from "react-router-dom";
import Header from "../NavBar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <Box pb={8}>
      <Header />
      <Container maxW="container.sm" pt={20}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
export default MainLayout;
