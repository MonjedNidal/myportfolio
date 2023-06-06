import MyNavbar from "./MyNavbar";
function Homepage() {
  return (
    <div>
      <MyNavbar />
      <div className="row homepage">
        <div className="col introText">
          <h1>Monjed Nidal Maswadeh</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button>Let’s get started {" >"}</button>
        </div>
        <div className="col photoContainer">
          <div className="myphoto"></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
