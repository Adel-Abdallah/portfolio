const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Amr Okasha</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://gafo-portfolio.netlify.app/"
          >
            Adel Gafo
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/Adel-Abdallah">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Adel_Gafo">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/Adel-Gafo">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/adelabdallahomar">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
