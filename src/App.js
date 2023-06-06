import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CSS/App.css";
import Homepage from "./components/Homepage";
import CaseStudies from "./components/CaseStudies";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        <CaseStudies />
        <RecentWork />
        <Contact />
      </header>
    </div>
  );
}

export default App;
