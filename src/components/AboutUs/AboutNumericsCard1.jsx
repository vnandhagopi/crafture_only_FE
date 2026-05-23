import { Fragment } from "react/jsx-runtime";
import '../../styles/about.css'

const AboutNumericsCard1 = (props) => {
  return (
    <Fragment>
      <div style={{ }} className="card1">
        <p
          style={{ display: props.title ? "block" : "none" }}
          className="text-gray"
        >
          About Us
        </p>
        <h2>Craftsmanship and Quality</h2>
      </div>
    </Fragment>
  );
};

export default AboutNumericsCard1;
