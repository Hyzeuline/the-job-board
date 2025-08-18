import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <body>
      <Header title="The Job Board" />
      <main>
        <Jobs />
      </main>
      <Footer techno="React" school="Le Reacteur" name="Hyzeuline" />
    </body>
  );
}

export default App;
