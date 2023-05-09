import styles from "./NavbarV3.module.css";

const NavbarV3 = () => {
  return (
    <nav className={styles.container}>
      <div>LTSE EQITY</div>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Partners</li>
        <li>409A</li>
        <li>Resources</li>
        <li>Sign In</li>
      </ul>
      <div className={styles.btn_group}>
        <button>Public demo</button>
        <button>Get started</button>
      </div>
      <div className={styles.menu_icon}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavbarV3;
