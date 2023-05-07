import Style from "./Navbar.module.css";
import { FaTwitter } from "react-icons/fa";
import { CgCornerUpRight } from "react-icons/cg";
const NavbarV1 = () => {
  return (
    <nav className={Style.nav_container}>
      <div className={Style.logo}>Kernal</div>
      <div>
        <ul className={Style.nav_links}>
          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
          <div className={Style.btn_container}>
            <button className={Style.btn_follow}>
              <FaTwitter />
              <p>Follow</p>
            </button>
            <button className={Style.btn_try}>
              <p>Try for free</p>
              <CgCornerUpRight />
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarV1;
