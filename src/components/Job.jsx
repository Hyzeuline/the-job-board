const Job = ({ color, title, contractType, country, city }) => {
  return (
    <div className={`item ${color}`}>
      <h2>{title}</h2>
      <p>{`${contractType} - ${country} - ${city}`}</p>
    </div>
  );
};

export default Job;
