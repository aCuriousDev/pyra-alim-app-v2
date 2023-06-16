export default function DbAlimList({ alimentsList }) {
  return (
    <div>
      <ul>
        {alimentsList.map((aliment) => (
          <li key={aliment.id}>{aliment.name}
          <img
              src={aliment.img}
              alt={aliment.name}
              style={{
                height: "30px",
                objectFit: "contain",
              }}
            /></li>
        ))}
      </ul>
    </div>
  );
}
