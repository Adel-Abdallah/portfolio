import Background from "./Background";

const About = ({data}) => {
  const {
    firstname,
    lastname,
    age,
    freelance,
    email,
    location,
    nationality,
    languages,
    phone,
    skype,
    mySkills,
  } = data[0];
  const scePdfLink = "/pdfs/sce.pdf";
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/logos/logo.png" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {firstname}
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {lastname}
              </span>
            </span>
          </h2>
          {/* pdf goes here */}
          <div className="pdfs">
        <div>
          <h6>SCE Professional Architect Certificate</h6>
        <a href={scePdfLink} target="_blank" rel="noopener noreferrer">
            Click here to Download PDF
          </a>
        </div>
      </div>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>{age}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>{nationality}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>{freelance ? "Available":"Not Available"}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Langages :</span>
                    <span>{languages}</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>{location}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>{phone}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>{email}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Skype :</span>
                    <a style={{textDecoration:"none", color:"white"}} href="skype:live:.cid.ef6291e10ee43a65?chat">Amr Okasha</a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}

      <Background/>
      {/* SKILLS STARTS */}
<div className="skills flex-column-mobile">
  {/* TITLE STARTS */}
  <div className="custom-title">
    {/* MAIN TITLE STARTS */}
    <h3>
      <span>
        <span className="animated-layer fade-in-left-animation fadeInUp wow">
          My Skills
        </span>
      </span>
    </h3>
    {/* MAIN TITLE ENDS */}
  </div>
  {/* TITLE ENDS */}
  <div className="skills-content">
    {mySkills.map((skill, index) => (
      <div key={index}>
        {/* SKILL ITEM STARTS */}
        <div className={`animated-layer fade-in-down-animation fadeInLeft wow skill-item-${index}`}>
          <span>
          <img src={skill.img} alt={skill.name} style={{ width: '100px', height: '100px' }} />
          </span>
          <h4>{skill.name}</h4>
        </div>
        {/* SKILL ITEM ENDS */}
      </div>
    ))}
  </div>
</div>
{/* SKILLS ENDS */}

{/* <WorkExperience resume={resume}/> */}


      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
