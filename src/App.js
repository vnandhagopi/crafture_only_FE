import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact"
import ContextProvider from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element= {<Products />}></Route>
          <Route path="/aboutus" element= {<About />}></Route>
          <Route path="/contactus" element= {<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
