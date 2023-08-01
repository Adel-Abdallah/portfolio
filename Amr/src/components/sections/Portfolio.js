import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Portfolio = ({ portfolio }) => {

  return (
    <section className="portfolio main-section flex-column-mobile" id="portfolio">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PROJECTS START */}
        {portfolio.map((project) => (
          <SwiperSlide className="single-item swiper-slide" key={project.id}>
            {/* ITEM MAIN CONTENT STARTS */}
            <div className="main-content">
              <img className="img-fluid" src={project.images[0]} alt="Image Project" />
            </div>
            {/* ITEM MAIN CONTENT ENDS */}
            {/* ITEM DETAILS STARTS */}
            <div className="details">
              <h4>{project.title}</h4>
              {project?.branch ? <h5>{project.branch}</h5>  : null}
              
              <div>
                <ul>
                  <li>
                    <span>
                      <i className="fa-regular fa-file-lines" /> Project :
                    </span>
                    <span>{project.projectName}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-user" /> Project Type :
                    </span>
                    <span>{project.projectType}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-hourglass" /> City :
                    </span>
                    <span>{project.city}</span>
                  </li>
                </ul>
              </div>
              <Link className="custom-btn" href={`/project-details?id=${project.id}`} passHref>
                  <span>
                    preview <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
              </Link>

            </div>
            {/* ITEM DETAILS ENDS */}
          </SwiperSlide>
        ))}
        {/* PROJECTS END */}

        {/* NAVIGATION BUTTONS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default Portfolio;
