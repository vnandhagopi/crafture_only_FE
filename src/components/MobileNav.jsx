import { Fragment } from "react/jsx-runtime";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NewContext } from "../contexts/ContextProvider";

const MobileNav = (props) => {
  const Menus = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "Catalog",
      path: "/catalog",
    },
    {
      title: "ABOUT",
      path: "/aboutus",
    },
    {
      title: "CONTACT US",
      path: "/contactus",
    },
  ];

  const Navigate = useNavigate();
  const Context = useContext(NewContext);

  const sideNav = Context.sideNav;
  const setSideNav = Context.setSideNav;

  const handleNavigate = (path) => {
    setSideNav(false);
    Navigate(path);
  };

  return (
    <Fragment>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: sideNav ? "0" : "100%",
          backgroundColor: "white",
          zIndex: "2",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px",
          }}
        >
          <div style={{ fontSize: "14px" }}>
            <h1>CRAFTURE</h1>
            {/* <img src="" alt="logo"></img> */}
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setSideNav(false)}
          >
            <i style={{ fontSize: "24px" }} class="fa-solid fa-x"></i>
          </div>
        </section>
        <section style={{ padding: "18px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            {Menus.map((menu, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "start",
                    alignItems: "center",
                    color: props.path === menu.path ? "black" : "#5c5c5c",
                  }}
                  onClick={() => handleNavigate(menu.path)}
                >
                  <p style={{ width: "20px" }}>{`0${index}`}</p>
                  <h2>{menu.title.toUpperCase()}</h2>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </Fragment>
  );
};

export default MobileNav;
