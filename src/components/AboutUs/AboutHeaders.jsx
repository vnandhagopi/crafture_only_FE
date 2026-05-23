import { Fragment } from "react/jsx-runtime";
import coverAbout from "../../assets/images/cover-aboutus.jpg";

const AboutHeaders = () => {
  return (
    <Fragment>
      <main className="about-headers">
        <section className="about-headers_card-1">
          <h3>
            [Home / <span>About]</span>
          </h3>
          <h2>Crafting Excellence Together</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quaerat, eos sequi maxime voluptates dicta eum repellat expedita
            quibusdam veniam maiores? Consequatur, hic? Labore voluptatem fugit
            nemo ducimus, voluptas nostrum autem ipsum cum, corporis dicta
            aliquid aspernatur a beatae maxime quod totam culpa dolorem
            consectetur nulla quasi quibusdam quas molestiae. labore dicta eius
            earum illo.
          </p>
        </section>
        <section
          style={{
            position: "relative",
          }}
          className="about-headers_card-2"
        >
          <img
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "25px",
            }}
            src={coverAbout}
            alt="poster"
          ></img>
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              left: "-50px",
              bottom: "-50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "125px",
                height: "125px",
                backgroundColor: "#FAFAFA",
                borderRadius: "50%",
                border: "solid 1px #bebebe",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FFBC45",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "30px" }}>➚</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutHeaders;
