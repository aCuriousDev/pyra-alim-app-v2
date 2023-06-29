import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/NavBar";

const TestPage = () => {
  return (
    <div>
      <h1>Page de test</h1>
      <p>Vous n'avez pas encore rempli le questionnaire</p>
      <Link to="/survey">
        <button>Accéder au questionnaire</button>
      </Link>
    </div>
  );
};

export default TestPage;
