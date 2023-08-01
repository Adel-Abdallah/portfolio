import Link from 'next/link';

const Training = ({ training }) => {
  return (
    <section className="training main-section flex-column-mobile" id="training">
      {/* TRAINING STARTS */}
      <div className="custom-title fadeInUp wow">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation">
              Training
            </span>
          </span>
        </h3>
      </div>
      {/* TRAINING ENDS */}
      {/* TIMELINE STARTS */}
      <div className="timeline">
        <div className="animated-layer fade-in-animation">
          {training.map((item, index) => (
            <div key={index}>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4 style={{color:" #ffb400"}}>{item.title}</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{item.date}</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>{item.company}</span>
                  </p>
                  <Link
                    className="custom-btn"
                    href={`/training-details?id=${item.id}`}
                    passHref
                  >
                    <span>
                      Read More{' '}
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* TIMELINE ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default Training;
