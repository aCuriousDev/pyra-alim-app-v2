import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResponseSummary from "../components/ResponseSummary";
import Header from "../components/NavBar";
import { Button, Container, Heading } from "@chakra-ui/react";

const Survey = () => {
  const navigate = useNavigate();

  const catSocioPro = [
    "Agriculteurs exploitants / Agricultrices exploitantes",
    "Artisans / Artisanes, commerçants / commerçantes et chefs / cheffes d'entreprise",
    "Cadres et professions intellectuelles supérieures",
    "Professions intermédiaires",
    "Employés / Employées",
    "Ouvriers / Ouvrières",
    "Étudiants",
    "Autres",
  ];

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      return JSON.parse(savedFormData);
    } else {
      return {
        name: "",
        surname: "",
        email: "",
        gender: "",
        birthYear: "",
        socioProfessionalClass: "",
        healthPriority: "",
        healthTime: "",
        selfPerceivedHealth: "",
        sedentaryWork: "",
        physicalActivity: "",
        height: "",
        weight: "",
        importanceOfNutrition: "",
        goodNutrition: "",
        dailyMeals: "",
      };
    }
  });

  const [currentBlock, setCurrentBlock] = useState(() => {
    const savedCurrentBlock = localStorage.getItem("currentBlock");
    if (savedCurrentBlock) {
      return JSON.parse(savedCurrentBlock);
    } else {
      return "a";
    }
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("currentBlock", JSON.stringify(currentBlock));
  }, [currentBlock]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlockSubmit = (e) => {
    e.preventDefault();
    const nextBlock = getNextBlock(currentBlock);
    setCurrentBlock(nextBlock);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission des réponses du questionnaire
  };

  const getNextBlock = (currentBlock) => {
    switch (currentBlock) {
      case "a":
        return "b";
      case "b":
        return "c";
      case "c":
        return "d";
      default:
        return "";
    }
  };

  const isBlockVisible = (block) => {
    return currentBlock === block;
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const options = [];

    for (let year = currentYear; year >= startYear; year--) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return options;
  };

  return (
    <Container>
      <Heading>Questionnaire</Heading>

      {isBlockVisible("a") && (
        <>
          <Heading as="h3">Bloc A: Identité</Heading>
          <form onSubmit={handleBlockSubmit}>
            <label>Nom / Prénom:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />

            <label>Adresse mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label>Sexe:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Sélectionner</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="autre">Autre</option>
            </select>

            <label>
              Année de naissance:
              <select
                name="birthYear"
                value={formData.birthYear}
                onChange={handleInputChange}
              >
                <option value="">-- Sélectionner --</option>
                {generateYearOptions()}
              </select>
            </label>

            <label>
              Catégorie Socio Professionnelle:
              <select
                name="socioProfessionalClass"
                value={formData.socioProfessionalClass}
                onChange={handleInputChange}
              >
                <option value="">Sélectionnez une catégorie</option>
                {catSocioPro.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>

            <Button type="submit">Valider</Button>
          </form>
        </>
      )}

      {isBlockVisible("b") && (
        <>
          <Heading as="h3">Bloc B: Ma santé et moi</Heading>
          <form onSubmit={handleBlockSubmit}>
            <label>Ma santé est une priorité, une valeur dans ma vie:</label>
            <input
              type="range"
              name="healthPriority"
              min="1"
              max="20"
              value={formData.healthPriority}
              onChange={handleInputChange}
              required
            />

            <label>J’ai du temps pour m’occuper de ma santé:</label>
            <input
              type="range"
              name="healthTime"
              min="1"
              max="20"
              value={formData.healthTime}
              onChange={handleInputChange}
              required
            />

            <label>Je me considère en bonne santé:</label>
            <input
              type="range"
              name="selfPerceivedHealth"
              min="1"
              max="20"
              value={formData.selfPerceivedHealth}
              onChange={handleInputChange}
              required
            />

            <Button type="submit">Valider</Button>
          </form>
        </>
      )}

      {isBlockVisible("c") && (
        <>
          <Heading as="h3">Bloc C: Mon activité physique et moi</Heading>
          <form onSubmit={handleBlockSubmit}>
            <label>Avez-vous une Activité professionnelle Sédentaire ?</label>
            <input
              type="range"
              name="sedentaryWork"
              min="1"
              max="20"
              value={formData.sedentaryWork}
              onChange={handleInputChange}
              required
            />


            <label>
              Sur une semaine, dans le cadre vos activités professionnelles et
              de loisirs, pratiquez-vous régulièrement une activité physique et
              sportive dont la durée totale est au moins de 5H00 hebdomadaire
              comme la marche, le vélo, la natation, la musculation ? (Prendre
              en compte les activités dont la durée est au moins de 10 minutes
              d’affilée)
            </label>
            <input
              type="range"
              name="physicalActivity"
              min="1"
              max="20"
              value={formData.physicalActivity}
              onChange={handleInputChange}
              required
            />

            <label>Quel est votre Taille en cm ?</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              required
            />

            <label>Quel est votre poids en kg ?</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              required
            />

            <Button type="submit">Valider</Button>
          </form>
        </>
      )}

      {isBlockVisible("d") && (
        <>
          <Heading as="h3">Bloc D: Mon alimentation et moi</Heading>
          <form onSubmit={handleBlockSubmit}>
            <label>
              Est-ce que vous considérez que l’alimentation est un facteur
              important pour votre santé ?
            </label>
            <input
              type="range"
              name="importanceOfNutrition"
              min="1"
              max="20"
              value={formData.importanceOfNutrition}
              onChange={handleInputChange}
              required
            />

            <label>
              Pensez-vous avoir plutôt une bonne alimentation, une bonne
              Nutrition ?
            </label>
            <input
              type="range"
              name="goodNutrition"
              min="1"
              max="20"
              value={formData.goodNutrition}
              onChange={handleInputChange}
              required
            />

            <label>
              Sur une journée, combien de repas effectuez-vous, collation
              comprise ?
            </label>
            <input
              type="range"
              name="dailyMeals"
              min="1"
              max="10"
              value={formData.dailyMeals}
              onChange={handleInputChange}
              required
            />

            <Button type="submit">Valider</Button>
          </form>
        </>
      )}

      {/* Résumé des réponses */}
      {!currentBlock && (
        <ResponseSummary
          formData={formData}
          setCurrentBlock={setCurrentBlock}
          currentBlock={currentBlock}
        />
      )}
    </Container>
  );
};

export default Survey;
