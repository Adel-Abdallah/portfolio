const Education = ({ education }) => {
    return (
        <section className="education main-section flex-column-mobile" id="education">
            {/* EDUCATION STARTS */}
            <div className="custom-title fadeInUp wow">
                <h3>
                    <span>
                        <span className="animated-layer fade-in-left-animation">
                            Education
                        </span>
                    </span>
                </h3>
            </div>
            {/* EDUCATION ENDS */}
            {/* TIMELINE STARTS */}
            <div className="timeline">
                <div className="animated-layer fade-in-animation">
                        <div className="animated-layer fade-in-down-animation fadeInUp wow">
                            <div className="experience">
                                <h4 style={{color:" #ffb400"}}>Education</h4>
                                <img src={education[0].image} alt='' />
                                <p>
                                    <i className="fa-regular fa-clock" />
                                    <span>{education[0].date}</span>
                                </p>
                                <p>
                                    <i className="fa-regular fa-building" />
                                    <span>{education[0].details}</span>
                                </p>
                            </div>
                        </div>
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

export default Education;
