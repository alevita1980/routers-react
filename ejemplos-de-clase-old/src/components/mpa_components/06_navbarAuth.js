import styles from "./05_navbar.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../App";

const NavbarMPAAuth = (props) => {
  const auth=props.authorized;
  // const setAuth=props.setAuth;
  return (
    <nav>
      <ul>
        <li>
            <div>Usuario : {auth? "Autorizado":"No Autorizado"}</div>
        </li>
        <li>
          <a href="/index">Index</a>
        </li>
        <li>
          <a href="/sign-up">Sign-up</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/user-info">User Info</a>
        </li>
        <li>
          <a href="/wishlist">Wishlist</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMPAAuth;
