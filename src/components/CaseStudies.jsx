function CaseStudies() {
  return (
    <section className="caseStudiesSection container">
      <h1>Case Studies</h1>
      <div className="caseStudies d-flex justify-content-center">
        <div class="row case flex-column flex-md-row">
          <div class="col caseText ">
            <h2>Work name here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <a href="/">View case study {" >"}</a>
          </div>
          <div class="col caseImg"></div>
        </div>
        <div class="row case flex-column-reverse flex-md-row">
          <div class="col caseImg"></div>
          <div class="col caseText">
            <h2>Work name here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <a className="secCaseA" href="/">View case study {" >"}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
