import "../Styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
