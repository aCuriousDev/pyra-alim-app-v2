import React from "react";
import AlimentList from "../components/AlimentList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DbAlimList from "../components/DbAlimList";

import { useCollection } from "../hooks/useCollection";

const AdminPage = () => {
  const { documents: alimentsList } = useCollection("alimentsList");
  return (
    <div>
      <Header />
      <div>
        <h2>Temp DB list</h2>
        {alimentsList && <DbAlimList alimentsList={alimentsList} />}
      </div>
      <AlimentList />
      <Footer />
    </div>
  );
};

export default AdminPage;
