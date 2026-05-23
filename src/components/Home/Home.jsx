import { Fragment } from "react/jsx-runtime";
import Navbar from "../Navbar"
import Footer from "../Footer";
import HomeContents from "./HomeContents";

const Home = () => {
  
  return (
    <Fragment>
        <div>
          <Navbar activePath = {{path: "/"}}  />
          <HomeContents />
          <Footer />
        </div>
    </Fragment>
  );
};

export default Home;
