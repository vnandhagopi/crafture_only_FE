import { Fragment } from "react/jsx-runtime";
import "../../styles/about.css";
import AboutNumericsCard1 from "./AboutNumericsCard1";

const AboutNumerics = (props) => {
  const aboutus2Array = [
    {
      title: "10K +",
      desc: "Lorem ipsum dolor sit lor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.",
    },
    {
      title: "90%",
      desc: "orem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "900 +",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor",
    },
  ];

  return (
    <Fragment>
      <main className="aboutus">
        <div style={{ justifyContent: 'center' }} className="aboutus-1">
          {/* <div style={{width: "40%"}} className="card1">
            <p style={{display: props.title ? 'block' : 'none'}} className="text-gray">About Us</p>
            <h2>Craftsmanship and Quality</h2>
          </div> */}

          {props.subTitle ? (
            <AboutNumericsCard1 title={props.title} />
          ) : (
            <Fragment />
          )}

          <div style={{ width: props.subTitle ? "" : '100%', textAlign: props.subTitle? "justify" : "center" }} id="aboutNumCard2" className="card2">
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              natus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae, itaque! at architecto nulla impedit incidunt
              omnis amet? Similique accusamus libero eum, eveniet necessitatibus
              eius,{` `}
              <span className="text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                debitis blanditiis non. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Iure, quia? facere,
                nulla officiis fugit consequuntur animi vel earum rem natus sunt
                assumenda ab
              </span>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="aboutus-2">
            {aboutus2Array.map((data) => {
              return (
                <div>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AboutNumerics;
