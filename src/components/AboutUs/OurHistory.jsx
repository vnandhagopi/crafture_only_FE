import { Fragment } from "react/jsx-runtime";
import inner from "../../assets/images/history-inner.jpg";
import outer from "../../assets/images/history-outer.jpg";

const OurHistory = () => {
  const keyPoints = [
  "Started with passion for furniture",
  "Served customers with honest craftsmanship",
  "Expanded through quality and dedication",
  "Built legacy of timeless furniture",
];
  return (
    <Fragment>
      <main
        className="flex-wrap-reverse sm:flex-wrap gap-10 sm:gap-[150px] my-14 sm:my-[100px]"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section style={{ width: "400px", flexGrow: "1", height: "500px" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              style={{ height: "100%", width: "100%", borderRadius: "15px" }}
              src={outer}
              alt="history"
            />

            <div className="hidden sm:block" style={{ backgroundColor: "white", position: "absolute", bottom: "30%", right: "-15%", padding: "10px", borderRadius: "25px"}}>
              <img
                style={{ height: "175px", width: "150px", borderRadius: "15px" }}
                src={inner}
                alt="history"
              />
            </div>
          </div>
        </section>
        <section
          style={{
            width: "400px",
            display: "flex",
            flexGrow: "1",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h1 className="text-2xl sm:text-4xl font-semibold">Our History</h1>
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

export default OurHistory;