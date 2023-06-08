import work2Img from "../assets/work2.png";

function CaseStudies({ myElementRef }) {
  return (
    <section
      id="caseStudies"
      ref={myElementRef}
      className="caseStudiesSection container"
    >
      <h1>Case Studies</h1>
      <div className="caseStudies d-flex justify-content-center">
        <div class="row case flex-column flex-md-row">
          <div class="col caseText">
            <h2>My Major</h2>
            <p>
              My major is a website that fixed the problem of high school
              graduates. In my major they put there degree and the field of
              study like Scientefic, Literary.. etc. Then in the bottom of the
              page there is a table will be generated after clicking search
              button and contains the universities and the fields and the
              credits and the cost of the majors he can join, By the way this
              project made in 12 hours in competition in the university.
            </p>
            <a href="https://mymajor.netlify.app/">View case study {" >"}</a>
          </div>
          <div id="firstCaseImg" class="col caseImg"></div>
        </div>
        <div class="row case flex-column-reverse flex-md-row">
          <div id="secCaseImg" class="col caseImg"></div>
          <div class="col caseText">
            <h2>Work name here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <a className="secCaseA" href="/">
              View case study {" >"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
