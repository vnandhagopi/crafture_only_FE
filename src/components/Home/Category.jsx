import { Fragment } from "react/jsx-runtime";
import { categories } from "../../DB/categories";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const Navigate = useNavigate();

  const NavigateCategory = (id) => {
    Navigate("/catalog", { state: { id } })
  }

  return (
    <Fragment>
      <main style={{ margin: "50px" }}>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <div style={{ width: "30%" }}>
            <p style={{ marginBottom: "10px", color: "#a0a0a0" }}>Category</p>
            <h2 style={{ fontSize: "45px" }}>Find Your Perfect Piece</h2>
          </div>
          <div onClick={()=> {Navigate("/catalog")}} style={{ padding: "10px" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                padding: "10px 20px",
                border: "1px solid #a0a0a0",
                cursor: "pointer",
                borderRadius: "50px",
              }}
            >
              See all category
            </p>
          </div>
        </section>
        <section style={{ margin: "25px 0", width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: "1%",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {categories.map((data) => {
              return (
                <div
                  onClick={()=>NavigateCategory(data.id)}
                  className="hover:shadow-2xl"
                  style={{
                    position: "relative",
                    borderRadius: "5px",
                    height: "175px",
                    flexGrow: "1",
                    flexBasis: "24%",
                    maxWidth: "24%",
                    marginTop: "15px",
                  }}
                >
                  <img
                    style={{ width: "100%", borderRadius: "5px", height: "100%" }}
                    src={data.image}
                    alt={data.slug}
                  ></img>
                  <div className="cursor-pointer" style={{ position: "absolute", borderRadius: "5px", backgroundColor: "#00000058", width: "100%", height: "100%", top: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p style={{color: "white", fontSize: "22px"}}>{data.name}</p>
                  </div> 
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Category;
