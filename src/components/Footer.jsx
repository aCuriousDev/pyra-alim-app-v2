import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>&copy; PyrAlim {new Date().getFullYear()}</p>
      <p>
        <a href="/conditions">Conditions générales d'utilisation</a>
      </p>
      <p>
        <a href="/gdpr">GDPR Compliance</a>
      </p>
      <Link to="/admin">Go to Admin</Link>
    </footer>
  );
};

export default Footer;
