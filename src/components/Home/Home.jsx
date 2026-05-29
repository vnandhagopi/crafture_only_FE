import { Fragment } from "react/jsx-runtime";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import HomeContents from "./HomeContents";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div>
        <Navbar activePath={{ path: "/" }} />
        <HomeContents />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
