import Header from "@/src/components/Header";
import resume from "@/pages/api/resume"
import portfolio from "@/pages/api/portfolio"
import training from "@/pages/api/training"
import education from "@/pages/api/education"
import data from "@/pages/api/data"
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
import WorkExperience from "@/src/components/sections/WorkExperience";
import Training from "@/src/components/sections/Training";
import Education from "@/src/components/sections/Education";



// import Blog from "@/src/components/sections/Blog";


const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About  data={data}/>
            <Separator type={"down"} />
            <WorkExperience  resume={resume} />
            <Separator type={"up"} />
            <Education education={education}/>
            <Separator type={"down"} />
           <Training training={training}/>
            <Separator type={"up"} />
            <Facts courses={data[0].courses} />
            <Separator type={"down"} />
            <Portfolio portfolio={portfolio}/>
            <Separator type={"up"} />
            <Testimonials />
            <Separator type={"down"} />
            {/* <Clients />
            <Separator type={"up"} /> */}
            <Contact email={data[0].email} phone={data[0].phone} address={data[0].location}/>
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
