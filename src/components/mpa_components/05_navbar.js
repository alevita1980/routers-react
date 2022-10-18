import styles from "./05_navbar.module.css";

const NavbarMPA = () => {
  return (
      <nav>
        <ul>
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
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
  );
};

export default NavbarMPA;
