const Facts = ({ courses }) => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                Courses
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>

        {/* Courses Data */}
        {courses.map((course) => (
          <div
            key={course.id}
            className="animated-layer fade-in-right-animation fadeInLeft wow"
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>{course.name}</h3>
                <p>Duration: {course.duration}</p>
                <p>Provider: {course.provider}</p>
                {/* If the course has sub-courses */}
                {course.courses && (
                  <ul>
                    {course.courses.map((subCourse, index) => (
                      <li key={index}>{subCourse}</li>
                    ))}
                  </ul>
                )}
                {/* Course Leader (if available) */}
                {course.courseLeader && (
                  <p>Course Leader: {course.courseLeader}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Facts;
