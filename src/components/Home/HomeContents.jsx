import { Fragment } from "react/jsx-runtime";
import AboutNumerics from "../AboutUs/AboutNumerics"
import SectionBanner from "./SectionBanner"
import Gallery from "./Gallery";

const HomeContents = () => {
  
  return (
    <Fragment>
          <SectionBanner />
          <AboutNumerics subTitle = {true} title = {true} />
          <Gallery />
    </Fragment>
  );
};

export default HomeContents;
