import React from "react";
import styles from "../../app/page.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`mr-3 ml-3 ${styles.bottomText}`} id="footer">
        <p className="mb_unset">Your Smile Our Passion</p>
        <div className={styles.socailMedia}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
      </footer>
    </>
  );
};
export default Footer;
