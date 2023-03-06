import './Navigation.css';

export default function Progression() {
  return (
    <div className="navigation-container">
      <div className="nav-btn drop-shadow rarely-never">Rarement Jamais</div>
      <div className="nav-btn drop-shadow monthly">Quelques fois par mois</div>
      <div className="nav-btn drop-shadow weekly">
        Quelques fois par semaine
      </div>
      <div className="nav-btn drop-shadow daily">Tous les jours</div>
    </div>
  );
}
