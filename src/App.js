import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CSS/App.css";
import Homepage from "./components/Homepage";
import CaseStudies from "./components/CaseStudies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        <CaseStudies />
      </header>
    </div>
  );
}

export default App;
