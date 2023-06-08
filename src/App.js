import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./CSS/App.css";
import Homepage from "./components/Homepage";
import CaseStudies from "./components/CaseStudies";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const myElementRef = useRef(null);
  const handleGetStarted = () => {
    myElementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Homepage handleGetStarted={handleGetStarted} />
      <CaseStudies myElementRef={myElementRef} />
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
