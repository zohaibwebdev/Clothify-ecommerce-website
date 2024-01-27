import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
        <p>Clothify</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          Men {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          Women {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
