import { Fragment } from "react/jsx-runtime";
import AboutNumerics from "../AboutUs/AboutNumerics"
import SectionBanner from "./SectionBanner"
import Gallery from "./Gallery";
import NewlyAdded from "./NewlyAdded";

const HomeContents = () => {
  
  return (
    <Fragment>
          <SectionBanner />
          <AboutNumerics subTitle = {true} title = {true} />
          <Gallery />
          <NewlyAdded />
    </Fragment>
  );
};

export default HomeContents;
