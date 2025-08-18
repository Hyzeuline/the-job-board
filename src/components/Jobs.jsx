import Job from "./Job";

const Jobs = () => {
  return (
    <div class="container">
      <div class="item">
        <Job
          className="sales"
          title="Full Time Sales Associate"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
      </div>
      <div class="item">
        <Job
          className="security"
          title="Agent de sécurité"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
      <div class="item">
        <Job
          className="industry"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div class="item">
        <Job
          className="health"
          title="Cheffe de projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div class="item">
        <Job
          className="tech"
          title="Développeur react.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
      </div>
      <div class="item">
        <Job
          className="sales"
          title="Sales associate"
          contractType="CDI"
          country=" Stockholm"
          city="Suède"
        />
      </div>
      <div class="item">
        <Job
          className="sales"
          title="Venderu-Crans montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
      </div>
      <div class="item">
        <Job
          className="sales"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
      </div>
      <div class="item">
        <Job
          className="health"
          title="Infirmier"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </div>
  );
};

export default Jobs;
