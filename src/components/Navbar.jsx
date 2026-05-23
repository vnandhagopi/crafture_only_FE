import { useNavigate } from "react-router-dom"
import "../styles/navbar.css"
import MobileNav from "./MobileNav";
import { useContext } from "react";
import { NewContext } from "../contexts/ContextProvider";

const Navbar = (props) => {
    const Navigate = useNavigate();
    const Context = useContext(NewContext);

    const handleNavigate = (path) => {
        Navigate(path)
    }

    const setSideNav = Context.setSideNav

    return (
        <div className="navbar">
            <div className="nav-sec1">
                <h1>Crafture</h1>
                {/* <img src="" alt="logo"></img> */}
            </div>
            <div className="nav-sec2">
                <p onClick={ () => handleNavigate('/') } style={{color: props.activePath.path === "/" ? "black" : ''}}>Home</p>
                <p onClick={ () => handleNavigate('/products') } style={{color: props.activePath.path === "/products" ? "black" : ''}} >Products</p>
                <p onClick={ () => handleNavigate('/aboutus') } style={{color: props.activePath.path === "/aboutus" ? "black" : ''}}>About</p>
                <p onClick={ () => handleNavigate('/contactus') } style={{color: props.activePath.path === "/contactus" ? "black" : ''}}>Contact Us</p>
            </div>
            <div className="nav-sec3">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bag-shopping"></i>
                <i onClick={() => setSideNav(true)} class="fa-solid fa-bars hamburger"></i>
            </div>

            <MobileNav path = {props.activePath.path} />
        </div>
    )
}

export default Navbar