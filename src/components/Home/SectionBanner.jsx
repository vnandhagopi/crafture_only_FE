import { Fragment } from "react/jsx-runtime";
import "../../styles/home.css"
import banner from "../../assets/images/banner.jpg"

const SectionBanner = () => {
  return (
    <Fragment>
      <main className="banner">
        <div className="section-1">
          <div className="sec-card-1">
            <h1>Transform Your Space with Timeless Furniture</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, sit architecto recusandae reiciendis at fugit sapiente rerum rem pariatur exercitationem
            </p>
          </div>
          <div className="sec-card-2">
            <div className="arrow-icon">
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <div className="section-2">
            <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=90&w=1600&h=1800&auto=format&fit=crop" alt="banner"></img>
        </div>
      </main>
    </Fragment>
  );
};

export default SectionBanner;
