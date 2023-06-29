import { NavLink } from "react-router-dom";
import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  Tooltip,
  Avatar,
  Text,
  Button,
  Center,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Icon,
  Stack,
  Image,
  AbsoluteCenter,
} from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import Section from "../components/Section";

const LandingPage = () => {
  return (
    <Container maxW="container.sm">
      <Section>
        <Box
          pt={[160, 280]}
          bgImage="url('/img/header_healthy.svg')"
          bgPosition="top"
          bgRepeat="no-repeat"
          bgSize={"contain"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"end"}
        >
          <Box
            bgColor={useColorModeValue("whiteAlpha.500", "blackAlpha.300")}
            px={4}
            py={2}
            borderRadius={18}
            backdropFilter="blur(10px)"
          >
            <Heading size={"xl"}>
              Transformez votre alimentation pour une vie plus saine et épanouie
              !
            </Heading>
            <Center mt={5}>
              <Button as={NavLink} to="start" colorScheme="green">
                Commencer
              </Button>
            </Center>
          </Box>
        </Box>
      </Section>

      <Section>
        <Heading as="h3" size={"lg"} mb={2}>
          Pourquoi votre alimentation compte-t-elle ?
        </Heading>
        <Text variant={"section-paragraph"}>
          L'alimentation joue un rôle crucial dans notre santé et notre qualité
          de vie. Selon le{" "}
          <Link
            href="https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/le-programme-national-nutrition-sante/"
            isExternal
          >
            Programme National Nutrition Santé (PNNS)
          </Link>
          , une bonne alimentation contribue à prévenir de nombreuses maladies
          et améliore notre bien-être global. Il est donc essentiel de prendre
          soin de ce que nous mangeons pour nous sentir mieux et rester en
          forme. La première étape vers le changement est de faire un bilan de
          ce que nous mangeons dès aujourd'hui !
        </Text>
      </Section>

      <Section>
        <Heading as="h3" size={"lg"} mb={2}>
          Que fait PyrAlim ?
        </Heading>
        <Text variant={"section-paragraph"}>
          PyrAlim est une application qui vise à vous aider à prendre le
          contrôle de votre alimentation. Elle vous permet de faire un bilan de
          vos modes de consommation et vous sensibilise à une alimentation plus
          équilibrée. PyrAlim rend la nutrition amusante et innovante en vous
          encourageant à être conscient de ce que vous mangez et à prendre des
          décisions responsables pour votre santé.
        </Text>
      </Section>

      <Section>
        <Heading as="h3" size={"lg"} mb={2}>
          Sources et références
        </Heading>
        <Text variant={"section-paragraph"}>
          Le Programme National Nutrition Santé (PNNS) est un programme mis en
          place par le gouvernement français pour promouvoir une alimentation
          saine et équilibrée. Une des approches recommandées par le PNNS est le
          régime méditerranéen, reconnu pour ses nombreux bienfaits sur la
          santé. Ce régime met l'accent sur la consommation de fruits, légumes,
          céréales complètes, poissons, huile d'olive et limite la consommation
          de viande rouge et de produits transformés. Vous pouvez en savoir plus
          sur le PNNS en visitant{" "}
          <a href="https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/le-programme-national-nutrition-sante/">
            ce lien
          </a>
          .
        </Text>
      </Section>

      <ContactForm />
    </Container>
  );
};

export default LandingPage;
