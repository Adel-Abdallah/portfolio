import Link from 'next/link';

const WorkExperience = ({ resume }) => {
  return (
    <section className="workExperience  main-section flex-column-mobile" id="workexperience">
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                Work Experience
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {resume?.map((item, index) => (
              <li key={index}>
                <div className="animated-layer fade-in-down-animation fadeInUp wow">
                  <div className="experience">
                    <h4>{item.title}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{item.date}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{item.company}</span>
                    </p>
                    {item.pdf && (
                      <div>
                        <h6>Work Experience Certificate</h6>
                        <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                          Click here to Download PDF
                        </a>
                      </div>)}
                    <Link className="custom-btn" href={`/resume-details?id=${item.id}`} passHref>
                      <span>
                        Read More <i className="fa-solid fa-arrow-up-right-from-square" />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}



      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default WorkExperience;
