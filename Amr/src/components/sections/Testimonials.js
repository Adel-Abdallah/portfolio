const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
            Refrences
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Amr is a remarkable colleague whom I had the pleasure of working with for three years. His unwavering commitment, dedication to work, and continuous drive for self-improvement set him apart. Amr's eagerness to assist his colleagues and his profound respect for managerial instructions make him an invaluable asset to any company fortunate enough to have him on board. "
              </span>
              <span className="person">Eng. Mohamed fekry</span>
              <span className="job">Team leader quality control engineer</span>
              <span className="job">MKfakry@gmail.com</span>
              <span className="job">00201000660993</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        {/* <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Amr is a remarkable colleague whom I had the pleasure of working with for three years. His unwavering commitment, dedication to work, and continuous drive for self-improvement set him apart. Amr's eagerness to assist his colleagues and his profound respect for managerial instructions make him an invaluable asset to any company fortunate enough to have him on board. "
              </span>
              <span className="person">Eng. Mohamed fekry</span>
              <span className="job">Team leader quality control engineer</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div> */}
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      {/* <img
        alt=""
        className="z-1 hide-mobile separator"
        src="assets/separator.png"
      /> */}
    </section>
  );
};
export default Testimonials;
