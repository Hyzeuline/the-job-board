import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Job from "./components/Job";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Header title="The job board" />
      <Job />
      <Footer school="Le Reacteur" position="Le Reacteur" name="Hyzeuline" />
    </>
  );
}

export default App;
