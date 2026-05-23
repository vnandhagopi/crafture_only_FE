import { Fragment } from "react/jsx-runtime";
import img1 from "../../assets/images/gallery (1).jpg";
import img2 from "../../assets/images/gallery (2).jpg";
import img3 from "../../assets/images/gallery (3).jpg";
import img4 from "../../assets/images/gallery (4).jpg";
import cover from "../../assets/images/cover.jpg";
import "../../styles/home.css";

const Gallery = () => {
  return (
    <Fragment>
      <main className="gallery">
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img2" />
        </div>
        <div>
          <img src={img3} alt="img3" />
        </div>
        <div>
          <img src={img4} alt="img4" />
        </div>
      </main>
      <section className="subscribe">
        <div className="subscribe-wrapper">
          <img src={cover} alt="cover" />
          <div className="subscribe-content">
            <h1>Stay Connected with Crafture</h1>
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Gallery;
