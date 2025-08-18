const Job = props => {
  return (
    <article className={props.className}>
      <h2>{props.title}</h2>
      <div>{props.contractType}</div>
      <div>{props.country}</div>
      <div>{props.city}</div>
    </article>
  );
};

export default Job;
