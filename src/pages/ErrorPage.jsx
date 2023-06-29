import {
  Heading,
  Container,
  Divider,
  Text,
  Button,
  Box,
  Stack,
  Code,
} from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error({ error });

  const errorObj = { ...error };
  const errorDisplay = [];
  Object.entries(errorObj).forEach(([key, value]) => {
    errorDisplay.push(
      <Stack key={key} direction={"row"} wrap={"wrap"}>
        <Code colorScheme="red">{`${key} `}</Code>
        <Code>{`${value}`}</Code>
      </Stack>
    );
  });

  return (
    <>
      <Container>
        <Heading as="h1">Oops ! Not Found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Stack>{errorDisplay}</Stack>
        <Divider my={6} />
        <Box my={6} align="center">
          <Button>
            <Link to={"/"}>Return Home</Link>
          </Button>
        </Box>
      </Container>
    </>
  );
}
