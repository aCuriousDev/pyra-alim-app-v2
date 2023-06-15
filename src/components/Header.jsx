import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo/logo.png";

const Header = () => {
  const location = useLocation();

  const showLink = location.pathname !== "/";

  return (
    <header>
      <h1>
        PYR
        <img
          src={logo}
          alt="PyrAlim Logo"
          style={{
            height: "30px",
            objectFit: "contain",
            display: "inline-block",
          }}
        />
        LIM
      </h1>

      {showLink && <Link to="/">Retour à l'accueil</Link>}
    </header>
  );
};

export default Header;
