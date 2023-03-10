import styles from "./style.module.scss";
import classNames from "classnames/bind";
import logo from "../../assets/images/logo.svg";
import ThemeMode from "../ThemeMode/ThemeMode";
import { useState } from "react";
import GNB from "../GNB/GNB";

const Header = () => {
  const cx = classNames.bind(styles);
  const [showMenu, setShowMenu] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleShow = () => {
    setShowMenu(true);
    document.body.setAttribute("style", "overflow: hidden;");
  };

  const handleClose = () => {
    setClickedIndex(null);
    setShowMenu(false);
    document.body.setAttribute("style", "overflow: auto;");
  };

  return (
    <header>
      <div className={cx("wrapper")}>
        <h1 className={cx("logo")}>
          <a href="/">
            <img src={logo} alt="Silicon 로고" />
            Silicon
          </a>
        </h1>
        <nav className={cx(showMenu && "show-menu")}>
          <GNB
            clickedIndex={clickedIndex}
            setClickedIndex={setClickedIndex}
            handleClose={handleClose}
          />
        </nav>
        <div className={cx("theme-mode")}>
          <ThemeMode />
        </div>
        <div className={cx("buttons")}>
          <button className={cx("buy-btn")}>
            <i className="bx bx-cart"></i>
            Buy now
          </button>
          <button className={cx("sidemenu-btn")} onClick={handleShow}>
            <span>메뉴 열기</span>
          </button>
        </div>
        {showMenu && <div className={cx("dim")} onClick={handleClose}></div>}
      </div>
    </header>
  );
};

export default Header;
