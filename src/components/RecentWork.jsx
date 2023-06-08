function RecentWork() {
  return (
    <section className="recentWorkSection" id="recentWork">
      <div className="recentsHeading">
        <h1>Recent Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          beatae, placeat quaerat ratione hic eum illo at nemo qui quis.
        </p>
      </div>
      <div className="row container flex-column flex-lg-row">
        <div className="col work">
          <div className="workImg"></div>
          <h2>Work name here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem
            quos esse eius assumenda nesciunt debitis, quas nostrum explicabo
            est minus commodi reiciendis voluptates ex
          </p>
          <a href="/">Know more {` >`}</a>
        </div>
        <div className="col work">
          <div className="workImg"></div>
          <h2>Work name here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem
            quos esse eius assumenda nesciunt debitis, quas nostrum explicabo
            est minus commodi reiciendis voluptates ex
          </p>
          <a href="/">Know more {` >`}</a>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
