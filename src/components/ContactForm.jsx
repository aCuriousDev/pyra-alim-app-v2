import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h2>Contactez-nous</h2>
      <p>
        Des questions sur notre démarche et PyrAlim ? Envie de proposer notre solution au sein de votre entreprise ou en tant que professionnels de la santé et de la nutrition ?
      </p>
      <p>Contactez-nous !</p>
      <form>
        <label>Nom :</label>
        <input type="text" />
        <label>Email :</label>
        <input type="email" />
        <label>Message :</label>
        <textarea></textarea>
        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
