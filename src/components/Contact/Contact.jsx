import { Fragment } from "react/jsx-runtime";
import banner from "../../assets/images/contact-banner.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/contact.css";
import { products } from "../../DB/products";
import { useEffect, useState } from "react";
import API from "../../plugins/axios";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [clickableProduct, setClickableProduct] = useState(true);

  const [errors, setErrors] = useState({});

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state?.id) {
      setProduct(location.state.id);
      setClickableProduct(false);
    }
  }, [location.state]);

  const validateForm = () => {
    let newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!product) {
      newErrors.product = "Please select a product";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFullName = (evt) => {
    setFullName(evt.target.value);
  };

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePhone = (evt) => {
    setPhone(evt.target.value);
  };

  const handleProduct = (evt) => {
    setProduct(evt.target.value);
  };

  const handleMessage = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSend = async () => {
    const formValidation = validateForm();

    if (!formValidation) {
      return;
    }

    const productselected = products.find(
      (data) => Number(data.id) === Number(product),
    );

    const payload = {
      name: fullName,
      email: email,
      phone: phone,
      selectedProduct: productselected,
      message: message,
    };

    console.log("Payload for send mail:", payload);

    try {
      const response = await API.post("/send-enquiry", payload);

      console.log(response);

      alert("Enquiry Sent Successfully");

      setFullName("");
      setEmail("");
      setPhone("");
      setProduct("");
      setMessage("");
    } catch (err) {
      console.log(err);

      alert("Failed to send enquiry");
    }
  };

  return (
    <Fragment>
      <Navbar activePath={{ path: "/contactus" }} />
      <main style={{ margin: "50px 100px" }}>
        <section style={{ display: "flex", width: "100%", gap: "10%" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <h1 style={{ fontWeight: "lighter", fontSize: "48px" }}>
              Get in Touch with our Artisans
            </h1>
            <p style={{ color: "#444444" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati placeat mollitia officia! Similique doloremque aperiam
              sint dolores suscipit nam porro illum, pariatur, repudiandae
              ratione earum.
            </p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                margin: "25px 0",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      color: "#444444",
                      fontSize: "12px",
                    }}
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    className="contact-input"
                    required
                    value={fullName}
                    onChange={handleFullName}
                    style={{
                      width: "100%",
                      outline: "none",
                      padding: "10px 0",
                      borderBottom: errors.fullName ? "2px solid red" : "",
                    }}
                    placeholder="Peter Parker"
                  />
                  {errors.fullName && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      color: "#444444",
                      fontSize: "12px",
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    className="contact-input"
                    required
                    value={email}
                    onChange={handleEmail}
                    style={{
                      width: "100%",
                      outline: "none",
                      padding: "10px 0",
                      borderBottom: errors.email ? "2px solid red" : "",
                    }}
                    placeholder="parkerpeter@example.com"
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  style={{
                    display: "block",
                    color: "#444444",
                    fontSize: "12px",
                  }}
                >
                  PHONE
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  required
                  placeholder="+91 98765 43210"
                  className="contact-input"
                  style={{
                    width: "100%",
                    outline: "none",
                    padding: "10px 0",
                    borderBottom: errors.phone ? "2px solid red" : "",
                  }}
                />
                {errors.phone && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.phone}
                  </span>
                )}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  style={{
                    display: "block",
                    color: "#444444",
                    fontSize: "12px",
                  }}
                >
                  SELECT PRODUCT
                </label>
                <select
                  value={product}
                  onChange={handleProduct}
                  required
                  disabled={!clickableProduct}
                  className="contact-select"
                  style={{
                    borderBottom: errors.product ? "2px solid red" : "",
                  }}
                >
                  <option value="">Select Product</option>

                  {products.map((product) => {
                    return (
                      <option key={product.id} value={product.id}>
                        {product.title}
                      </option>
                    );
                  })}
                </select>
                {errors.product && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.product}
                  </span>
                )}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  style={{
                    display: "block",
                    color: "#444444",
                    fontSize: "12px",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  value={message}
                  onChange={handleMessage}
                  placeholder="How can we help you? (Optional)"
                  className="contact-input"
                  style={{
                    width: "100%",
                    height: "100px",
                    outline: "none",
                    padding: "10px 0",
                  }}
                />
              </div>
              <div
                onClick={handleSend}
                style={{
                  margin: "25px 0",
                  width: "fit-content",
                  fontSize: "12px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "end",
                  gap: "10px",
                  borderRadius: "50px",
                  backgroundColor: "black",
                  color: "white",
                  padding: "20px 30px",
                }}
              >
                <p>Send Enquire</p>
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>

              <hr
                style={{
                  border: "none",
                  borderTop: "2px solid #E2E3E3",
                }}
              ></hr>

              <div
                className="contact-address"
                style={{
                  margin: "25px 0",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "10%",
                }}
              >
                <div style={{ width: "45%" }}>
                  <h5>Office & Studio</h5>
                  <p>
                    29, Anna Nagar, Nagal Nagar Post, Dindigul - 624003, Tamil
                    Nadu, India
                  </p>
                </div>
                <div style={{ width: "45%" }}>
                  <h5>Direct Contact</h5>
                  <p>nandhagopiv@gmail.com</p>
                  <p>+91 63823 72062</p>
                </div>
              </div>
            </form>
          </div>
          <div style={{ width: "50%", position: "relative" }}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              src={banner}
              alt="banner"
            ></img>
            <div
              style={{
                padding: "30px",
                borderRadius: "5px",
                backgroundColor: "#F8F7F4",
                width: "200px",
                position: "absolute",
                bottom: "5%",
                right: "10%",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "5px",
                  color: "#805B05",
                }}
              >
                THE STUDIO
              </p>
              <p style={{ fontStyle: "italic" }}>
                "Design is not what it looks like and feels like. Design is how
                it works."
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "10%",
                width: "125px",
                height: "125px",
                backgroundColor: "#FEC24E",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="fa-solid fa-star fa-rotate-by"
                style={{ color: "rgb(114, 80, 0)", fontSize: "30px" }}
              ></i>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Products;
