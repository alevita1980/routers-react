import styles from "./09_navbar.module.css";
import {NavLink } from "react-router-dom";


const NavbarSPAAuth = (props) => {
  const auth=props.auth;
  return (
    <nav>
      <ul>
        <li>
            <div>Usuario : {auth ? "✅ Autorizado":"❌ No Autorizado"}</div>
        </li>
        <li>
          <NavLink to="/index">Index</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign-up</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/user-info">User Info</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSPAAuth;
