import MyNavbar from "./MyNavbar";
import {} from "./CaseStudies";
function Homepage({ handleGetStarted }) {
  return (
    <div>
      <MyNavbar />
      <div className="row homepage">
        <div className="col introText">
          <h1>Monjed Nidal Maswadeh</h1>
          <p>
            I am a skilled Frontend React developer, passionate about crafting
            user-friendly and responsive web experiences with expertise in
            modern web technologies.{" "}
          </p>
          <button onClick={handleGetStarted}>Let’s get started {" >"}</button>
        </div>
        <div className="col photoContainer">
          <div className="myphoto"></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
