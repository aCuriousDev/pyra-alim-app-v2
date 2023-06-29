import {
  Container,
  Heading,
  Highlight,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Section from "./Section";

const ContactForm = () => {
  return (
    <Section>
      <Heading as="h3" size={"lg"}>
        Contactez-nous
      </Heading>
      <Text>
        Des questions sur notre démarche et PyrAlim ? Envie de proposer notre
        solution au sein de votre entreprise ou en tant que professionnels de la
        santé et de la nutrition ? Contactez-nous !
      </Text>
      <FormControl isRequired>
        <FormLabel>Nom :</FormLabel>
        <Input type="text" variant='filled' />
        <FormLabel>Email :</FormLabel>
        <Input variant='filled' type="email" />
        <FormLabel>Message :</FormLabel>
        <Textarea placeholder="Votre message..." size="sm" variant='filled'/>
        <Button mt={2}>Envoyer</Button>
      </FormControl>
    </Section>
  );
};

export default ContactForm;
