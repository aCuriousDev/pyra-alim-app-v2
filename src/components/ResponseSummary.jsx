import React from "react";

const ResponseSummary = ({ formData, setCurrentBlock, currentBlock }) => {
  const handleEditResponses = () => {
    setCurrentBlock("a");
  };
  return (
    <div>
      <h3>Récapitulatif des réponses :</h3>
      <p>Nom: {formData.name}</p>
      <p>Prénom: {formData.surname}</p>
      <p>Adresse mail: {formData.email}</p>
      <p>Sexe: {formData.gender}</p>
      <p>Année de naissance: {formData.birthYear}</p>
      <p>Classe Socio Professionnelle: {formData.socioProfessionalClass}</p>
      <p>Ma santé est une priorité: {formData.healthPriority}</p>
      <p>J'ai du temps pour m'occuper de ma santé: {formData.healthTime}</p>
      <p>Je me considère en bonne santé: {formData.selfPerceivedHealth}</p>
      <p>Activité professionnelle sédentaire: {formData.sedentaryWork}</p>
      <p>Pratique régulière d'activité physique: {formData.physicalActivity}</p>
      <p>Taille en cm: {formData.height}</p>
      <p>Poids en kg: {formData.weight}</p>
      <p>
        Alimentation est un facteur important pour la santé:{" "}
        {formData.importanceOfNutrition}
      </p>
      <p>
        J'ai une bonne alimentation, une bonne nutrition:{" "}
        {formData.goodNutrition}
      </p>
      <p>Nombre de repas par jour, collation comprise: {formData.dailyMeals}</p>
      {currentBlock !== "a" && (
        <button onClick={handleEditResponses}>Modifier les réponses</button>
      )}
    </div>
  );
};

export default ResponseSummary;
