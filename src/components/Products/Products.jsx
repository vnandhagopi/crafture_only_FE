import { Fragment } from "react/jsx-runtime";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { categories } from "../../DB/categories";
import { products } from "../../DB/products";
import "../../styles/catalog.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [catalog, setCatalog] = useState(products);
  const Navigate = useNavigate();

  const location = useLocation();

  const NavigateContact = (id) => {
    Navigate("/contactus", { state: { id } });
  };

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
          className="m-0 sm:my-[50px]"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
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
            <h1 className="sm:text-[48px] text-2xl">Catalog</h1>
            <div
              style={{
                display: "flex",
                gap: "10px",
                cursor: "pointer",
              }}
            ></div>
          </div>
          <div className="flex-wrap" style={{ display: "flex", gap: "10px" }}>
            <p
              className="catagory-options"
              onClick={() => handleCurrentCategory("all")}
              style={{
                cursor: "pointer",
                border:
                  currentCategory === "all"
                    ? "1px solid black"
                    : "",
                padding: "10px",
                borderRadius: "50px",
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
                    border:
                      currentCategory === data.id
                        ? "1px solid black"
                        : "",
                    padding: "10px",
                    borderRadius: "50px",
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
                      maxWidth: "400px",
                      margin: "10px 0",
                      flexBasis: "350px",
                      flexGrow: "1",
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
                        width: "100%",
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
                        onClick={() => NavigateContact(product.id)}
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
