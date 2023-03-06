import './Progression.css';

export default function Progression() {
  return (
    <div className="progress-container">
      <div className="progressbar-wrapper drop-shadow">
        <div title="downloading" className="progressbar">
          60%
        </div>
      </div>
      <div className="progress-ratio">21 / 35</div>
    </div>
  );
}
