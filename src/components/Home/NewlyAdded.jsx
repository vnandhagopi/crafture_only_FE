import { Fragment } from "react/jsx-runtime";
import { categories } from "../../DB/categories";
import { products } from "../../DB/products";
import { useNavigate } from "react-router-dom";

const NewlyAdded = () => {
  const Navigate = useNavigate();
  const newlyAdded = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const productsWithCategories = newlyAdded.map((product) => {
    const category = categories.find(
      (category) => category.id === product.categoryId,
    );

    return {
      ...product,
      category,
    };
  });

  const NavigateContact = (id) => {
    Navigate("/contactus", { state: { id } })
  }

  const NavigateCatalog = () => {
    Navigate("/catalog")
  }

  return (
    <Fragment>
      <main style={{ margin: "100px 50px" }}>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <div style={{ width: "30%" }}>
            <p style={{ marginBottom: "10px", color: "#a0a0a0" }}>
              Featured Furniture
            </p>
            <h2 style={{ fontSize: "45px" }}>Fresh From Our Studio</h2>
          </div>
          <div style={{ padding: "10px" }} onClick={ NavigateCatalog }>
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
              Show More Collections
            </p>
          </div>
        </section>
        <section style={{ margin: "25px 0", width: "100%" }}>
          <div className="w-full gap-3 grid grid-cols-2">
            <div onClick={()=>NavigateContact(productsWithCategories[0].id)} className="w-full h-full flex flex-col rounded-md gap-3 cursor-pointer">
              <img
                className="w-full h-full rounded-md hover:shadow-xl"
                src={productsWithCategories[0].thumbnail}
                alt={productsWithCategories[0].slug}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold" >{productsWithCategories[0].title}</h3>
                <p className="text-sm text-[#444444]">{productsWithCategories[0].category.name}</p>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-full grid grid-cols-2 gap-3">
                {productsWithCategories.map((product, index) => {
                  return index === 0 ? (
                    <Fragment />
                  ) : (
                    <div onClick={()=>NavigateContact(product.id)} className="w-full rounded-t-md flex flex-col gap-3 cursor-pointer">
                      <img
                        className="w-full h-48 rounded-md hover:shadow-xl"
                        src={product.thumbnail}
                        alt={product.slug}
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold">{product.title}</h3>
                        <p className="text-xs text-[#444444]">{product.category.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default NewlyAdded;
