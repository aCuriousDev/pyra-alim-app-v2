import React from 'react';

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
    </footer>
  );
};

export default Footer;
