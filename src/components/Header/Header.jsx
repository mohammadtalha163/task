import React from "react";
import styles from "../../app/page.module.css";

const Header = () => {
  return (
    <>
      <div className="d-flex mr-3 ml-3 mt-4" id="navAnimation">
        <div className={styles.navItem}>
          <span>Menu</span>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className={styles.toothText} id="centerTextIcon">
          <i className="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>
          <span>DENTYTECH</span>
        </div>
        <div className={`${styles.navItem} text-sm-right`}>
          <span>Login</span>
          <span className={`border-0 ${styles.signup}`}>SignUp</span>
        </div>
      </div>
    </>
  );
};
export default Header;
