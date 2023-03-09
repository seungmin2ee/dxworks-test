import classNames from "classnames/bind";
import styles from "./style.module.scss";

const ThemeMode = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("toggle-switch")}>
      <label>
        <span>Light</span>
        <input type="checkbox" id="theme-mode" />
        <span>Dark</span>
      </label>
    </div>
  );
};

export default ThemeMode;
