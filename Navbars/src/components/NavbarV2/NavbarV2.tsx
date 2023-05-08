import Style from "./Navbar.module.css";
import { FiGlobe } from "react-icons/fi";
const NavbarV2 = () => {
  return (
    <nav className={Style.nav_container}>
      <div className={Style.logo}>Claspo</div>
      <ul className={Style.nav_links}>
        <li>Templates</li>
        <li>Solutions</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Order Widget</li>
      </ul>
      <div className={Style.btn_container}>
        <button className={Style.btn_lang}>
          <FiGlobe />
          Eng
        </button>
        <button className={Style.btn_signup}> Sign Up</button>
      </div>
    </nav>
  );
};

export default NavbarV2;
