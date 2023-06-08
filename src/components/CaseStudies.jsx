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
            <h2>Movie Cotalog By NodeJs</h2>
            <p>
              JavaScript movie catalog manager. Users can view, add, update, and
              delete movies. It supports searching and filtering by title,
              director, genre, and release year. The system uses the OMDb API to
              fetch movie data. File operations are handled with the{" "}
              <code>fs</code> module.
            </p>
            <a
              className="secCaseA"
              href="https://github.com/MonjedNidal/Advanced-JS-Training-Final-Project"
            >
              View on github {" >"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
