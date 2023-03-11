import classNames from "classnames/bind";
import styles from "./style.module.scss";

const Footer = () => {
  const cx = classNames.bind(styles);

  return (
    <footer>
      <div className={cx("container")}>
        <h2>Subscribe to Our Newsletter</h2>
        <form>
          <div>
            <i className="bx bx-envelope"></i>
            <input type="email" placeholder="Your email" />
          </div>
          <button type="submit">Subscribe*</button>
        </form>
        <p>
          *Enjoy using Silicon Template and stay tuned for the latest updates
          and news.
        </p>
        <div className={cx("copyright")}>
          © All rights reserved. Made with
          <i className="bx bx-heart"></i>
          by&nbsp;
          <a href="https://createx.studio/">Createx Studio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
