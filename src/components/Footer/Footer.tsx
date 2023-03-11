import classNames from "classnames/bind";
import { FormEvent } from "react";
import styles from "./style.module.scss";

const Footer = () => {
  const cx = classNames.bind(styles);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer>
      <div className={cx("container")}>
        <div>
          <h2>Subscribe to Our Newsletter</h2>
          <form onSubmit={handleSubmit}>
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
        </div>
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
