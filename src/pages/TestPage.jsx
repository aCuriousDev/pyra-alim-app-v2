import {
  Button,
  Collapse,
  Container,
  Heading,
  Box,
  Text,
  useDisclosure,
  Stack,
  useColorModeValue,
  CardBody,
  Card,
  CardHeader,
  StackDivider,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Section from "../components/Section";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";

function CollapseEx({ btnText, children }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button colorScheme="green" variant={"outline"} onClick={onToggle}>
        {btnText}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={useColorModeValue("green.100", "green.700")}
          p="2"
          rounded="md"
          shadow="md"
        >
          {children}
        </Box>
      </Collapse>
    </>
  );
}

const TestPage = () => {
  return (
    <Container>
      <Heading as={"h2"} mb={4}>
        Page de démarrage
      </Heading>
      <Section>
        <Stack>
          <Card variant={'outline'}>
            <CardHeader>
              <Heading as={"h3"} size={"md"}>
                Statut
              </Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4" direction={"row"}>
                <Box>
                  <Heading size="xs" textTransform="uppercase" mb={2}>
                    Questionnaire
                  </Heading>
                  <Flex alignItems={"center"} gap={1.5} mb={3}>
                    <CheckCircleIcon color={"green.500"} />
                    <Text fontSize="sm">Complété</Text>
                  </Flex>
                  <Button variant={"outline"} size={"sm"} colorScheme="teal">
                    Voir / Modifier mes réponses
                  </Button>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase" mb={2}>
                    Bilan Pyralim
                  </Heading>
                  <Flex alignItems={"center"} gap={1.5} mb={3}>
                    <InfoIcon color={"yellow.500"} />
                    <Text fontSize="sm">Non réalisé</Text>
                  </Flex>
                  <Button variant={"outline"} size={"sm"} colorScheme="orange">
                    Commencer
                  </Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Section>
      <Section>
        <Stack mb={4}>
          <Text>
            Avant de commencer votre bilan alimentaire apprenons à mieux nous
            connaître en répondant à ce court questionnaire :
          </Text>
          <Button colorScheme="blue" as={NavLink} to="/questionnaire">
            Accéder au questionnaire
          </Button>
          <CollapseEx btnText={"À quoi servent ces informations ?"}>
            <Text>
              Cette application vous permet de faire avancer la recherche !
              <br />
              En effet les données collectées nous permettrons de réaliser des
              publications scientifiques. Les informations sont totalement
              anonymisées à ce moment.
            </Text>
          </CollapseEx>
        </Stack>
      </Section>
      <Section>
        <Stack mb={4}>
          <Text>
            Prêt à faire le point sur votre alimentation ?
          </Text>
          <Button colorScheme="blue" as={NavLink} to="/questionnaire">
            Démarrer mon bilan
          </Button>
        </Stack>
      </Section>
    </Container>
  );
};

export default TestPage;
