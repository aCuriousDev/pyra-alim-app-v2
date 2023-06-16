import React, { useState, useEffect } from "react";
import aliments from "../data.js"; // Assuming the aliments data is imported

const AlimentList = () => {
  const [filter, setFilter] = useState(""); // Filter state
  const [sortCriteria, setSortCriteria] = useState("name"); // Sort criteria state
  const [refFreqOptions, setRefFreqOptions] = useState([]); // Available ref_freq options

  // Extract available ref_freq options from aliments data
  useEffect(() => {
    const options = [...new Set(aliments.map((aliment) => aliment.ref_freq))];
    setRefFreqOptions(options);
  }, []);

  // Filtered and sorted aliments based on filter and sort criteria
  const filteredAliments = aliments
    .filter((aliment) => String(aliment.ref_freq).includes(filter))
    .sort((a, b) => {
      if (sortCriteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortCriteria === "id") {
        return a.id - b.id;
      } else if (sortCriteria === "ref_freq") {
        return a.ref_freq - b.ref_freq;
      }
    });

  return (
    <div>
      <h2>Liste des Aliments</h2>

      {/* Filter and sort options */}
      <div>
        <label>
          Filtrer par Fréquence de Référence:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            {refFreqOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Trier par :
          <select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="id">ID</option>
            <option value="ref_freq">Ref Freq</option>
          </select>
        </label>
      </div>

      {/* Aliment list */}
      <ul>
        {filteredAliments.map((aliment) => (
          <li key={aliment.id}>
            <img
              src={aliment.img}
              alt={aliment.name}
              style={{
                height: "30px",
                objectFit: "contain",
              }}
            />
            <div>
              <svg width="20" height="20">
                <circle cx="10" cy="10" r="10" fill={aliment.color01} />
              </svg>
              <svg width="20" height="20">
                <circle cx="10" cy="10" r="10" fill={aliment.color02} />
              </svg>
            </div>
            <div>{aliment.name}</div>
            <div>ID : {aliment.id}</div>
            <div>Ref Freq: {aliment.ref_freq}</div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlimentList;
