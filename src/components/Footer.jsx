import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <SimpleGrid columns={1}>
        <p>
          <a href="/conditions">Conditions générales d'utilisation</a>
        </p>
        <p>
          <a href="/gdpr">GDPR Compliance</a>
        </p>
        <Link to="/admin">Go to Admin</Link>
      </SimpleGrid>
      <p>&copy; PyrAlim {new Date().getFullYear()} All Rights Reserved.</p>
    </Box>
  );
};

export default Footer;
