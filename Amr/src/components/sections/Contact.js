const Contact = ({ phone, address, email }) => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              {phone}
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              {address}
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <a style={{textDecoration:"none"}} href="skype:live:.cid.ef6291e10ee43a65?chat">
            <p style={{color:"white"}}>
              <span className="small-text">Skype</span>
              Click to chat on Skype
            </p>
            </a>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              {/* <li>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </li> */}
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      {/* <img alt="" className="separator hide-mobile" src="assets/separator.png" /> */}
    </section>
  );
};

export default Contact;
