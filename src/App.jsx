import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <body>
      <header>
        <Header title="The Job Board" />
      </header>
      <main>
        <Jobs />
      </main>
      <footer>
        <Footer techno="React" school="Le Reacteur" name="Hyzeuline" />
      </footer>
    </body>
  );
}

export default App;
