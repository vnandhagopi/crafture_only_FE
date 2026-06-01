import { Fragment } from "react/jsx-runtime";
import workVideo from "../../assets/videos/aboutWork.mp4"

const AboutWork = () => {
  return (
    <Fragment>
      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "100px 0",
          gap: "50px"
        }}
      >
        <section
          className="w-full sm:w-[50%]"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h1 className="text-4xl font-semibold" >How We do Work</h1>
          <p style={{ color: "rgb(55, 55, 55)" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            veritatis expedita possimus quae, fugiat impedit laborum placeat
            quidem odit, blanditiis magnam?
          </p>
        </section>
        <section>
          <video style={{borderRadius: "25px"}} width="600" controls autoPlay muted loop>
            <source src={workVideo} type="video/mp4" />
            Your browser does not support video.
          </video>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutWork;
