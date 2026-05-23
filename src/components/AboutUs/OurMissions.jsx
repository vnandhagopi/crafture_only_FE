import { Fragment } from "react/jsx-runtime";
import inner from "../../assets/images/ourmission-inner.jpg";
import outer from "../../assets/images/ourmission-outer.jpg";

const OurMissions = () => {
  const keyPoints = [
    "Deliver quality furniture with trust",
    "Create stylish comfort for homes",
    "Ensure affordable designs for everyone",
    "Craft durable products with precision",
  ];
  return (
    <Fragment>
      <main
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          margin: "50px 0",
        }}
      >
        <section style={{ width: "50%" }}>
          <div style={{ position: "relative" }}>
            <img
              style={{ height: "400px", width: "400px", borderRadius: "15px" }}
              src={outer}
              alt="missions"
            />

            <div style={{ backgroundColor: "white", position: "absolute", bottom: "25%", right: "60px", padding: "10px", borderRadius: "25px"}}>
              <img
                style={{ height: "175px", width: "150px", borderRadius: "15px" }}
                src={inner}
                alt="missions"
              />
            </div>
          </div>
        </section>
        <section
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h1>Our Mission</h1>
          <p style={{ color: "rgb(55, 55, 55)", fontSize: "16px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde at
            doloremque a vel incidunt nulla minima eaque quidem. Rerum laborum
            repellendus corrupti voluptatem natus tenetur amet assumenda minima
            nam, dolorum consectetur, sit laboriosam cupiditate explicabo iste
            harum aliquid quibusdam esse repudiandae inventore iure dolorem
            dignissimos. Magnam iure quidem fugiat accusantium culpa! Amet earum
            pariatur deserunt, optio voluptate libero assumenda adipisci qui, id
            iusto fugit maxime magni officiis neque atque incidunt eum aliquam
            consequuntur. Aliquid officiis corporis modi sunt maiores odio
            perferendis saepe, at a mollitia nemo sequi totam voluptas delectus,
            beatae facilis! Dolorem ab quae obcaecati vel sit exercitationem!
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {keyPoints.map((point) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <span style={{ color: "green", fontWeight: "bold" }}>✓</span>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "rgb(75, 75, 75)",
                    }}
                  >
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default OurMissions;
