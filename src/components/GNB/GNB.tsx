import styles from "./style.module.scss";
import classNames from "classnames/bind";
import landings from "../../assets/images/landings.jpg";
import { menu1, menu2, menu3 } from "./menuLists";
import CloseButton from "../CloseButton/CloseButton";
import { Dispatch, SetStateAction } from "react";

interface GNBProps {
  clickedIndex: number | null;
  setClickedIndex: Dispatch<SetStateAction<number | null>>;
  handleClose: () => void;
}

const GNB = ({ clickedIndex, setClickedIndex, handleClose }: GNBProps) => {
  const cx = classNames.bind(styles);

  const handleClick = (idx: number) => {
    if (clickedIndex === idx) setClickedIndex(null);
    else setClickedIndex(idx);
  };

  return (
    <div className={cx("menu-container")}>
      <div className={cx("menu-header")}>
        <b>Menu</b>
        <CloseButton onClick={handleClose} />
      </div>
      <ul className={cx("gnb")}>
        <li
          className={cx(clickedIndex === 0 && "active")}
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
          className={cx(clickedIndex === 1 && "active")}
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
          className={cx(clickedIndex === 2 && "active")}
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
  );
};

export default GNB;
