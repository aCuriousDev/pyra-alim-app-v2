import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import Section from "../components/Section";
import { useSignup } from "../hooks/useSignup";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errorSignup, signup } = useSignup();
  const { errorLogin, login } = useLogin();

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container>
      <Heading>Inscription</Heading>
      <Section>
        <form>
          <Stack direction={["column", "row"]}>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormHelperText>
                Nous ne partagerons jamais votre email.
              </FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mot de passe</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormHelperText>
                Veillez à ne pas partager votre mot de passe.
              </FormHelperText>
            </FormControl>
          </Stack>
          <Button onClick={handleSignup}>S'inscrire</Button>
          {errorSignup && <p>{errorSignup}</p>}
        </form>
      </Section>
      <Heading>Connexion</Heading>
      <Section>
        <form>
          <Stack direction={["column", "row"]}>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormHelperText>
                Nous ne partagerons jamais votre email.
              </FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mot de passe</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormHelperText>
                Veillez à ne pas partager votre mot de passe.
              </FormHelperText>
            </FormControl>
          </Stack>
          <Button onClick={handleLogin}>Se connecter</Button>
          {errorLogin && <p>{errorLogin}</p>}
        </form>
      </Section>
    </Container>
  );
};
export default SignupPage;
