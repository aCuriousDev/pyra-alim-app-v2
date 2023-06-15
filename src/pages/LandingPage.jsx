import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <h1>PyrAlim</h1>
      <p>
        Transformez votre alimentation pour une vie plus saine et épanouissante
        !
      </p>
      <Link to="/test">
        <button>Commencer le test</button>
      </Link>

      <section>
        <h2>Pourquoi votre alimentation compte-t-elle ?</h2>
        <p>
          L'alimentation joue un rôle crucial dans notre santé et notre qualité
          de vie. Selon le Programme National Nutrition Santé (PNNS), une bonne
          alimentation contribue à prévenir de nombreuses maladies et améliore
          notre bien-être global. Il est donc essentiel de prendre soin de ce
          que nous mangeons pour nous sentir mieux et rester en forme. La
          première étape vers le changement est de faire un bilan de ce que nous
          mangeons dès aujourd'hui !
        </p>
      </section>

      <section>
        <h2>Que fait PyrAlim ?</h2>
        <p>
          PyrAlim est une application qui vise à vous aider à prendre le
          contrôle de votre alimentation. Elle vous permet de suivre votre
          consommation alimentaire, d'obtenir des recommandations personnalisées
          et de vous sensibiliser à l'importance de faire des choix alimentaires
          équilibrés. PyrAlim rend la nutrition amusante et innovante en vous
          encourageant à être conscient de ce que vous mangez et à prendre des
          décisions responsables pour votre santé.
        </p>
      </section>

      <section>
        <h2>Sources et fondements</h2>
        <p>
          Le Programme National Nutrition Santé (PNNS) est un programme mis en
          place par le gouvernement français pour promouvoir une alimentation
          saine et équilibrée. Une des approches recommandées par le PNNS est le
          régime méditerranéen, reconnu pour ses nombreux bienfaits sur la
          santé. Ce régime met l'accent sur la consommation de fruits, légumes,
          céréales complètes, poissons, huile d'olive et limite la consommation
          de viande rouge et de produits transformés. Vous pouvez en savoir plus
          sur le PNNS en visitant{" "}
          <a href="https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/le-programme-national-nutrition-sante/">
            ce lien
          </a>
          .
        </p>
      </section>
        
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
