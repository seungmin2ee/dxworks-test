import styles from "./style.module.scss";
import classNames from "classnames/bind";
import logo from "../../assets/images/logo.svg";
import landings from "../../assets/images/landings.jpg";
import ThemeMode from "../ThemeMode/ThemeMode";
import { menu1, menu2, menu3 } from "./menuLists";
import { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";

const Header = () => {
  const cx = classNames.bind(styles);
  const [isShow, setIsShow] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (idx: number) => {
    if (isShow === idx) setIsShow(null);
    else setIsShow(idx);
  };

  const handleShow = () => {
    setShowMenu(true);
  };

  const handleClose = () => {
    setShowMenu(false);
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
          <div className={cx("menu-container")}>
            <div className={cx("menu-header")}>
              <b>Menu</b>
              <CloseButton onClick={handleClose} />
            </div>
            <ul className={cx("gnb")}>
              <li
                className={cx(isShow === 0 && "active")}
                role="button"
                onClick={() => handleClick(0)}
              >
                <span>Landings</span>
                <div className={cx("dropdown-menu", "menu1")}>
                  <div>
                    <img src={landings} alt="메뉴 이미지" />
                  </div>
                  {[0, 9].map((el, idx) => (
                    <div key={idx}>
                      <ul>
                        {menu1.slice(0 + el, 9 + el).map((menu, idx) => (
                          <li key={idx}>{menu}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
              <li
                className={cx(isShow === 1 && "active")}
                role="button"
                onClick={() => handleClick(1)}
              >
                <span>Pages</span>
                <div className={cx("dropdown-menu", "menu2")}>
                  {[0, 2, 4].map((el, idx) => (
                    <div key={idx}>
                      {menu2
                        .slice(0 + el, idx < 2 ? 2 + el : 2 + el + 1)
                        .map((item, idx) => (
                          <ul key={idx}>
                            {item.name}
                            {item.menu.map((menu, idx) => (
                              <li key={idx}>{menu}</li>
                            ))}
                          </ul>
                        ))}
                    </div>
                  ))}
                </div>
              </li>
              <li
                className={cx(isShow === 2 && "active")}
                role="button"
                onClick={() => handleClick(2)}
              >
                <span>Account</span>
                <div className={cx("dropdown-menu", "menu3")}>
                  <div>
                    <ul>
                      {menu3.map((el, idx) => (
                        <li key={idx}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <span>UI Kit</span>
              </li>
              <li>
                <span>Docs</span>
              </li>
            </ul>
            <div className={cx("menu-footer")}>
              <button>
                <i className="bx bx-cart"></i>
                Buy now
              </button>
            </div>
          </div>
        </nav>
        <div className={cx("theme-mode")}>
          <ThemeMode />
        </div>
        <div className={cx("buttons")}>
          <button className={cx("buy-btn")}>
            <i className="bx bx-cart"></i>
            Buy now
          </button>
          <button className={cx("mobile-menu")} onClick={handleShow}>
            <span>모바일 메뉴</span>
          </button>
        </div>
        {showMenu && <div className={cx("dim")}></div>}
      </div>
    </header>
  );
};

export default Header;
