import { Container, Heading, Text } from "@chakra-ui/react";
import Section from "../components/Section";
import { useAuthContext } from "../hooks/useAuthContext";
// import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { useState, useEffect } from "react";

import { getAuth, updateProfile } from "firebase/auth";

const Account = () => {
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        location.reload();
      })
      .catch((err) => setNameError(err));
  };


  return (
    <Container>
      <Heading>Account</Heading>
      <Section>
        <Heading as="h3" size={"lg"}>
          Mes bilans
        </Heading>
        <div>
          Email Verified: {currentUser.emailVerified ? "true" : "false"}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="submit"
            value="change name"
            minLength="3"
            maxLength="12"
          />
          {nameError && <div>{nameError}</div>}
        </form>
        <div>Email: {user.email}</div>
        <div>UID: {user.uid}</div>
        {user.displayName && <div>Name: {user.displayName}</div>}
      </Section>
    </Container>
  );
};
export default Account;
