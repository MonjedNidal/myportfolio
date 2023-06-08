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
          <div id="firstWorkImg"></div>
          <h2>QR Generator</h2>
          <p>
            QR Code Generator is a user-friendly web application that allows
            users to effortlessly create customized QR codes. With the ability
            to choose background colors and generate codes in popular image
            formats, such as PNG, JPG, JPEG, and SVG, this versatile tool offers
            seamless QR code creation for various purposes
          </p>
          <a href="https://github.com/MonjedNidal/ReactQrGenerator">
            Open in Github {` >`}
          </a>
        </div>
        <div className="col work">
          <div id="secWorkImg"></div>
          <h2>Quote Of The Day</h2>
          <p>
            Quote of the Day is a captivating web application that offers a
            daily dose of motivation. With a simple click, users can discover
            inspiring quotes presented alongside dynamic backgrounds that change
            with each quote. Share your favorite quotes effortlessly on Twitter
            and let inspiration guide your day.
          </p>
          <a href="/">Know more {` >`}</a>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
