const Job = props => {
  return (
    <div className={`item ${props.color}`}>
      <h2>{props.title}</h2>
      <div>
        <div>{props.contractType}</div>
        <div>{props.country}</div>
        <div>{props.city}</div>
      </div>
    </div>
  );
};

export default Job;
