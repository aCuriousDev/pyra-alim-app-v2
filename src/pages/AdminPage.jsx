import React from "react";
import AlimentList from "../components/AlimentList";
import Footer from "../components/Footer";
import Header from "../components/NavBar";
import DbAlimList from "../components/DbAlimList";

import { useCollection } from "../hooks/useCollection";
import { Container } from "@chakra-ui/react";

const AdminPage = () => {
  const { documents: alimentsList } = useCollection("alimentsList");

  return (
    <Container>
      <div>
        <h2>Temp DB list</h2>
        {alimentsList && <DbAlimList alimentsList={alimentsList} />}
      </div>
      <AlimentList />
    </Container>
  );
};

export default AdminPage;
