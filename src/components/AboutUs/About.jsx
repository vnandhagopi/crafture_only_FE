import { Fragment } from "react/jsx-runtime";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutNumerics from "./AboutNumerics";
import AboutHeaders from "./AboutHeaders";
import OurMissions from "./OurMissions";
import OurVisions from "./OurVisions";
import OurHistory from "./OurHistory";
import AboutWork from "./AboutWork";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Navbar activePath={{ path: "/aboutus" }} />
      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <section
          style={{
            width: "75%",
          }}
        >
          <AboutHeaders />
          <AboutNumerics subTitle={false} title={false} />
          <OurMissions />
          <OurVisions />
          <OurHistory />
          <AboutWork />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default About;
