const Home = () => {
  return (
    <section className="home image" id="home">
      <div style={{ margin:"0 auto"}}>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
              Professional architectural engineer
              </span>
            </span>
            <span>
              <span className="animated-layer">Amr Okasha</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
