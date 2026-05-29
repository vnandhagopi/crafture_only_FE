import { Fragment } from "react/jsx-runtime";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { categories } from "../../DB/categories";
import { products } from "../../DB/products";
import "../../styles/catalog.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [catalog, setCatalog] = useState(products);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.id) {
      setCurrentCategory(location.state.id);
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCurrentCategory = (value) => {
    setCurrentCategory(value);
  };

  useEffect(() => {
    if (currentCategory && currentCategory !== "all") {
      const tempCatalog = products.filter((product) => {
        if (product.categoryId === currentCategory) {
          return true;
        } else {
          return false;
        }
      });

      setCatalog(tempCatalog);
    } else {
      setCatalog(products);
    }
  }, [currentCategory]);

  useEffect(() => {
    console.log("Catalog: ", catalog);
  }, [catalog]);

  return (
    <Fragment>
      <Navbar activePath={{ path: "/catalog" }} />
      <main className="my-6 mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-24">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            margin: "50px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <h1 style={{ fontWeight: "400", fontSize: "48px" }}>Catalog</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <p>Sort by</p>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <p
              className="catagory-options"
              onClick={() => handleCurrentCategory("all")}
              style={{
                cursor: "pointer",
                textDecoration: currentCategory === "all" ? "underline" : "",
              }}
            >
              All
            </p>
            {categories.map((data) => {
              return (
                <p
                  onClick={() => handleCurrentCategory(data.id)}
                  className="catagory-options"
                  style={{
                    cursor: "pointer",
                    textDecoration:
                      currentCategory === data.id ? "underline" : "",
                  }}
                  key={data.id}
                >
                  {data.name}
                </p>
              );
            })}
          </div>
        </section>

        <section style={{ margin: "5% 0" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5%" }}>
            {catalog.length ? (
              catalog.map((product, index) => {
                return (
                  <div
                    style={{
                      width: "350px",
                      margin: "25px 0",
                      flexGrow: "1",
                      maxWidth: "30%",
                    }}
                  >
                    <div style={{ width: "100%", height: "300px" }}>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={product.thumbnail}
                        alt={product.slug}
                      ></img>
                    </div>
                    <div
                      style={{
                        padding: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <p style={{ color: "#8d8d8d" }}>{product.title}</p>
                        <h3 style={{ fontSize: "16px" }}>
                          ${product.price} to ${product.mrp}
                        </h3>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <p>Enquire</p>
                        <div
                          style={{
                            backgroundColor: "#F7DCBE",
                            padding: "15px",
                            borderRadius: "50%",
                          }}
                        >
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: "200px",
                }}
              >
                <p>No products found for the selected category</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Products;
