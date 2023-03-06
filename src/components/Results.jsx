import './Results.css';

export default function Results() {
  return (
  <div className="results-container">
    <h2>Voici vos résultats</h2>
    <div className="results-display">
      <div>
        <h3 className="daily-text-color">Tous les jours</h3>
        <span> 20%</span>
      </div>
      <div>
        <h3 className="weekly-text-color">Quelques fois par semaine</h3>
        <span> 80%</span>
      </div>
      <div>
        <h3 className="monthly-text-color">Quelques fois par mois</h3>
        <span> 65%</span>
      </div>
      <div>
        <h3 className="rarely-text-color">Rarement / Jamais</h3>
        <span> 45%</span>
      </div>
    </div>
    <div className="explications-container">
      <h3>Explications</h3>
      <p>Le score en pourcentage indique le nombre d'aliments qui se trouve dans la bonne catégorie selon <span className="highlight-text">la pyramide de référence</span>. Plus le pourcentage est élevé et meilleures sont vos habitudes alimentaires.</p>
    </div>
  </div>
  );
}
