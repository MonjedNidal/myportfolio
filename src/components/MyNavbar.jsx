function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#caseStudies">
                Case Studies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#recentWork">
                Recent work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
