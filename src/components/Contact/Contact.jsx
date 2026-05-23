import { Fragment } from "react/jsx-runtime";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Products = () => {
  return (
    <Fragment>
      <Navbar activePath = {{path: "/contactus"}} />

      <Footer />
    </Fragment>
  );
};

export default Products;
