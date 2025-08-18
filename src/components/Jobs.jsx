import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        color="red"
        title="Full Time Sales Associate"
        contractType="CDI -"
        country=" Australie -"
        city=" Sydney"
      />
      <Job
        color="green"
        title="Agent de sécurité"
        contractType="CDI -"
        country=" France -"
        city=" Pantin"
      />
      <Job
        color="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD -"
        country=" France -"
        city=" Paris"
      />
      <Job
        color="blue"
        title="Cheffe de projets"
        contractType="CDD -"
        country=" France -"
        city=" Paris"
      />
      <Job
        color="pink"
        title="Développeur react.js"
        contractType="CDI -"
        country=" France -"
        city=" Paris"
      />
      <Job
        color="red"
        title="Sales associate"
        contractType="CDI -"
        country=" Stockholm -"
        city=" Suède"
      />
      <Job
        color="green"
        title="Vendeur/euse"
        contractType="CDI -"
        country=" Suisse"
        city=" Crans-Montana"
      />
      <Job
        color="yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI -"
        country=" USA -"
        city=" New York"
      />
      <Job
        color="blue"
        title="Infirmier"
        contractType="CDI -"
        country=" France -"
        city=" Pantin"
      />
    </div>
  );
};

export default Jobs;
